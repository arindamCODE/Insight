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
using SettingsService;
using SettingsMethodService;

namespace SettingController.Controllers
{
    [Route("api/[controller]")]
    public class SettingsController : Controller
    {
        private readonly SettingsContext _context;
        private readonly ISettingsService _service;

       public SettingsController(SettingsContext context, ISettingsService service )
        {
            _context = context;
            _service = service;

        }

        [HttpGet]
        public Task<List<Settingslist>> Get()
        {
            return  _service.Get();
        }


        
        [HttpGet("{id}")]
        public  Task<List<Settingslist>> GetById(int id)
        {
           return _service.GetById(id);
        }

        [HttpPost]
            
        public async Task CreateAsync([FromBody] Settingslist item)
        {
            _context.UserDetails.Add(item);
            await _context.SaveChangesAsync();
        }    

        
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Settingslist item)
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

            user.FirstName = item.FirstName;
            user.LastName = item.LastName;
            user.PasswordHash=item.PasswordHash;
            user.PasswordSalt=item.PasswordSalt;
            user.PhotoUrl=item.PhotoUrl;
            


            _context.UserDetails.Update(user);
            _context.SaveChanges();
            return new NoContentResult();
        }

        

            [HttpPatch("{id}")]
            public IActionResult SemiUpdate(int id, [FromBody] UpdateList item)
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
                user.Username = item.Username;
                // user.LastName = item.LastName;
                
                


                _context.UserDetails.Update(user);
                _context.SaveChanges();
                return new NoContentResult();
            }
        }
}