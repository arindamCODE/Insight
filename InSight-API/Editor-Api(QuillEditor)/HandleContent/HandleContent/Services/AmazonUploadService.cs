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
using System.Threading;

//Namespaces used to avaid AWSSDK functions.
using Amazon;
using Amazon.Extensions.NETCore;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;



namespace AmazonUploadService
{
    public class AmazonUploadMethods:IAmazonUploadService
    {

        private static readonly string _awsAccessKey = "AKIAJNIIV7ZAWSJGYQZQ";

        private static readonly string _awsSecretKey = "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";
        
        public async Task<bool> UploadToS3(IFormFile UploadedFile)
        {
            try
            {

                IAmazonS3 client=new AmazonS3Client(_awsAccessKey,_awsSecretKey,RegionEndpoint.APSouth1);

                string uploadedfilename= UploadedFile.FileName;

                Console.WriteLine("Uploaded filename is {0}",uploadedfilename);

                string UploadFolder= "c:\\upload\\";

                string UploadPath=Path.Combine(UploadFolder,uploadedfilename);

                Console.WriteLine("The saved path of the uploaded file is {0}",UploadPath);


                if (UploadedFile.Length>0)
                {
                    using(var fs=new FileStream(UploadPath,FileMode.CreateNew))
                    {
                        await UploadedFile.CopyToAsync(fs);
                        //await fs.FlushAsync();
                    }
                }

                TransferUtility utility = new TransferUtility(client);

                // making a TransferUtilityUploadRequest instance
                TransferUtilityUploadRequest request = new TransferUtilityUploadRequest();

                request.BucketName="testinsight95";

                request.Key = uploadedfilename; //file name up in S3

                request.FilePath = UploadPath; //local file name

                await utility.UploadAsync(request); // commencing the transfer

                File.Delete(UploadPath);// Delete the file from the main folder in file system.

            }
            
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return true;

        }  //End of UploadToS3 

        public async Task<bool> DownloadFromS3(string filename)
        {

            CancellationTokenSource cts = new CancellationTokenSource();

            CancellationToken token= cts.Token;

            try
            {

                IAmazonS3 client=new AmazonS3Client(_awsAccessKey,_awsSecretKey,RegionEndpoint.APSouth1);

                using (client = new AmazonS3Client(_awsAccessKey,_awsSecretKey,RegionEndpoint.APSouth1))
                {
                    GetObjectRequest request = new GetObjectRequest
                    {
                        BucketName = "testinsightdemo",

                        Key = filename,
                    };

                    using (GetObjectResponse response = await client.GetObjectAsync(request))
                    {
                        string dest = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), filename);

                        if (!File.Exists(dest))
                        {
                            await response.WriteResponseStreamToFileAsync(dest,true,token);
                        }
                    }
                }
                
            }
            
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return true;

        }//End of DownloadFromS3

        public async Task<bool> DeleteFromS3(string filename)
        {

            try
            {

                IAmazonS3 client=new AmazonS3Client(_awsAccessKey,_awsSecretKey,RegionEndpoint.APSouth1);

                using (client = new AmazonS3Client(_awsAccessKey,_awsSecretKey,RegionEndpoint.APSouth1))
                {
                    DeleteObjectRequest request = new DeleteObjectRequest
                    {
                        BucketName = "testinsightdemo",

                        Key = filename,
                    };

                    using (client = new AmazonS3Client(_awsAccessKey,_awsSecretKey,RegionEndpoint.APSouth1))
                    {
                        await client.DeleteObjectAsync(request);
                    }
                }
                
            }
            
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return true;

        }//End of DeleteFromS3
    
    }
}  