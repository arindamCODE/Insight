using System;
using Microsoft.EntityFrameworkCore;
using TextModel.Models;
using System.ComponentModel.DataAnnotations;

namespace textmodel{

    public class TextContext:DbContext{

        public TextContext(DbContextOptions<TextContext> options): base(options){}

        public DbSet<TextArea> TextArea{get;set;}
    }
}