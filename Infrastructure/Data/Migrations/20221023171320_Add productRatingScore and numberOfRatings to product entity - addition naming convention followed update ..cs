using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Data.Migrations
{
    public partial class AddproductRatingScoreandnumberOfRatingstoproductentityadditionnamingconventionfollowedupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "productSKU",
                table: "Products",
                newName: "ProductSKU");

            migrationBuilder.RenameColumn(
                name: "productRatingScore",
                table: "Products",
                newName: "ProductRatingScore");

            migrationBuilder.RenameColumn(
                name: "numberOfRatings",
                table: "Products",
                newName: "NumberOfRatings");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProductSKU",
                table: "Products",
                newName: "productSKU");

            migrationBuilder.RenameColumn(
                name: "ProductRatingScore",
                table: "Products",
                newName: "productRatingScore");

            migrationBuilder.RenameColumn(
                name: "NumberOfRatings",
                table: "Products",
                newName: "numberOfRatings");
        }
    }
}
