using System;
using Xunit;
using ContentService;
using HandleContent;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HandleContent.Tests
{
    public class ContentTest
    {
        [Fact]
        public void TestContent()
        {
            //Arrange
            ContentMethods obj = new ContentMethods();
            

            //Act
            Task<List<UserContentDetails>> var = obj.Get();
            Task<List<UserContentDetails>> var1 = obj.GetByID(12); 

            //Assert
            Assert.IsType<Task<List<UserContentDetails>>>(var);
            Assert.IsType<Task<List<UserContentDetails>>>(var1);
        }
    }
}
