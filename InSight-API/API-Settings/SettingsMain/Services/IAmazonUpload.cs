using System;
using HandleContent;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http;// To use IformFile feature.
using Amazon.Extensions.NETCore;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon;
namespace AmazonUploadService
{
   public interface IAmazonUploadService
    {
       Task UploadToS3(IFormFile file);
       Task DownloadFromS3(string filename);
       Task DeleteFromS3(string filename);
    }
}