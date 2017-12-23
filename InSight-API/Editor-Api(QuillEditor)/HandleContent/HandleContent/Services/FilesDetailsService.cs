using System;
using HandleContent;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Web;
using System.IO;
using Microsoft.Extensions.FileProviders;

namespace FilesDetailsService
{
    public class FilesMethods:IFilesDetailsService //2.Defining method of the connected interface.

    {
        public readonly UserFileDetailsContext _context;

        public FilesMethods(UserFileDetailsContext context)
        {
            _context=context;
        }
        
       
        public async Task<List<UserFileDetails>> GetAllFiles() //ProductDetails is the class performing one on one mapping with ProductInfoTable in database.
        {
            return await _context.UserFileDetails.ToListAsync(); //ProductInfoTable is the database in SqlServer
        }

        public async Task<bool> CreateFileDetails(UserFileDetails item)
        {
            Console.WriteLine("Inside Create Files methods");

            try
            {
                item.CreatedOn=System.DateTime.Now;

                item.ModifiedOn=System.DateTime.Now; //In order to add created on and modified on to the UserFileDetails database as the current date and time.
                
                _context.UserFileDetails.Add(item);

                try
                {
                    await _context.SaveChangesAsync();

                    Console.WriteLine("FileID is {0}",item.FileId);
                    
                }
                catch(Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }

            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return true;
        } 

        public async Task<List<UserFileDetails>> GetFileNameByContentId(int contentId,int userId)
        {
            // int contentid2=int.Parse(contentId);

            // int userid2=int.Parse(userid);

            var query= await _context.UserFileDetails.FromSql("Select * from UserFileDetails where ContentId="+contentId+" and UserId="+userId+"").ToListAsync();

            List<UserFileDetails> objFilesDetails=new List<UserFileDetails>();

            objFilesDetails=query;

            return objFilesDetails;
        } 

        //private int contentIdToBeDeleted;

        public async Task<bool> DeleteFile(int fileId,int contentId, UserFileDetails item)
        {
            try
            {
                var result = _context.UserFileDetails.FirstOrDefault(t => t.FileId == fileId);

                // this.contentIdToBeDeleted=contentId;

                // result.FileId=item.FileId;
                // result.ContentId=this.contentIdToBeDeleted;
                // result.UserId=item.UserId;
                // result.FilePath=item.FilePath;
                // result.FileType=item.FileType;
                // result.FileName=item.FileName;
                // result.IsPrivate=item.IsPrivate;
                // result.IsGraphCreated=item.IsGraphCreated;
                // result.IsFavourites=item.IsFavourites;
                result.IsDelete=true; //Soft delete of the file happens here.
                // result.CreatedOn=System.DateTime.Now;
                // result.CreatedBy=item.CreatedBy;
                // result.ModifiedOn=System.DateTime.Now;
                
                _context.UserFileDetails.Update(result);

                await _context.SaveChangesAsync();
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return true;
        }

        public async Task<bool> UpdateDetails(int fileId, UserFileDetails item)
        {
            try
            {
                var resultupdate = _context.UserFileDetails.FirstOrDefault(t => t.FileId == fileId);

                resultupdate.FileId = item.FileId;
                resultupdate.ContentId = item.ContentId;
                resultupdate.UserId = item.UserId;
                resultupdate.FilePath=item.FilePath;
                Console.WriteLine("filepath is {0}",resultupdate.FilePath);
                resultupdate.FileName=item.FileName;
                resultupdate.FileType=item.FileType;
                resultupdate.CreatedBy=item.CreatedBy;
                resultupdate.IsPrivate=item.IsPrivate;
                resultupdate.IsFavourites = item.IsFavourites;
                resultupdate.IsDelete = item.IsDelete;
                resultupdate.IsGraphCreated = false; //Since it is a new file, new graph database needs to be created for the uploaded file.
                resultupdate.CreatedOn=item.CreatedOn;
                resultupdate.ModifiedOn=System.DateTime.Now;
        
                _context.UserFileDetails.Update(resultupdate);
                
                await _context.SaveChangesAsync();
            }

            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

            return true;
        }

    }
}