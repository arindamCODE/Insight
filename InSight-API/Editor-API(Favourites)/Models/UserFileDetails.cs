using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;


namespace ContentData{

    public class UserFileDetails{
        [Key]

        public int FileId{get;set;}
        public int ContentId{get;set;}
        public int UserId{get;set;}
        public string FilePath{get;set;}

        public string FileName{get;set;}

        public string FileType{get;set;}

        public bool  IsPrivate{get;set;}
        public bool IsGraphCreated{get;set;}
        public bool IsFavourites{get;set;}

        public bool   IsDelete{get;set;}
    }
}