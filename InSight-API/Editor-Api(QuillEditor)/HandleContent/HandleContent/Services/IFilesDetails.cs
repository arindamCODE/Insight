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
        Task<List<UserFileDetails>> GetAllFiles();

        Task<bool> CreateFileDetails(UserFileDetails item);

        Task <List<UserFileDetails>> GetFileNameByContentId(int contentId,int userid);

        Task<bool> DeleteFile(int fileid,int contentid,UserFileDetails item);

        Task<bool> UpdateDetails(int fileId, UserFileDetails item);

    }
}