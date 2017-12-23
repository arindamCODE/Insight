using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using  Favouritesmodel;
using favouritesModel.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System.Threading.Tasks;
using Editor_API_Favourites_;
using System;
using searchresult;
using ContentData;

namespace FavouritesController.Controllers
{
    [Route("api/[controller]")]
    public class FavouritesController : Controller
    {
        private readonly FavouritesContext _context;

       public FavouritesController(FavouritesContext context)
        {
            _context = context;

        }

            
           /* [HttpGet("{id}")]
            public async Task<List<Favouriteslist>> GetById(int id)
            {
                    Favouriteslist objectfavourites = await _context.QuillTable.FirstOrDefaultAsync(ID => ID.ID == id);
                    List<Favouriteslist> settings = new List<Favouriteslist>();
                    settings.Add(objectfavourites);
                    return settings;
             } */

            // [HttpGet("{name}")]
            //  public List<Favouriteslist> GetByName(string name)
            //  {
            //         var query=_context.QuillTable.FromSql("select * from  QuillTable where  favourites='true' and isDelete='false'").ToList();
            //         List<Favouriteslist> objfavlist=new List<Favouriteslist>();

            // //         objfavlist=query;
            // //         return objfavlist;
            // //  }

    
            
            // [HttpPost]
            // public async Task CreateAsync([FromBody] Favouriteslist item)
            // {
            //     _context.QuillTable.Add(item);
            //     await _context.SaveChangesAsync();
            // }
            
            [HttpPost]
            public  List<List<UserContentFileDetails>> GetAll([FromBody] SearchResult searchId)
            {  
             int i;     
              int[] asIntegers = searchId.JsonString.Select(s => int.Parse(s)).ToArray(); 
              for(i=0;i<asIntegers.Length-1;i++){
                Console.WriteLine(asIntegers[i]);}
              List<List<UserContentFileDetails>> objfavlist=new List<List<UserContentFileDetails>>();
              for( i=0;i<asIntegers.Length;i++){
                  if(asIntegers[i]>0){   
               var query=_context.UserContentDetails.FromSql("select B.FileId,B.ContentId,A.Content,B.FileName,B.FilePath from UserContentDetails A full join UserFileDetails B on A.ContentId=B.ContentId where A.ContentId="+asIntegers[i]+"and A.IsDelete=0 and A.IsPrivate=0 and B.IsDelete=0 and B.IsPrivate=0").ToList();
                objfavlist.Add(query);
                  }
            }
            return objfavlist;
            }    

            // [HttpPut("{id}")]
            // public async Task Update(int id, [FromBody] Favouriteslist item)
            // {
            //     try
            //     {
            //         var result = _context.QuillTable.FirstOrDefault(t => t.ID == id);

            //         result.Value = item.Value;
            //         result.MetaTags = item.MetaTags;
            //         result.Favourites = item.Favourites;
            //         result.Users = item.Users;
            //         result.IsDelete = item.IsDelete;

            //         _context.QuillTable.Update(result);
                    
            //         await _context.SaveChangesAsync();
            //     }
            //     catch (Exception ex)
            //     {
            //         Console.WriteLine(ex.Message);
            //     }
            // }
   }
}