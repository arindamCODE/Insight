using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Http;
using System.Net.Http.Headers;
using HandleContent;
using FileUploadService;
using Microsoft.AspNetCore.Hosting;
using System.IO;
namespace FileUploadInfo.Controllers
{
    [Route("api/[controller]")]
    public class FileSystemUploadController:Controller //4.Using the infoservice defined in startup in the controller.
    {
        private IFileUploadService _service;
        public FileSystemUploadController(IFileUploadService service)
        {
            _service=service;
            
        }
        [HttpPost]
        public Task UploadFile(IFormFile UploadedFile)
        {
             return _service.UploadFile(UploadedFile);
        }
       
    }
}