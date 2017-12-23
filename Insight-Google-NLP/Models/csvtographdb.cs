using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using System.Linq;
using Neo4jClient;
using Neo4j.Driver.V1;
using System.IO;

namespace Restful.Models{

    public  class graphdb {

        public void csvtographdbfunction(int ID){
            string id = ID.ToString();
            Console.WriteLine("entered graphdb={0}",id);    
           using (var driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.Basic("neo4j", "Neo4j")))
using (var session = driver.Session())
           {
            //    Console.WriteLine("How many documnets are there to uplaod?");
            //    int n = int.Parse(Console.ReadLine());
               
            //    System.Int64[] sum = new System.Int64[n];

               

            //    string[] query = new string[]{"single","Vinayak","girls"};

            //    string[] documentname = new string[n] ;

               
               
            //    for(i=0;i<n;i++){
                //    Console.WriteLine("Enter the name of your document number {0}",(i+1));
                //    documentname[i]= Console.ReadLine();
                // here we have to import the id of the document from our database.
                //        session.Run(@"load csv with headers from {filedirectory} as row FOREACH(ignoreMe IN CASE WHEN trim(row.tag) = {NOUN} THEN [1] ELSE [] END | MERGE (p:doc"+id+" {name:row.lemma,detect:{detect}})) FOREACH(ignoreMe IN CASE WHEN trim(row.tag) = {VERB} THEN [1] ELSE [] END | MERGE (p:doc"+id+" {name:row.lemma,detect:{detect}}))  FOREACH(ignoreMe IN CASE WHEN trim(row.tag) = {ADJ} THEN [1] ELSE [] END | MERGE (p:doc"+id+" {name:row.lemma,detect:{detect}})) with row match(m:doc"+id+"),(n:doc"+id+") merge (m)-[:next]-(n)",
                // new Dictionary<string, object>{{"filedirectory","file:///export.csv"},{"NOUN","NOUN"},{"VERB","VERB"},{"ADJ","ADJ"},{"detect",""+id+""}});

                 session.Run(@"load csv with headers from {filedirectory} as row FOREACH(ignoreMe IN CASE WHEN trim(row.language) = {LANGUAGE} THEN [1] ELSE [] END | MERGE (p:doc"+id+" {name:row.text,detect:{detect}})) with row match(m:doc"+id+"),(n:doc"+id+") merge (m)-[:next]-(n)",
                new Dictionary<string, object>{{"filedirectory","file:///export.csv"},{"LANGUAGE","en"},{"detect",""+id+""}});
                Console.WriteLine("csv loaded into graphdb");
                // }
               

                //File.Delete(@"C:\Users\Administrator\Documents\Neo4j\default.graphdb\import\export.csv");
                session.Run(@"match(a) match(b) where a.name=b.name merge (a)<-[r:same]->(b)");
                session.Run(@"match(a) match(b) where a=b match (a)<-[r]->(b) delete r");

                Console.WriteLine("Database has to be created by now");

          }}
            public void csvtographdbfunction(int ID, string word){
                Console.WriteLine("word without synonym {0}",word);
                    string id = ID.ToString();
                 using (var driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.Basic("neo4j", "Neo4j")))
                using (var session = driver.Session())
           {
               Console.WriteLine("word without synonym {0}",word);
               session.Run(@"merge(p:doc"+id+"{name:{WORD},detect:{DETECT}}) with p match(m:doc"+id+"),(n:doc"+id+") merge (m)-[:next]-(n)",
               new Dictionary<string, object>{{"WORD",""+word+""},{"DETECT",""+id+""}});

                Console.WriteLine("yoyoyoy");

               session.Run(@"match(a) match(b) where a.name=b.name merge (a)<-[r:same]->(b) with a,b match(a) match(b) where a=b match (a)<-[r]->(b) delete r");
                Console.WriteLine("reached the end of elsegraph");
           }

            }
          }}

        