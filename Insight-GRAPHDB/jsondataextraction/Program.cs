using System;
using System.IO;
using Newtonsoft.Json.Linq;
namespace jsondataextraction
{
    class Program
    {
        static void Main(string[] args)
        {
            string json = @"{
    ""sentences"": [
        {
            ""text"": {
                ""content"": ""CGI takes the view that all of its professionals are “owners” of the company, empowered to share in the risks and rewards of building a world-class IT company."",
                ""beginOffset"": 0
            }
        },
        {
            ""text"": {
                ""content"": ""Employees are referred to as “members” to emphasize this concept of ownership, and more than 85 percent are company shareholders through CGI’s share purchase plan."",
                ""beginOffset"": 164
            }
        }
    ],
    ""tokens"": [
        {
            ""text"": {
                ""content"": ""CGI"",
                ""beginOffset"": 0
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
                ""headTokenIndex"": 1,
                ""label"": ""NSUBJ""
            },
            ""lemma"": ""CGI""
        },
        {
            ""text"": {
                ""content"": ""takes"",
                ""beginOffset"": 4
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
                ""headTokenIndex"": 1,
                ""label"": ""ROOT""
            },
            ""lemma"": ""take""
        }";

 

// JObject o = JObject.Parse(json);
// Console.WriteLine(o.GetValue("sentences"));
// Console.WriteLine(o.SelectToken("sentences[0].text.content"));
// Console.WriteLine(o.SelectToken("Sizes[2]"));
// string name;// = (string)o["sentences"]["text"]["content"];

// Console.WriteLine(name);



// another method

JObject o1 = JObject.Parse(File.ReadAllText(@"c:\videogames.json"));

// read JSON directly from a file
using (StreamReader file = File.OpenText(@"c:\videogames.json"))
using (JsonTextReader reader = new JsonTextReader(file))
{
  JObject o2 = (JObject) JToken.ReadFrom(reader);
}

        }
    }
}
