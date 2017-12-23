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
        public readonly FilesDetailsContext _context;

        public FilesMethods(FilesDetailsContext context)
        {
            _context=context;
        }
        
       
        public async Task<List<FilesDetails>> GetAllFiles() //ProductDetails is the class performing one on one mapping with ProductInfoTable in database.
        {
            return await _context.PhotoTable.ToListAsync(); //ProductInfoTable is the database in SqlServer
        }

        public async Task CreateFileDetails(FilesDetails item)
        {
            Console.WriteLine("Inside Method");
            //string ContentID=_context.QuillTable.FromSql("Select ContentID from QuillTable where value like '%"+item.content+"%'").ToString().Trim();

            // int ID = Convert.ToInt32(_context.QuillTable.FromSql("Select top 1 from QuillTable order by contentid desc").ToString());

            // Console.WriteLine("Content ID is {0}",ID);

            // List<ContentDetails> objContentDetails=new List<ContentDetails>();

            // objContentDetails=query;

            // Console.WriteLine("Obtained contentID is {0}",ContentID);

            try
            {
                
                // FilesDetails FileDetailsItem=new FilesDetails();

                // FileDetailsItem.contentID=int.Parse(ContentID);

                // FileDetailsItem.filename=item.filename.Trim();

                // FileDetailsItem.filetype=item.filetype.Trim();

                _context.PhotoTable.Add(item);

                try
                {
                    await _context.SaveChangesAsync();

                    Console.WriteLine("FileID is {0}",item.FileID);
                    
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
        }  

    
    }
}