using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using System.Linq;
using Neo4jClient;
using Neo4j.Driver.V1;

namespace queryingraph
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.Basic("neo4j", "abcdefg")))
using (var session = driver.Session())
            {
                int i,j,n;
                Console.WriteLine("Input value of n");
               n = int.Parse(Console.ReadLine());
               int[] sum = new int[n];
                string[] query = new string[]{"single","Vinayak","girls"};

                int querylength = query.Length;

                for(i=0;i<n;i++){                       //n represents the number of documents 
                    sum[i]=0;            
                    for(j=0;j<querylength;j++){              

                            

 // here comes the logic to check whether the nodes in our query is present in the graph db //

    var result = session.Run("MATCH (a:"+documentname[i]+")  where a.name = {name} " +
                             
                             "RETURN count(a) as count",
                             new Dictionary<string, object> {{"name",query[j]} });

    
            

    foreach (var record in result)
    {

       Console.WriteLine("{0}  in {1} is = {2}",query[j],documentname[i],$"{record["count"].As<int>()}");
        var COUNT = (record["count"]);
        sum[i] += (System.Int64)COUNT;
        

    }
    


                    }   
                    Console.WriteLine("Score of {0} is {1}",documentname[i],sum[i]);         
                    
                 }

        List<System.Int64> sumlist = sum.ToList();
            for(i=0;i<n;i++){
                Console.WriteLine("Maximum value is  "+sumlist.Max());
                Console.WriteLine("Return the file "+documentname[(sumlist.IndexOf(sumlist.Max()))]);
                sumlist[(sumlist.IndexOf(sumlist.Max()))] = -1 ;
                
            }
            }
        }
    }
}
