using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Password.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.IO;
using System.Text;
using WebApi.Entities;



namespace  Webapi.changepasswordControllers
{
    [Route("api/[controller]")]
     public class changepasswordController : Controller
     
     {     
          private readonly updatepasswordContext _context;

          public changepasswordController(updatepasswordContext context){

              _context=context;
          }

           [HttpGet]

           public async Task<List<UpdatePassword>> GetAll(){

               return await _context.UserDetails.ToListAsync();
           }

           [HttpGet("{Email}", Name = "GetEmail")]
            public async Task <List<UpdatePassword>> GetById(string Email)
            {
                UpdatePassword  objectCityTable = await _context.UserDetails.FindAsync(Email);
                List<UpdatePassword> item = new List<UpdatePassword>();
           try
           {
                item.Add(objectCityTable);
           }
           catch(Exception ex)
           {
               throw new Exception(ex.Message);
           }
           return item;
        }

           [HttpPatch("{Email}")]
               public async Task Update(string Email, [FromBody] UpdatePassword item)
                {
                      
                     var user = _context.UserDetails.FirstOrDefault(t => t.Email == item.Email);
                     
                     user.Email = item.Email;
                     
                     string pswd1 = Encrypt(item.PasswordSalt);
                    

                     user.PasswordSalt  = pswd1;
                     user.PasswordHash =pswd1;
                     
                    
                   try{
                          _context.UserDetails.Update(user);
                          await _context.SaveChangesAsync();
                   }
                   catch(Exception ex){
                       throw new Exception(ex.Message);
                   }
              

        }
        public static string Encrypt(string clearText)
             {
                      string EncryptionKey = "abc123";
                       byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
                      using (Aes encryptor = Aes.Create())
                        {
                           Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                           encryptor.Key = pdb.GetBytes(32);
                           encryptor.IV = pdb.GetBytes(16);
                           using (MemoryStream ms = new MemoryStream())
                                 {
                                   using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                                       {
                                        cs.Write(clearBytes, 0, clearBytes.Length);
                                         cs.Close();
                                       }
                                  clearText = Convert.ToBase64String(ms.ToArray());
                                 }
                        }
                      return clearText;
                  }  

        }
           
     }

