using System;
using Microsoft.EntityFrameworkCore;
using Restful.Models;

namespace ContentData{

   public class ContentContext:DbContext{

       public ContentContext(DbContextOptions<ContentContext> options): base(options){}

       public DbSet<UserContentDetails> UserContentDetails{get;set;}
       public DbSet<UserFileDetails> UserFileDetails{get;set;}

   }
   
}