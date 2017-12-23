using System;
using HandleContent;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;

namespace FilesDetailsService
{
    public interface IFilesDetailsService
    {
        Task<List<FilesDetails>> GetAllFiles();

        Task CreateFileDetails(FilesDetails item);
       
    }
}