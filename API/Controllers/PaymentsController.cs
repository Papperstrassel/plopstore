using System.IO;
using System.Threading.Tasks;
using API.Errors;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Stripe;
using Order = Core.Entities.OrderAggregate.Order; //Removes ambigouity on what order object we're using. We use our order object and not the one coming from Stripe class. 

namespace API.Controllers
{
    public class PaymentsController : BaseApiController
    {
        private readonly IPaymentService _paymentService;
        private readonly ILogger<PaymentsController> _logger;
        private const string WhSecret = "whsec_798a4a56f1b5cda0ea9f800f9486f6be37086201a8dbe9630cd2406e4c125762"; // We're going to get "something" from stripe telling us we can trust it. 

        public PaymentsController(IPaymentService paymentService, ILogger<PaymentsController> logger)
        {
            _paymentService = paymentService;
            _logger = logger;
        }

        [Authorize]
        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {
           var basket = await _paymentService.CreateOrUpdatePaymentIntent(basketId);

           if (basket == null) return BadRequest(new ApiResponse(400, "Problem with your basket"));

           return basket;
        }

        [HttpPost("webhook")] //At this point we're confirming payment from Stripe so we need to make sure its secure since its open to anyone to request this api. 
        public async Task<ActionResult> StripeWebhook()
        {
            // We need to read whats coming from the Stripe webhook to this API endpoint. 
            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync(); 

            //pass in the WbSecret to make sure this is actually coming from Stripe, so we can trust the stripe event.
            var stripeEvent = EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"],
                WhSecret);

            PaymentIntent intent;
            Order order; //Order class from Core entities that we have created. 

            switch(stripeEvent.Type)
            {
                case "payment_intent.succeeded":
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    _logger.LogInformation("Payment Succeeded: ", intent.Id);
                    order = await _paymentService.UpdateOrderPaymentSucceeded(intent.Id);
                    _logger.LogInformation("Order updated to payment recieved: ", order.Id);
                    break;
                case "payment_intent.payment_failed":
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    _logger.LogInformation("Payment Failed: ", intent.Id);
                    order = await _paymentService.UpdateOrderPaymentFailed(intent.Id);
                    _logger.LogInformation("Payment Failed: ", order.Id);
                    break;
            }
            //We need to notify Stripe that we have recieved their events, and we do this by sending a new emptyResult
            //In production Stripe will keep resending these events for up to 3 days  if a response from us is not recieved.  
            return new EmptyResult();
        }

    }
}