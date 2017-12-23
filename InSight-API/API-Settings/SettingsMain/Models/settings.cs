using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Drawing;

namespace SettingsModel.Models
{
    
    public class Settingslist
    {
        [Key]
        public int UserId{get;set;}
        public string FirstName{get;set;}
        public string LastName{get;set;}

        public string Username{get;set;}
        public string email{get;set;}
        public string PasswordHash{get;set;}
        public string PasswordSalt{get;set;}        
        public string PhotoUrl{get;set;}
        public string Provider {get;set;}
        public Nullable<long> ContactNo {get;set;}  
        public Nullable<DateTime> DOB {get;set;}
        public string CreatedBy {get;set;}
        public DateTime CreatedOn  {get;set;}
        public bool IsDelete {get;set;}
        public DateTime ModifiedOn {get;set;}

          
    }

    public class UpdateList
    {
        public int UserId{get;set;}
        public string Username{get;set;}
        // public string LastName{get;set;}
        

    }
    

    public class SettingsFblist
    {
       public int Id { get; set; }
       public string Name { get; set; }
       public string email { get; set; }
       public string PhotoUrl { get; set; }
       public string FirstName { get; set; }
       public string LastName { get; set; }
       public string Provider { get; set; }
    }


    public class Photolist
    {
        [Key]
        public int UserId { get; set; }

        public string PhotoUrl {get;set;}  
     }


    public class DOBlist
    {
        [Key]
        public int UserId { get; set; }

        public Nullable<DateTime> DOB {get;set;}
     }


     public class Contactlist
     {

        public int UserId { get; set; }

        public Nullable<long> ContactNo {get;set;} 

     }
}