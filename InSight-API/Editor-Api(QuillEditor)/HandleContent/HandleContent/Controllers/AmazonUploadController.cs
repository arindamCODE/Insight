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
        }

        // [HttpPost] //Post method
        // public async Task UploadFileToS3([FromBody] IFormFile filepayload)
        // {
        //     try
        //     {

        //         string _awsAccessKey = "AKIAJNIIV7ZAWSJGYQZQ";
        // 	    string _awsSecretKey = "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";

        //         Console.WriteLine("I am inside the function");

        //         IAmazonS3 client = new AmazonS3Client( _awsAccessKey, _awsSecretKey);

        //         string filename=filepayload.FileName;

        //         try
        //         {
                    
        //             PutObjectRequest putRequest = new PutObjectRequest
        //             {
        //                 BucketName = "testinsight95",
        //                 //CannedACL = S3CannedACL.PublicRead,
        //                 FilePath = Path.GetFullPath(filename),
        //             };
                
        //             PutObjectResponse response = await client.PutObjectAsync(putRequest);
        //         }
        //         catch (AmazonS3Exception amazonS3Exception)
        //         {
        //             if (amazonS3Exception.ErrorCode != null &&
        //                 (amazonS3Exception.ErrorCode.Equals("InvalidAccessKeyId")
        //                 ||
        //                 amazonS3Exception.ErrorCode.Equals("InvalidSecurity")))
        //             {
        //                 throw new Exception("Check the provided AWS Credentials.");
        //             }
        //             else
        //             {
        //                 throw new Exception("Error occurred: " + amazonS3Exception.Message);
        //             }
        //         }
        //     } 
            

        //     catch(Exception ex)
        //     {
        //         Console.WriteLine(ex.Message);
        //     }
        
        // }//End of UploadFileToS3
             //return _service.UploadFileToS3(file);

        [HttpPost("UploadFiles")]
        public Task<bool> UploadToS3(IFormFile UploadedFile)
        {
            return _service.UploadToS3(UploadedFile);
        }

        [HttpGet("{filename}")] //Get function initialised by passing a string filename as an argument from frontend via angular4.
        public Task<bool> DownloadFromS3(string filename)
        {
            return _service.DownloadFromS3(filename);
        }
        
        [HttpDelete("{filename}")] //Delete function initialised by passing string filename as an argument from frontend via angular4.
        public Task<bool> DeleteFromS3(string filename)
        {
            return _service.DeleteFromS3(filename);
        }
    }
}