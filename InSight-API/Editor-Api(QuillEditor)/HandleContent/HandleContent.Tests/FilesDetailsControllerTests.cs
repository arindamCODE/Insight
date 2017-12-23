using System;
using Xunit;
using Moq;
using System.Threading.Tasks;
using System.Collections.Generic;
//using ContentDetails.Controllers;
using FilesDetailsInfo.Controllers;
using FilesDetailsService;
using HandleContent;


namespace HandleContent.Tests
{
    public class FilesDetailsControllerTests
    {
       public readonly UserFileDetailsContext _context;

       UserFileDetails item;

        [Fact]
        public void GetAllFilesTest()
        {
            //Arrange
            var mockRepo = new Mock<IFilesDetailsService>();
            var controller = new FilesDetailsController(mockRepo.Object);

            // Act
            var result = controller.GetAllFiles();

            // Assert
            Assert.IsType<Task<List<UserFileDetails>>>(result);
        }  

        [Fact]
        public async Task CreateFilesTest()
        {
            //Arrange
            var mockRepo = new Mock<IFilesDetailsService>();
            var controller = new FilesDetailsController(mockRepo.Object);

            // Act
            var result = await controller.CreateFileDetails(item);

            // Assert
            Assert.IsType<bool>(result);
        } 

        [Fact]
        public async Task UpdateFilesTest()
        {
            //Arrange
            var mockRepo = new Mock<IFilesDetailsService>();
            var controller = new FilesDetailsController(mockRepo.Object);

            // Act
            var result = await controller.CreateFileDetails(item);

            // Assert
            Assert.IsType<bool>(result);
        }

        [Fact]
        public async Task GetFileNameByIdTest()
        {
            //Arrange
            var mockRepo = new Mock<IFilesDetailsService>();
            var controller = new FilesDetailsController(mockRepo.Object);

            // Act
            var result = await controller.GetFileNameByContentId(3,2);

            // Assert
            Assert.IsType<List<UserFileDetails>>(result);
        } 

        [Fact]
        public async Task DeleteFilesTest()
        {
           //Arrange
            var mockRepo = new Mock<IFilesDetailsService>();
            var controller = new FilesDetailsController(mockRepo.Object);

            // Act
            var result = await controller.CreateFileDetails(item);

            // Assert
            Assert.IsType<bool>(result);
        } 


    }
}