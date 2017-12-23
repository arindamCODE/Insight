using System;
using Xunit;
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
using search_insight_api;
using searchbykeyword;
using search_insight_api.Controllers;

namespace SearchServiceTestCases.tests
{
    public class UnitTest1
    {
        [Fact]
        public void CheckProcessRepositories()
        {
            //Arrange
            PostSearchController objcontroller=new PostSearchController();
            //Act
            string checknlp= "show me how controller works";
            var returnednlp=CallNLP.ProcessRepositories(checknlp);
            //Assert
             Assert.IsType<Task<string[]>>(returnednlp);

        }
        [Fact]

        public void HttpPostTest()       //before running this test case ensure the favourites api is running 
        {
            //Arrange
            PostSearchController objcontroller=new PostSearchController();
            Search checksearch=new Search();
            //Act
            string checksearchstring="checksearch";
            checksearch.value=checksearchstring;
            var returnedpost=objcontroller.Post(checksearch);
            //Assert
            Assert.IsType<Task<string>>(returnedpost);
        }
        [Fact]

        public void CheckJsontoCsv()
        {
            //Arrange
            PostSearchController objcontroller=new PostSearchController();
            //Act
            var json =@"{
                            ""sentences"": [
                                {
                        ""text"": {
                                },
                        ""lemma"": ""Sneha""
                        }
                        ],
                        ""language"": ""en""
                        }";
            var returnedjsontocsv=CallNLP.jsonToCSV(json);
            //Assert
            Assert.IsType<string[]>(returnedjsontocsv);

        }
        [Fact]
        public void CheckSearchfromCSV()
        {
            //Arrange
            PostSearchController objcontroller=new PostSearchController();
            //Act
            var returnedsearchfromcsv=SearchCSV.SearchFromCSV();
            //Assert
            Assert.IsType<string[]>(returnedsearchfromcsv);
        }
}
}
