using System;
using System.IO;
using System.Text; //for stringbuilder.
using System.DrawingCore;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;// Module imported to parse pdf document.

namespace readfile
{
    public class ReadPDF
    {
        public string Readpdf(string DocName)
        {
            Console.WriteLine("Hello World!");

            string dest=System.IO.Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop),DocName);

            string pdfdata = ExtractTextFromPdf(dest);
            
            Console.WriteLine(pdfdata);   
            File.Delete(dest);
            return pdfdata;

        }

        public static string ExtractTextFromPdf(string path)
        {
            using (PdfReader reader = new PdfReader(path))
            {
                string text="";

                for (int i = 1; i <= reader.NumberOfPages; i++)
                {
                    text=text+PdfTextExtractor.GetTextFromPage(reader, i);
                }

                return text;
            }
        }
    }
}
