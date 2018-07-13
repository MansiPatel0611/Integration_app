using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Integration.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    LangKnown = table.Column<int>(nullable: false),
                    address = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    experience = table.Column<string>(nullable: true),
                    firstname = table.Column<string>(nullable: true),
                    gender = table.Column<string>(nullable: true),
                    lastname = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true),
                    qualification = table.Column<string>(nullable: true),
                    username = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");
        }
    }
}
