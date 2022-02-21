using System;
using System.Linq.Expressions;
using Core.Entities.OrderAggregate;

namespace Core.Specification
{
    public class OrdersWithItemsAndOrderings : BaseSpecification<Order>
    {
        public OrdersWithItemsAndOrderings(string email) : base(o => o.BuyerEmail == email)
        {
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDescending(o => o.OrderDate);
        }

        public OrdersWithItemsAndOrderings(int id, string email)
            : base(o => o.Id == id && o.BuyerEmail == email)
        {
             AddInclude(o => o.OrderItems);
             AddInclude(o => o.DeliveryMethod);
        }
    }
}
