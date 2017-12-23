using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using DocumentFormat.OpenXml.Spreadsheet;
using DocumentFormat.OpenXml;
using System.IO;
using System;
using System.Linq;

namespace readfile
{
    public class ReadDocx
    {
       public string Readdocx(string DocName)
        {
           // To read a .txt file//
           string dest=System.IO.Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop),DocName);
            string finaldoc="";
            // To read a .docx file//
           using(var doc = WordprocessingDocument.Open(dest, false))
            {    System.Console.WriteLine("Contents of DocFile=");
                foreach (var el in doc.MainDocumentPart.Document.Body.Elements().OfType<Paragraph>())
                {   
                   
                    Console.WriteLine(el.InnerText);
                    finaldoc=finaldoc+el.InnerText;
                }
            }
                File.Delete(dest);
                return  finaldoc;
                }  
    }
}
           
