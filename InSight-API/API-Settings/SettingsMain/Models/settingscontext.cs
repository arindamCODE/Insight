using System;
using Microsoft.EntityFrameworkCore;
using SettingsModel.Models;
using System.ComponentModel.DataAnnotations;

namespace Settingsmodel{

    public class SettingsContext:DbContext{

        public SettingsContext(DbContextOptions<SettingsContext> options): base(options){}



        public DbSet<SettingsFblist> fb_login{get;set;}

        
        public DbSet<Settingslist> UserDetails {get;set;}

        // public DbSet<SettingsPhotolist> UserDetails {get;set;}

       

    }
}