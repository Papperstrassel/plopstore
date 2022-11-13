namespace Core.Entities
{
    public class Photo : BaseEntity
    {
        public string PictureUrl { get; set; }
        public string FileName { get; set; }
        public bool IsMain { get; set; }
        public Product Product { get; set; }
        public int ProductId { get; set; }

        //Cloudinary publicid, for adding and deleting images from cloudinary service
        public string PublicId { get; set; }
    }
}