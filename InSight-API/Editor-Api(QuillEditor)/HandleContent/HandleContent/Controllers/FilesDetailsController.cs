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
using HandleContent; //To obtain FilesDetailsContext and ReceiveFiles class
using FilesDetailsService;// To obtain IFilesDetailsService

namespace FilesDetailsInfo.Controllers
{
    [Route("api/[controller]")]
    public class FilesDetailsController:Controller //4.Using the infoservice defined in startup in the controller.
    {
        //private readonly FilesDetailsContext _context;

        private IFilesDetailsService _service;

        public FilesDetailsController(IFilesDetailsService service)
        {
           // _context=context;
            _service=service;
            
        }

        [HttpGet]
        public Task<List<UserFileDetails>> GetAllFiles()
        {
            return _service.GetAllFiles();
        }

        [HttpPost] 
        public Task<bool> CreateFileDetails([FromBody] UserFileDetails item)
        {
            return _service.CreateFileDetails(item);
        }
        
        [HttpGet("{contentid}/{userid}")] //HttpGet using multiple parameters.
        public Task<List<UserFileDetails>> GetFileNameByContentId(int contentId, int userid)
        {
            return _service.GetFileNameByContentId(contentId,userid);
        }

        [HttpPut("{fileId}/{contentId}")] //Delete File corresponding to fileId by updating (IsDelete=true).
        public Task<bool> DeleteFile(int fileId,int contentId,[FromBody] UserFileDetails item)
        {
            return _service.DeleteFile(fileId,contentId,item);
        }

        [HttpPut("{fileId}")] //Update edited file.
        public Task<bool> UpdateDetails(int fileId,[FromBody] UserFileDetails item)
        {
            return _service.UpdateDetails(fileId,item);
        }

    }
}