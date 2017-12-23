using System;
using Xunit;
using Moq;
using System.Threading.Tasks;
using System.Collections.Generic;
using ContentInfo.Controllers;
using ContentService;

namespace HandleContent.Tests
{
    public class ContentDetailsControllerTests
    {
        //private readonly UserContentDetailsContext _context;

        private IContentDetailsService _service; 

        UserContentDetails item;

        [Fact]
        public void GetAllTest()
        {
            // Arrange
            var mockRepo = new Mock<IContentDetailsService>();
            //mockRepo.Setup(repo => repo.ListAsync()).Returns(Task.FromResult(GetTestSessions()));
            var controller = new ContentDetailsController(mockRepo.Object);

            // Act
            var result = controller.GetAll();

            // Assert
            Assert.IsType<Task<List<UserContentDetails>>>(result);
            
        }

        [Fact]
        public void GetIDTest()
        {
            // Arrange
            var mockRepo = new Mock<IContentDetailsService>();
            //mockRepo.Setup(repo => repo.ListAsync()).Returns(Task.FromResult(GetTestSessions()));
            var controller = new ContentDetailsController(mockRepo.Object);

            // Act
            var result =  controller.GetID(3);

            // Assert
            Assert.IsType<Task<List<UserContentDetails>>>(result);
            
        }

        [Fact]
        public async Task CreateTest()
        {
            // Arrange
            var mockRepo = new Mock<IContentDetailsService>();
            //mockRepo.Setup(repo => repo.ListAsync()).Returns(Task.FromResult(GetTestSessions()));
            var controller = new ContentDetailsController(mockRepo.Object);

            // Act
            var result = await controller.Create(item);

            // Assert
            Assert.IsType<int>(result);
            
        }

        [Fact]
        public async Task PutTest()
        {
            // Arrange
            var mockRepo = new Mock<IContentDetailsService>();
            //mockRepo.Setup(repo => repo.ListAsync()).Returns(Task.FromResult(GetTestSessions()));
            var controller = new ContentDetailsController(mockRepo.Object);

            // Act
            var result =  await controller.Put(3,item);

            // Assert
            Assert.IsType<int>(result);
            
        }

        [Fact]
        public async Task DelTest()
        {
            // Arrange
            var mockRepo = new Mock<IContentDetailsService>();
            //mockRepo.Setup(repo => repo.ListAsync()).Returns(Task.FromResult(GetTestSessions()));
            var controller = new ContentDetailsController(mockRepo.Object);

            // Act
            var result =  await controller.Del(5);

            // Assert
            Assert.IsType<int>(result);
        }
    }
}