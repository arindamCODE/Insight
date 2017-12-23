using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using DocumentFormat.OpenXml.Spreadsheet;
using DocumentFormat.OpenXml;

using System;
using System.Linq;
using System.IO;

namespace readfile
{
    public class ReadExcel
    {
         public string Readexcel(string DocName)
        {
        //String xlDocName = @"C:/Users/Administrator/Desktop/Book1.xlsx";
        string dest=System.IO.Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop),DocName);
        string finaldoc="";
        using (SpreadsheetDocument spreadsheetDocument = SpreadsheetDocument.Open(dest, false))
        {
            WorkbookPart workbookPart = spreadsheetDocument.WorkbookPart;
            string cellValue = string.Empty;
            foreach(WorksheetPart worksheetPart in workbookPart.WorksheetParts)
            {
                OpenXmlReader reader = OpenXmlReader.Create(worksheetPart);

                while (reader.Read())
                {
                if (reader.ElementType == typeof(Row))
                {
                    reader.ReadFirstChild();

                    do
                    {
                    if (reader.ElementType == typeof(Cell))
                    {
                        Cell c = (Cell)reader.LoadCurrentElement();

                        if (c.DataType != null && c.DataType == CellValues.SharedString)
                        {
                        SharedStringItem ssi = workbookPart.SharedStringTablePart.SharedStringTable.Elements<SharedStringItem>().ElementAt(int.Parse(c.CellValue.InnerText));
                        cellValue = ssi.Text.Text;
                        finaldoc=finaldoc+cellValue;
                        Console.WriteLine(cellValue);
                        }
                    }
                    }                      
                    while (reader.ReadNextSibling());
                }
                }
            }
            Console.ReadLine();
        }
        File.Delete(dest);
        return finaldoc;
    }
 }
}
