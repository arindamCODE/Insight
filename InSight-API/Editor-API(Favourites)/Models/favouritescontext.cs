using System;
using Microsoft.EntityFrameworkCore;
using favouritesModel.Models;
using System.ComponentModel.DataAnnotations;
using ContentData;
namespace Favouritesmodel{

    public class FavouritesContext:DbContext{

        public FavouritesContext(DbContextOptions<FavouritesContext> options): base(options){}

        //public DbSet<UserContentDetails> UserContentDetails  {get;set;}
        public DbSet<UserFileDetails> UserFileDetails  {get;set;}

        public DbSet<UserContentFileDetails> UserContentDetails{get;set;}
    }
}