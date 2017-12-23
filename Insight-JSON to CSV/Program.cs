using System;
using Newtonsoft.Json;
using System.Text;
using System.Collections.Generic;
using System.Xml;
using System.Data;
using System.Collections;
using System.Data.SqlClient;
using System.Linq;
using System.IO;
using CsvHelper;
using System.Runtime.Serialization;
using Newtonsoft.Json.Linq;






namespace jsontocsv
{
<<<<<<< HEAD
    class Program
    {     
       
        static void Main(string[] args)
        {

            
            var json =@"{
  ""sentences"": [
      {
          ""text"": {
              ""content"": ""My name is Sneha"",
              ""beginOffset"": 0
          }
      }
  ],
  ""tokens"": [
      {
          ""text"": {
              ""content"": ""My"",
              ""beginOffset"": 0
          },
          ""partOfSpeech"": {
              ""tag"": ""PRON"",
              ""aspect"": ""ASPECT_UNKNOWN"",
              ""case"": ""GENITIVE"",
              ""form"": ""FORM_UNKNOWN"",
              ""gender"": ""GENDER_UNKNOWN"",
              ""mood"": ""MOOD_UNKNOWN"",
              ""number"": ""SINGULAR"",
              ""person"": ""FIRST"",
              ""proper"": ""PROPER_UNKNOWN"",
              ""reciprocity"": ""RECIPROCITY_UNKNOWN"",
              ""tense"": ""TENSE_UNKNOWN"",
              ""voice"": ""VOICE_UNKNOWN""
          },
          ""dependencyEdge"": {
              ""headTokenIndex"": 1,
              ""label"": ""POSS""
          },
          ""lemma"": ""My""
      },
      {
          ""text"": {
              ""content"": ""name"",
              ""beginOffset"": 3
          },
          ""partOfSpeech"": {
              ""tag"": ""NOUN"",
              ""aspect"": ""ASPECT_UNKNOWN"",
              ""case"": ""CASE_UNKNOWN"",
              ""form"": ""FORM_UNKNOWN"",
              ""gender"": ""GENDER_UNKNOWN"",
              ""mood"": ""MOOD_UNKNOWN"",
              ""number"": ""SINGULAR"",
              ""person"": ""PERSON_UNKNOWN"",
              ""proper"": ""PROPER_UNKNOWN"",
              ""reciprocity"": ""RECIPROCITY_UNKNOWN"",
              ""tense"": ""TENSE_UNKNOWN"",
              ""voice"": ""VOICE_UNKNOWN""
          },
          ""dependencyEdge"": {
              ""headTokenIndex"": 2,
              ""label"": ""NSUBJ""
          },
          ""lemma"": ""name""
      },
      {
          ""text"": {
              ""content"": ""is"",
              ""beginOffset"": 8
          },
          ""partOfSpeech"": {
              ""tag"": ""VERB"",
              ""aspect"": ""ASPECT_UNKNOWN"",
              ""case"": ""CASE_UNKNOWN"",
              ""form"": ""FORM_UNKNOWN"",
              ""gender"": ""GENDER_UNKNOWN"",
              ""mood"": ""INDICATIVE"",
              ""number"": ""SINGULAR"",
              ""person"": ""THIRD"",
              ""proper"": ""PROPER_UNKNOWN"",
              ""reciprocity"": ""RECIPROCITY_UNKNOWN"",
              ""tense"": ""PRESENT"",
              ""voice"": ""VOICE_UNKNOWN""
          },
          ""dependencyEdge"": {
              ""headTokenIndex"": 2,
              ""label"": ""ROOT""
          },
          ""lemma"": ""be""
      },
      {
          ""text"": {
              ""content"": ""Sneha"",
              ""beginOffset"": 11
          },
          ""partOfSpeech"": {
              ""tag"": ""NOUN"",
              ""aspect"": ""ASPECT_UNKNOWN"",
              ""case"": ""CASE_UNKNOWN"",
              ""form"": ""FORM_UNKNOWN"",
              ""gender"": ""GENDER_UNKNOWN"",
              ""mood"": ""MOOD_UNKNOWN"",
              ""number"": ""SINGULAR"",
              ""person"": ""PERSON_UNKNOWN"",
              ""proper"": ""PROPER"",
              ""reciprocity"": ""RECIPROCITY_UNKNOWN"",
              ""tense"": ""TENSE_UNKNOWN"",
              ""voice"": ""VOICE_UNKNOWN""
          },
          ""dependencyEdge"": {
              ""headTokenIndex"": 2,
              ""label"": ""ATTR""
          },
          ""lemma"": ""Sneha""
      }
  ],
  ""language"": ""en""
}";
           jsonToCSV(json);
         }
      public static void jsonToCSV(string jsonContent)
           {
    //        //used NewtonSoft json nuget package
           XmlNode xml = JsonConvert.DeserializeXmlNode("{table:{table:" + jsonContent + "}}");
           Console.Write(xml.OuterXml);
           XmlDocument xmldoc = new XmlDocument();
           xmldoc.LoadXml(xml.InnerXml);
           XmlReader xmlReader = new XmlNodeReader(xml);
           DataSet dataSet = new DataSet();
           dataSet.ReadXml(xmlReader);
           var dataTable = dataSet.Tables[1];
 
           //Datatable to CSV
           var lines = new List<string>();
           string[] columnNames = dataTable.Columns.Cast<DataColumn>().
                                             Select(column => column.ColumnName).
                                             ToArray();
           var header = string.Join(",", columnNames);
           lines.Add(header);
           var valueLines = dataTable.Select()
                              .Select(row => string.Join(",", row.ItemArray));
           lines.AddRange(valueLines);
           //File.WriteAllLines(@"D:/Export.csv", lines);
            foreach(var record in lines){
                Console.WriteLine(record);
            }
       }
    }}
