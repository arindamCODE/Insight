using System.ComponentModel.DataAnnotations;

namespace HandleContent
{
    public class FilesDetails
    {
        public int UserID {get;set;}

        [Key]
        public int FileID { get; set;}
        
        public string Filename{get;set;}
    }    

}