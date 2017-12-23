using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace favouritesModel.Models{
    
    public class Favouriteslist{
         [Required,Key]
        public int ID { get; set;}
        [Required]
        public string Value{ get; set;}
        public string MetaTags { get; set; }
        public bool Favourites { get; set;}
        public string Users { get; set; }
        public bool IsDelete { get; set;}
       


    }
}