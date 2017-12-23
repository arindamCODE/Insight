using System.ComponentModel.DataAnnotations;
using System;

namespace HandleContent
{
    public class UserContentDetails
    {
        // [Required,Key]
        // public int ContentID { get; set;}
        // [Required]
        // public string Value{ get; set;}

        // public string MetaTags { get; set; }

        // public bool Favourites { get; set;}

        // public string Users { get; set; }
        
        // public bool IsDelete { get; set;}

        public UserContentDetails()
        {
            
        }

        [Key]
        public int ContentId { get; set; }
        public int UserId { get; set; }
        public string Content { get; set; }
        public string MetaTags { get; set; }
        public bool IsPrivate { get; set; }
        public bool IsGraphCreated { get; set; }
        public bool IsFavourites { get; set;} 
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public bool IsDelete { get; set;}
        public DateTime ModifiedOn { get; set; }
    }
}