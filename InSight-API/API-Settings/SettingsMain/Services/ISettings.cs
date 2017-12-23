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


namespace SettingsService
{
    public interface ISettingsService
    {
        Task<List<Settingslist>> Get();

        Task <List<Settingslist>> GetById(int id);
       
    }
}