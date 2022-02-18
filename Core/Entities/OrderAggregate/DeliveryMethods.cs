namespace Core.Entities.OrderAggregate
{
    public class DeliveryMethod : BaseEntity
    {
        // This will be assigned an id since we're deriving from baseEntity
        public string ShortName { get; set; }
        public string DeliveryTime { get; set; }
        public string Description { get; set; }  
        public decimal Price { get; set; } 
    }
}
