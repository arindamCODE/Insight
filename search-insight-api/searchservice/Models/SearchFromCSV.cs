using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using System.Linq;
using Neo4jClient;
using Neo4j.Driver.V1;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace searchbykeyword
{
  public class SearchCSV
   {
       public static string[] SearchFromCSV()
       {
           using (var driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.Basic("neo4j", "Neo4j")))
using (var session = driver.Session())
           {
               System.Int64 n=0 ;
               System.Int64 i=0;
               System.Int64 j=0;          
               System.Int64 count=0;
              
               var result1 = session.Run("match(a) return distinct a.detect as name");
               var count_result = session.Run("match(a) return count(distinct a.detect) as countresult");

                   foreach(var res in count_result){
               var finalres = res["countresult"];
               n += (System.Int64)finalres;
                    }
                    Console.WriteLine(n); //n now has the number of labels in neo4j graph db
                System.Int64[] sum = new System.Int64[n];
                 string[] label_name = new string[n];
                 Array.Clear(label_name, 0, label_name.Length);
               


              foreach(var report in result1)
               {
                  
                   Console.WriteLine($"{report["name"].As<string>()}");
                   var docname = report["name"].As<string>();
                   Console.WriteLine(docname);
                   label_name[j] = docname;
                   sum[i] = 0;
                                      
                     var result = session.Run(@"load csv with headers from {filedirectory} as query MATCH (n:doc"+docname+")  where query.content= n.name " +
                            
                    "RETURN count(*) as count",
                    new Dictionary<string, object> {{"filedirectory","file:///search.csv"} });


                       foreach (var record in result)
                    {
                                
                   
                         var COUNT = (record["count"]);
                            //Console.WriteLine("this point is {0}",(System.Int64)COUNT);
                         sum[i] += (System.Int64)COUNT;
        

                    }

                    Console.WriteLine("Score of {0} is {1}",docname,sum[i]);
                    

               

  

               i++;
                j++;
               }
               Console.WriteLine("sum is {0}",sum.Length);
               for(i=0;i<(sum.Length);i++){
                   if(sum[i]>0){
                       count++; 
                   }
               }
              //Array.Sort(label_name, StringComparer.InvariantCulture);
              
               for(i=0;i<(sum.Length);i++)
               {
                   for(j=0;j<(sum.Length-1);j++)
                   {
                       if (sum[j] >  sum[j+1] )
                       {
                           long temp = sum[j];
                           sum [j] = sum[j+1];
                           sum[j+1] = temp;

                          string temp2 = label_name[j];
                           label_name[j]=label_name[j+1];
                           label_name[j+1]=temp2;

                      }

                  }

               }
            // for()
            Console.WriteLine("count is {0}",count);
               string[] label_sort = new string[count];
               Array.Clear(label_sort, 0, label_sort.Length);
               Array.Reverse(label_name);
                for(i=0;i<count;i++){
                    label_sort[i]= label_name[i];
                    
                }
                //Array.Reverse(label_sort);
              foreach(var search in label_name){
                  Console.WriteLine(search);
              }
              foreach(var search in label_sort){
                  Console.WriteLine("here"+search);
              }
              
           
             return label_sort;
           }
             
            
              

          }


      }
}