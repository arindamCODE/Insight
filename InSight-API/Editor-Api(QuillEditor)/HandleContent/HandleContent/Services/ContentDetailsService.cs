using System;
using HandleContent;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ContentService
{
    public class ContentMethods:IContentDetailsService //2.Defining method of the connected interface.

    {
        public ContentMethods()
        {
            
        }
        // public readonly UserContentDetailsContext _context;

        // public ContentMethods(UserContentDetailsContext context)
        // {
        //     _context=context;
        // }
        
       
        // public async Task<List<UserContentDetails>> GetAll() //ProductDetails is the class performing one on one mapping with ProductInfoTable in database.
        // {
        //     return await _context.UserContentDetails.ToListAsync(); //ProductInfoTable is the database in SqlServer
        // }

        // public async Task<List<UserContentDetails>> GetUsingId(int id)
        // {
        //     UserContentDetails objContentInfo= await _context.UserContentDetails.FindAsync(id);

        //     List<UserContentDetails> ContentInfo= new List<UserContentDetails>();

        //     try
        //     {
        //         ContentInfo.Add(objContentInfo);
        //     }
        //     catch(Exception ex)
        //     {
        //         throw new Exception( ex.Message);
        //     }
        //     return ContentInfo;
        // }

       

    
        // public async Task Create(UserContentDetails item)
        // {
        //     try
        //     {
        //         _context.UserContentDetails.Add(item);

        //         try
        //         {
        //             await _context.SaveChangesAsync();
        //         }
        //         catch(Exception ex)
        //         {
        //             Console.WriteLine(ex.Message);
        //         }

        //     }
        //     catch(Exception ex)
        //     {
        //         throw new Exception(ex.Message);
        //     }
        // }  

        // public async Task Update(int id, UserContentDetails item)
        // {
        //     try
        //     {
        //         var result = _context.QuillTable.FirstOrDefault(t => t.ContentId == id);
        //         result.Value = item.Value;
        //         result.MetaTags = item.MetaTags;
        //         result.Favourites = item.Favourites;
        //         result.Users = item.Users;
        //         result.IsDelete = item.IsDelete;
        //         _context.UserContentDetails.Update(result);
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (Exception ex)
        //     {
        //         Console.WriteLine(ex.Message);
        //     }
        // }

        // public async Task Delete(int id)
        // {
        //     try
        //     {
        //         var result = _context.UserContentDetails.FirstOrDefault(t => t.ContentId == id);
        //         _context.UserContentDetails.Remove(result);
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (Exception ex)
        //     {
        //         throw new Exception(ex.Message);
        //     }
        // }

        private UserContentDetailsContext _context;

        public ContentMethods(UserContentDetailsContext context)
        {
            _context = context;
        }

        public async Task<List<UserContentDetails>> Get()
        {
            return await _context.UserContentDetails.ToListAsync();
        }

        public async Task<List<UserContentDetails>> GetByID(int id)
        {
            UserContentDetails objectScore = await _context.UserContentDetails.FirstOrDefaultAsync(pi => pi.ContentId == id);
            
            List<UserContentDetails> product = new List<UserContentDetails>();

            try
            {
                product.Add(objectScore);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return product;
        }

        public async Task Post(UserContentDetails item)
        {
            try
            {
                item.CreatedOn = System.DateTime.Now;
                item.ModifiedOn = System.DateTime.Now;
                
                _context.UserContentDetails.Add(item);
                
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public async Task<int> Update(int id, UserContentDetails item)
        {
            try
            {
                var result = _context.UserContentDetails.FirstOrDefault(t => t.ContentId == id);

                result.Content = item.Content;
                result.MetaTags = item.MetaTags;
                result.IsPrivate = item.IsPrivate;
                result.IsGraphCreated = item.IsGraphCreated;
                result.IsFavourites = item.IsFavourites;
                result.IsDelete = item.IsDelete;
        
                _context.UserContentDetails.Update(result);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return 0;
        }

        public async Task<int> Delete(int id)
        {
            try
            {
                var result = _context.UserContentDetails.FirstOrDefault(t => t.ContentId == id);
                _context.UserContentDetails.Remove(result);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

            return 0;
        }

        public async Task<int> Create(UserContentDetails item)
        {
            
            try
            {
                item.CreatedOn=System.DateTime.Now;

                item.ModifiedOn=System.DateTime.Now;

                _context.UserContentDetails.Add(item);

                try
                {
                    await _context.SaveChangesAsync();

                    Console.WriteLine("Obtained ID is {0}",item.ContentId);

                    Console.WriteLine("Obtained content is {0}",item.Content);

                    Console.WriteLine("Obtained tag is {0}",item.MetaTags);

                }

                catch(Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }

                return item.ContentId;

            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


    }
}