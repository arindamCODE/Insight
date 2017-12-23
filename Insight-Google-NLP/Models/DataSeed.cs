using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ContentData;
using System.Collections.Generic;
using System.Threading;
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
using Restful.Models;
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
using System.Text.RegularExpressions;
using Amazon;
using Amazon.Extensions.NETCore;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using readfile;
using Neo4jClient;
using Neo4j.Driver.V1;
namespace Restful.Models
{
    public  class DataSeed
    {

        private static readonly string _awsAccessKey = "AKIAJNIIV7ZAWSJGYQZQ";

        private static readonly string _awsSecretKey = "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";
        public  async Task Initialize(ContentContext context)
        {
            context.Database.EnsureCreated();
                       
            if (context.UserContentDetails.Any())
            {
                Console.WriteLine("Db connected");   // DB has been seeded
            }
            if (context.UserFileDetails.Any())
            {
                Console.WriteLine("Db connected");   // DB has been seeded
            }

            foreach(var s in context.UserContentDetails){
                Console.WriteLine(s.Content);
            }
            context.SaveChanges();
            foreach(var s in context.UserContentDetails)
            {
                if(s.IsGraphCreated==false){
                var query=context.Database.ExecuteSqlCommand("UPDATE UserContentDetails SET IsGraphCreated=1 where ContentId="+s.ContentId+"");
                
                string html=RemoveHTMLTags(s.Content).ToLower();
                ProcessRepositories(html,s.ContentId).Wait();
                }
            }
            context.SaveChanges();
            foreach(var s in context.UserFileDetails)
            {
                string finaldoc;
                if(s.IsGraphCreated==false){
                    var query=context.Database.ExecuteSqlCommand("UPDATE UserFileDetails SET IsGraphCreated=1 where FileId="+s.FileId+"");
                    //context.SaveChanges();
                    await DownloadFile(s.FileName);
                    if(s.FileType=="application/pdf")
                    {
                        ReadPDF objreadpdf=new ReadPDF();
                        finaldoc=objreadpdf.Readpdf(s.FileName);
                        string html=RemoveHTMLTags(finaldoc).ToLower();
                        ProcessRepositories(html,s.ContentId).Wait();
                    }
                    if(s.FileType=="application/xlsx")
                    {
                        ReadExcel objreadexcel=new ReadExcel();
                        finaldoc=objreadexcel.Readexcel(s.FileName);
                        string html=RemoveHTMLTags(finaldoc).ToLower();
                        ProcessRepositories(html,s.ContentId).Wait();
                    }
                    if(s.FileType=="application/txt")
                    {
                        ReadText objreadtext=new ReadText();
                        finaldoc=objreadtext.Readtext(s.FileName);
                        string html=RemoveHTMLTags(finaldoc).ToLower();
                        ProcessRepositories(html,s.ContentId).Wait();
                    }
                    if(s.FileType=="application/ppt")
                    {
                        ReadPPT objreadppt=new ReadPPT();
                        finaldoc=objreadppt.Readppt(s.FileName);
                        string html=RemoveHTMLTags(finaldoc).ToLower();
                        ProcessRepositories(html,s.ContentId).Wait();
                    }
                    if(s.FileType=="application/docx")
                    {
                        ReadDocx objreaddocx=new ReadDocx();
                        finaldoc=objreaddocx.Readdocx(s.FileName);
                        string html=RemoveHTMLTags(finaldoc).ToLower();
                        ProcessRepositories(html,s.ContentId).Wait();
                    }
                context.SaveChanges();
                }
            }
            
        }
        public static string RemoveHTMLTags(string HTMLCode)
        {
        return Regex.Replace(HTMLCode, "<[^>]*>", "");
        }
        public async Task DownloadFile(string file) //file is the file name in amazon s3 bucket
        {
            // IAmazonS3 client2;

            // CancellationTokenSource cts = new CancellationTokenSource();

            // CancellationToken token= cts.Token;

            // using (client2 = new AmazonS3Client(Amazon.RegionEndpoint.USEast1))
            // {
            //     GetObjectRequest request = new GetObjectRequest
            //     {
            //         BucketName = "testinsight95",
            //         Key = file
            //     };
                
            //     using (GetObjectResponse response = await client2.GetObjectAsync(request))
            //     {
            //         string dest = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), file);
            //         if (!File.Exists(dest))
            //         {
            //              await response.WriteResponseStreamToFileAsync(dest,true,token);
            //         }
            //     }   
            // }

            CancellationTokenSource cts = new CancellationTokenSource();

            CancellationToken token= cts.Token;
            try
            {
                IAmazonS3 client=new AmazonS3Client(_awsAccessKey,_awsSecretKey,RegionEndpoint.APSouth1);

                using (client = new AmazonS3Client(_awsAccessKey,_awsSecretKey,RegionEndpoint.APSouth1))
                {
                    GetObjectRequest request = new GetObjectRequest
                    {
                        BucketName = "testinsight95",
                        Key = file,
                    };
                    using (GetObjectResponse response = await client.GetObjectAsync(request))
                    {
                        string dest = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Desktop), file);
                        if (!File.Exists(dest))
                        {
                            await response.WriteResponseStreamToFileAsync(dest,true,token);
                        }
                    }
                }
                
            }
            
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
            }

        }

        public static async Task ProcessRepositories(string jsondetails, int id)
            {
                 var client = new HttpClient();
                 DataSeed obj=new DataSeed();
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
                 //jsonToCSV(msg,id);
                 
                Console.Write(msg);
                 
                RootObject ao = JsonConvert.DeserializeObject<RootObject>(msg);
                foreach(var xyz in ao.tokens)
                {  
                  
                    if(xyz.partOfSpeech.tag=="NOUN" || xyz.partOfSpeech.tag=="VERB" || xyz.partOfSpeech.tag=="ADJ"){
                
                     Console.WriteLine(xyz.text.content);
                      getsynonyms(xyz.text.content,id);
                }
                }
                
               
            }

            public static void getsynonyms(string word,int id)
            {  
                Console.WriteLine(word);
                //List<string> synonymsfromdiction = new List<string>();
                var client1 = new HttpClient();
                client1.DefaultRequestHeaders.Accept.Clear();
                client1.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json"));
                client1.DefaultRequestHeaders.Add("app_id","98d8def0");
                client1.DefaultRequestHeaders.Add("app_key","5b8263cc08b590ecafffdfd213e39704");

               var response = client1.GetAsync("https://od-api.oxforddictionaries.com/api/v1/entries/en/"+word+"/synonyms").Result;
                
               string content = response.Content.ReadAsStringAsync().Result;
                
               
               Console.WriteLine(content);
                if(isValidJSON(content)==true){
                    Console.WriteLine("Json");
                    jsonToCSV(content,id);
                }
                   
                else{
                    Console.WriteLine("word without synonym {0}",word);
                Console.WriteLine("HTML");    
                graphdb elsewordgraph = new graphdb();
                elsewordgraph.csvtographdbfunction(id,word);
                }}
            public static bool isValidJSON(string json)
            {
                try
                {
                    JToken token = JObject.Parse(json);
                    return true;
                }
                catch(Exception ex)
                {
                    return false;
                }
            }
            public static void jsonToCSV(string jsonContent, int id)
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

               Console.WriteLine(csv);
               //File.Delete(@"C:\Users\Administrator\Documents\Neo4j\default.graphdb\import\export.csv");
               File.WriteAllText(@"C:\Users\Administrator\Documents\Neo4j\default.graphdb\import\export.csv", csv);
               graphdb objgraphdb = new graphdb();
               objgraphdb.csvtographdbfunction(id);
         

        }
    }
}