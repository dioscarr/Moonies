using Microsoft.EntityFrameworkCore.Migrations;

namespace MooniesApp.Data.Migrations
{
    public partial class UpdateAddedContent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Homes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Content",
                table: "Homes");
        }
    }
}
