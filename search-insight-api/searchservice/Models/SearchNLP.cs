using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ContentData;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.Text;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using System.Xml;
using System.Data;
using System.Collections;
using System.Data.SqlClient;
using System.IO;
using CsvHelper;
using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json.Linq;
using searchbykeyword;

namespace searchnlp{
    public class CallNLP{

        public static async Task<string[]> ProcessRepositories(string jsondetails)
            {
                 var client = new HttpClient();
                 CreateUserViewModel obj1=new CreateUserViewModel();
                 obj1.encodingType="UTF8";
                 TagViewModel obj2=new TagViewModel();
                 obj2.type="PLAIN_TEXT";
                 obj2.content= jsondetails;
                 obj1.document=obj2;
                 
                 client.DefaultRequestHeaders.Accept.Clear();
                 client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
                
                object query="";
                var stringTask = await client.PostAsync("https://language.googleapis.com/v1/documents:analyzeSyntax?key=AIzaSyCLtrTyOeWbLLF6DqQVkP3VHa2y7yoToJE",new StringContent(JsonConvert.SerializeObject(obj1),Encoding.UTF8,"application/json"));
                  var msg =   stringTask.Content.ReadAsStringAsync().Result;
                  string[] json=jsonToCSV(msg);
                //Console.Write(msg);
                return json;
                
               
            }

            public static string[] jsonToCSV(string jsonContent)
           {
              var obj = JObject.Parse(jsonContent);
                     
       // Collect column titles: all property names whose values are of type JValue, distinct, in order of encountering them.
       var values = obj.DescendantsAndSelf()
           .OfType<JProperty>()
           .Where(p => p.Value is JValue)
           .GroupBy(p => p.Name)
           .ToList();

       var columns = values.Select(g => g.Key).ToArray();

       // Filter JObjects that have child objects that have values.
       var parentsWithChildren = values.SelectMany(g => g).SelectMany(v => v.AncestorsAndSelf().OfType<JObject>().Skip(1)).ToHashSet();

       // Collect all data rows: for every object, go through the column titles and get the value of that property in the closest ancestor or self that has a value of that name.
       var rows = obj
           .DescendantsAndSelf()
           .OfType<JObject>()
           .Where(o => o.PropertyValues().OfType<JValue>().Any())
           .Where(o => o == obj || !parentsWithChildren.Contains(o)) // Show a row for the root object + objects that have no children.
           .Select(o => columns.Select(c => o.AncestorsAndSelf()
               .OfType<JObject>()
               .Select(parent => parent[c])
               .Where(v => v is JValue)
               .Select(v => (string)v)
               .FirstOrDefault())
               .Reverse() // Trim trailing nulls
               .SkipWhile(s => s == null)
               .Reverse());

               // Convert to CSV
                 var csvRows = new[] { columns }.Concat(rows).Select(r => string.Join(",", r));
                 var csv = string.Join("\n", csvRows);

               //Console.WriteLine(csv);
               File.WriteAllText(@"C:\Users\Administrator\Documents\Neo4j\default.graphdb\import\search.csv", csv);
               
                string[] array1=SearchCSV.SearchFromCSV();
                return array1;

        }
    }
}
