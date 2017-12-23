using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


namespace ContentData{

    public class UserContentFileDetails{
        [Key]        
        public int FileId{get;set;} 
        public int ContentId{get;set;}

        public string Content{get;set;}
              
        public string FileName{get;set;}
        public string FilePath{get;set;}

    }
}