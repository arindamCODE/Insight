// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Builder;
// using Microsoft.AspNetCore.Hosting;
// using Microsoft.Extensions.Configuration;
// using Microsoft.Extensions.DependencyInjection;
// using Microsoft.Extensions.Logging;
// using Microsoft.Extensions.Options;
// using Microsoft.EntityFrameworkCore;
// using ContentService;
// using HandleContent;
// using Microsoft.AspNetCore.Cors;
// using Microsoft.Extensions.FileProviders;
// using System.IO;
// using FileUploadService;

//General Imports
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.FileProviders;


//User Defined Services
using FileUploadService;
using AmazonUploadService;
using FilesDetailsService;
using ContentService;
using HandleContent;

//Modules used to avail Amazon S3 functionality.
using Amazon.S3;
using Amazon.Extensions.NETCore;


namespace HandleContent
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            try
            {
            //User defined services Dependency Injection    
            services.AddTransient<IContentDetailsService,ContentMethods>();
            services.AddTransient<IFilesDetailsService,FilesMethods>();
            services.AddTransient<IFileUploadService,FileUploadMethods>();
            services.AddTransient<IAmazonUploadService,AmazonUploadMethods>();
            
            //Database Connection Services
            services.AddDbContext<UserContentDetailsContext>(options => options.UseSqlServer(Configuration.GetConnectionString("LibraryConnection")));
            services.AddDbContext<UserFileDetailsContext>(options => options.UseSqlServer(Configuration.GetConnectionString("LibraryConnection")));

            services.AddMvc();

            //To enable allow cross origin services in the backend
            services.AddCors();

            //To enable filesystem services.
            services.AddSingleton<IFileProvider>(new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "c:\\Users\\Administrator\\Desktop\\Editors\\Backend\\Uploads")));

            //To enable Amazon S3 cloud functionalities.
            services.AddDefaultAWSOptions(Configuration.GetAWSOptions());
            services.AddAWSService<IAmazonS3>();
    
            }

            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            try{
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());

            app.UseStaticFiles();

            app.UseMvc();
            }

            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        
    }
}
