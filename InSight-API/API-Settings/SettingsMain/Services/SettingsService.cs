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


namespace SettingsMethodService
{
    public class SettingsServiceMethods: ISettingsService
    {
        private SettingsContext _context;

        public SettingsServiceMethods(SettingsContext context )
        {
            _context = context;
        }

        public async Task<List<Settingslist>> Get()
        {
            return await _context.UserDetails.ToListAsync();
        }

        public async Task<List<Settingslist>> GetById(int id)
        {
            Settingslist objectsettings = await _context.UserDetails.FirstOrDefaultAsync(ID =>ID.UserId == id);
            List<Settingslist> settings = new List<Settingslist>();
            settings.Add(objectsettings);
            return settings;
        }

       

    }

}
