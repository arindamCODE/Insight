using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using searchnlp;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using appconfig;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Runtime.Serialization;
using System.Text;
using searchresult;
namespace search_insight_api.Controllers{
    [Route("api/[controller]")]

    public class PostSearchController:Controller
    {
        [HttpPost]
        public async Task<string> Post([FromBody]Search search)
        {
            Task<string[]> returnedjsontask=  CallNLP.ProcessRepositories(search.value);

            string[] returnedjson=await returnedjsontask;
            //Console.WriteLine(returnedjson);
            SearchResult searchResult=new SearchResult();

            for(int i=0;i<returnedjson.Length;i++)
            {
                Console.WriteLine(returnedjson[i]);
            }

            searchResult.Jsonstring=returnedjson;

            var client = new HttpClient();

            AppConfig Appconfig=new AppConfig();

            client.DefaultRequestHeaders.Accept.Clear();

            client.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/json"));
            var stringTask = await client.PostAsync(Appconfig.search_find_content_url,new StringContent(JsonConvert.SerializeObject(searchResult),Encoding.UTF8,"application/json"));
            var msg = stringTask.Content.ReadAsStringAsync().Result;
            Console.WriteLine(msg);
            return msg;
        }
    }
}