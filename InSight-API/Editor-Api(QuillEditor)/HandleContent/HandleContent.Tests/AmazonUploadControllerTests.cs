using System;
using Xunit;
using Moq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
//using ContentDetails.Controllers;
using AmazonUploadController.Controllers;
using AmazonUploadService;
using HandleContent;

namespace HandleContent.Tests
{
    public class AmazonUploadControllerTests
    {
        private IAmazonUploadService _service;

        IFormFile file;

        [Fact]
        public async Task UploadToS3Test()
        {
            //Arrange
            var mockRepo = new Mock<IAmazonUploadService>();
            var controller = new AmazonS3UploadController(mockRepo.Object);

            // Act
            var result = await controller.UploadToS3(file);

            // Assert
            Assert.IsType<bool>(result);
        }

        [Fact]
        public async Task DownloadFromS3Test()
        {
            //Arrange
            var mockRepo = new Mock<IAmazonUploadService>();
            var controller = new AmazonS3UploadController(mockRepo.Object);

            // Act
            var result = await controller.DownloadFromS3("random");

            // Assert
            Assert.IsType<bool>(result);
        }

        [Fact]
        public async Task DeleteFromS3Test()
        {
            //Arrange
            var mockRepo = new Mock<IAmazonUploadService>();
            var controller = new AmazonS3UploadController(mockRepo.Object);

            // Act
            var result = await controller.DeleteFromS3("Random");

            // Assert
            Assert.IsType<bool>(result);
        }
    }
}