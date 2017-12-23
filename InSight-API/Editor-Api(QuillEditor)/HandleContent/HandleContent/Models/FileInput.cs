using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace HandleContent
{
    public class FileInputModel
    {
        [Required]
        [FileExtensions(Extensions = "jpg,jpeg,doc,pdf,png")]
        public IFormFile FileToUpload { get; set; }
    }
}