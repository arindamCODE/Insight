using System;
using System.Collections.Generic;
using System.Text;


namespace ContentData{

public class CreateUserViewModel
        {
            public string encodingType {get;set;}
              
            public TagViewModel document {get;set;}
         }
        public class TagViewModel
        {
            public string type {get;set;}
            public string content {get;set;}
        }
}