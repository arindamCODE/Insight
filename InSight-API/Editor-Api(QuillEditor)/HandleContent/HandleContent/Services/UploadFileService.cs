using System;
using HandleContent;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.Extensions.FileProviders;
using System.Net.Http.Headers; //For using ContentDisposition class

namespace FileUploadService
{
    public class FileUploadMethods:IFileUploadService
    {
        private readonly IFileProvider fileProvider;

        public FileUploadMethods(IFileProvider fileProvider)
        {
            this.fileProvider=fileProvider;
        }

        public async Task UploadFilesViaModel(List<FileInputModel> models)
        {
            try
            {
                foreach(var model in models)
                {
                    var path = Path.Combine(
                            Directory.GetCurrentDirectory(), "wwwroot",
                            model.FileToUpload.GetFilename());

                    using (var stream = new FileStream(path, FileMode.Create))
                    {
                        await model.FileToUpload.CopyToAsync(stream);
                    }

                    var model1 = new FilesViewModel();

                    foreach (var item in this.fileProvider.GetDirectoryContents(""))
                    {
                        model1.Files.Add(
                        new FileDetails { Name = item.Name, Path = item.PhysicalPath });
                    }

                }
            }
            catch(Exception ex)
            {
            Console.WriteLine(ex.Message);
            }

        }

        public async Task UploadFileViaModel(FileInputModel model)
        {
            try
            {
                
                    /*var path = Path.Combine(
                            Directory.GetCurrentDirectory(), "wwwroot",
                            model.FileToUpload.GetFilename());*/
                    string target="c:\\Users\\Administrator\\Desktop\\Editors\\Backend\\Uploads";

                    Environment.CurrentDirectory=(target);

                    string path1 = Directory.GetCurrentDirectory();

                    if (path1.Equals( Directory.GetCurrentDirectory())) 
                    {
                        Console.WriteLine("You are in the uploads directory.");
                    } 
                    else 
                    {
                        Console.WriteLine("You are not in the uploads directory.");
                    }

                    var filename = ContentDispositionHeaderValue
                            .Parse(model.FileToUpload.ContentDisposition)
                            .FileName
                            .Trim('"');

                    if (model.FileToUpload.Length > 0)
                    using (var filestream = new FileStream(Path.Combine(Directory.GetCurrentDirectory(),"c:\\Users\\Administrator\\Desktop\\Editors\\Backend\\Uploads",model.FileToUpload.GetFilename()), FileMode.Create))
                    {
                        await model.FileToUpload.CopyToAsync(filestream);
                    }

                    var model1 = new FilesViewModel();

                    foreach (var item in this.fileProvider.GetDirectoryContents(""))
                    {
                        model1.Files.Add(
                        new FileDetails { Name = item.Name, Path = item.PhysicalPath });
                    }
                
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        //Asynchronous function used to upload files via UploadService
        public async Task UploadFile(IFormFile UploadedFile)
        {
            try
            {

                string UploadedFilename= UploadedFile.FileName;

                Console.WriteLine("Uploaded filename is {0}",UploadedFilename);

                string UploadFolder= "c:\\InsightUploads\\";

                string UploadPath=Path.Combine(UploadFolder,UploadedFilename);

                Console.WriteLine("The saved path of the uploaded file is {0}",UploadPath);


                if (UploadedFile.Length>0)
                {
                    using(var fs=new FileStream(UploadPath,FileMode.CreateNew))
                    {
                        await UploadedFile.CopyToAsync(fs);
                        
                        await fs.FlushAsync();
                    }
                }

            }

            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

    }
}