using System;
using Xunit;
using System.Threading.Tasks;
using System.Collections.Generic;
using SettingController.Controllers;
using SettingsService;
using  SettingsModel.Models;
using Moq;
using Settingsmodel;

namespace settings.tests
{
    public class SettingsControllerTests
    {
        private ISettingsService _service;

         private readonly SettingsContext _context;
        Settingslist item;

        [Fact]
        public void GetAllTest()
        {
            //Arrange
            var mockRepo = new Mock<ISettingsService>();
            var mockRepo1=new Mock<SettingsContext>();
            var controller = new SettingsController(mockRepo1.Object,mockRepo.Object);

            //Act
            var result = controller.Get();

            //Assert
            Assert.IsType<Task<List<Settingslist>>>(result);

            
        }
    }
}
