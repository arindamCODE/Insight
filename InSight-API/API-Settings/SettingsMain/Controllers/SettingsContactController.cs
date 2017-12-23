using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Settingsmodel;
using SettingsModel.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Editor_API_Settings_;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.Extensions.FileProviders;
using System.Net.Http.Headers;

namespace SettingsContactController.Controllers
{
    [Route("api/[controller]")]
    public class SettingsContactController : Controller
    {
        private readonly SettingsContext _context;

       public SettingsContactController(SettingsContext context)
        {
            _context = context;

        }

            [HttpGet]
            public async Task<List<Settingslist>> GetAll()
            {
                return await _context.UserDetails.ToListAsync();
            }
            
            [HttpGet("{id}")]
            public async Task<List<Settingslist>> GetById(int id)
            {
                    Settingslist objectsettings = await _context.UserDetails.FirstOrDefaultAsync(ID => ID.UserId == id);
                    List<Settingslist> settings = new List<Settingslist>();
                    settings.Add(objectsettings);
                    return settings;
             }

            [HttpPost]
            
            public async Task CreateAsync([FromBody] Settingslist item)
            {
                _context.UserDetails.Add(item);
                await _context.SaveChangesAsync();
            }    

             [HttpPatch("{id}")]
                public IActionResult ConatctUpdate(int id, [FromBody] Contactlist item)
                {
                    if (item == null || item.UserId != id)
                    {
                        return BadRequest();
                    }

                    var user = _context.UserDetails.FirstOrDefault(t => t.UserId == id);
                    if (user == null)
                    {
                        return NotFound();
                    }

                    user.UserId=item.UserId;
                    user.ContactNo=item.ContactNo;
                   
                    
                    


                    _context.UserDetails.Update(user);
                    _context.SaveChanges();
                    return new NoContentResult();
                }
 
    }}