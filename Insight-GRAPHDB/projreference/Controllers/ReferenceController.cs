using System; 
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Reference.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
// using TodoApi.Service;

namespace Reference.Controllers
{
    [Route("api/[controller]")]
    public class ReferenceController : Controller{

        private readonly ReferenceContext _context;

        public ReferenceController(ReferenceContext context)
        {
            _context = context;

            // if (_context.tblProductInfo.Count() == 0)
            // { 
            //     _context.tblProductInfo.Add(new TodoItem { Name = "Item1" });
            //     _context.SaveChanges();
            // }
        }

        [HttpGet]
            public async Task<List<ReferenceItem>> GetAllAsync()
            {
                try{
                return await _context.referencetable.ToListAsync();
                }catch(Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }

        [HttpGet("{prepsorconjs}")]
        public async Task<ReferenceItem> GetbyIdAsync(string id)
            {
                try{
                ReferenceItem item = await _context.referencetable.FindAsync(id);
                if (item == null)
                {
                    // return NotFound();
                }
               return item;
            }catch(Exception ex)
            {
                    throw new Exception(ex.Message);
            }
            }  

    }
}
