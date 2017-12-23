using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using DocumentFormat.OpenXml.Spreadsheet;
using DocumentFormat.OpenXml;
using System.IO;
using System;
using System.Linq;

namespace readfile
{
    public class ReadText
    {
       public  string Readtext(string DocName)
        {
           // To read a .txt file//
           string dest=System.IO.Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop),DocName);
           string text = System.IO.File.ReadAllText(dest);
            System.Console.WriteLine("Contentsof textfile = {0}", text);
            File.Delete(dest);
            return text;
           
        }  
    }
}
           
