using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


namespace ContentData{

    public class UserContentDetails{
        [Key]
        public int ContentId{get;set;}
        public int UserId{get;set;}
        public string Content{get;set;}

        public string MetaTags{get;set;}

        public bool  IsPrivate{get;set;}
        public bool IsGraphCreated{get;set;}
        public bool IsFavourites {get;set;}

        public bool   IsDelete{get;set;}
    }
}