=======
   class Program
   {
       static void Main(string[] args)
       {
          
           
       
   
                           var json =@"{
   ""sentences"": [
       {
           ""text"": {
               ""content"": ""My name is Sneha"",
               ""beginOffset"": 0
           }
       }
   ],
   ""tokens"": [
       {
           ""text"": {
               ""content"": ""My"",
               ""beginOffset"": 0
           },
           ""partOfSpeech"": {
               ""tag"": ""PRON"",
               ""aspect"": ""ASPECT_UNKNOWN"",
               ""case"": ""GENITIVE"",
               ""form"": ""FORM_UNKNOWN"",
               ""gender"": ""GENDER_UNKNOWN"",
               ""mood"": ""MOOD_UNKNOWN"",
               ""number"": ""SINGULAR"",
               ""person"": ""FIRST"",
               ""proper"": ""PROPER_UNKNOWN"",
               ""reciprocity"": ""RECIPROCITY_UNKNOWN"",
               ""tense"": ""TENSE_UNKNOWN"",
               ""voice"": ""VOICE_UNKNOWN""
           },
           ""dependencyEdge"": {
               ""headTokenIndex"": 1,
               ""label"": ""POSS""
           },
           ""lemma"": ""My""
       },
       {
           ""text"": {
               ""content"": ""name"",
               ""beginOffset"": 3
           },
           ""partOfSpeech"": {
               ""tag"": ""NOUN"",
               ""aspect"": ""ASPECT_UNKNOWN"",
               ""case"": ""CASE_UNKNOWN"",
               ""form"": ""FORM_UNKNOWN"",
               ""gender"": ""GENDER_UNKNOWN"",
               ""mood"": ""MOOD_UNKNOWN"",
               ""number"": ""SINGULAR"",
               ""person"": ""PERSON_UNKNOWN"",
               ""proper"": ""PROPER_UNKNOWN"",
               ""reciprocity"": ""RECIPROCITY_UNKNOWN"",
               ""tense"": ""TENSE_UNKNOWN"",
               ""voice"": ""VOICE_UNKNOWN""
           },
           ""dependencyEdge"": {
               ""headTokenIndex"": 2,
               ""label"": ""NSUBJ""
           },
           ""lemma"": ""name""
       },
       {
           ""text"": {
               ""content"": ""is"",
               ""beginOffset"": 8
           },
           ""partOfSpeech"": {
               ""tag"": ""VERB"",
               ""aspect"": ""ASPECT_UNKNOWN"",
               ""case"": ""CASE_UNKNOWN"",
               ""form"": ""FORM_UNKNOWN"",
               ""gender"": ""GENDER_UNKNOWN"",
               ""mood"": ""INDICATIVE"",
               ""number"": ""SINGULAR"",
               ""person"": ""THIRD"",
               ""proper"": ""PROPER_UNKNOWN"",
               ""reciprocity"": ""RECIPROCITY_UNKNOWN"",
               ""tense"": ""PRESENT"",
               ""voice"": ""VOICE_UNKNOWN""
           },
           ""dependencyEdge"": {
               ""headTokenIndex"": 2,
               ""label"": ""ROOT""
           },
           ""lemma"": ""be""
       },
       {
           ""text"": {
               ""content"": ""Sneha"",
               ""beginOffset"": 11
           },
           ""partOfSpeech"": {
               ""tag"": ""NOUN"",
               ""aspect"": ""ASPECT_UNKNOWN"",
               ""case"": ""CASE_UNKNOWN"",
               ""form"": ""FORM_UNKNOWN"",
               ""gender"": ""GENDER_UNKNOWN"",
               ""mood"": ""MOOD_UNKNOWN"",
               ""number"": ""SINGULAR"",
               ""person"": ""PERSON_UNKNOWN"",
               ""proper"": ""PROPER"",
               ""reciprocity"": ""RECIPROCITY_UNKNOWN"",
               ""tense"": ""TENSE_UNKNOWN"",
               ""voice"": ""VOICE_UNKNOWN""
           },
           ""dependencyEdge"": {
               ""headTokenIndex"": 2,
               ""label"": ""ATTR""
           },
           ""lemma"": ""Sneha""
       }
   ],
   ""language"": ""en""
}";

                       var obj = JObject.Parse(json);
                       
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
                File.WriteAllText(@"C:\Users\Administrator\Desktop/Export.csv", csv);
          

       }


   }
}

       
>>>>>>> 507d5b85f5275a3f2f99cbee41ce898a7a34d8d9

      
   

   
