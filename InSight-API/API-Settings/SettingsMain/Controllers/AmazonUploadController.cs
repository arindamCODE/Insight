using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using System.Net.Http;
using System.Configuration;
using System.Web;
using System.IO;
using Microsoft.AspNetCore.Http;
using System.Net.Http.Headers;
using System.IO;

//Namespaces used to avaid AWSSDK functions.
using Amazon;
using Amazon.Extensions.NETCore;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;


//User Defined Service
using AmazonUploadService;

namespace AmazonUploadController.Controllers
{
    [Route("api/[controller]")]
    public class AmazonS3UploadController : Controller
    {
        
        private IAmazonUploadService _service;

        public AmazonS3UploadController(IAmazonUploadService service)
        {
            _service=service;
            Console.WriteLine("reached controller");
        }

        
        [HttpGet("{filename}")] //Get function initialised by passing a string filename as an argument from frontend via angular4.
        public Task DownloadFromS3(string filename)
        {
            Console.WriteLine("Reached get by name");
            return _service.DownloadFromS3(filename);
        }
        
       


        [HttpPost]
        public Task UploadToS3(IFormFile UploadedFile)
        {
            Console.WriteLine("post in  amazon  upload controller");
            return _service.UploadToS3(UploadedFile);
        }
        
        [HttpDelete("{filename}")] //Delete function initialised by passing string filename as an argument from frontend via angular4.
        public Task DeleteFromS3(string filename)
        {
            return _service.DeleteFromS3(filename);
        }

    }
}