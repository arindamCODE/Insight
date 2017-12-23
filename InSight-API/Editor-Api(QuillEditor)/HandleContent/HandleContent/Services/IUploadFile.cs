using System;
using HandleContent;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;
using System.IO;
using Microsoft.AspNetCore.Http;// To use IformFile feature.

namespace FileUploadService
{
    public interface IFileUploadService
    {
        Task UploadFilesViaModel(List<FileInputModel> models);

       Task UploadFileViaModel(FileInputModel model);

       Task UploadFile(IFormFile file);

   }
}