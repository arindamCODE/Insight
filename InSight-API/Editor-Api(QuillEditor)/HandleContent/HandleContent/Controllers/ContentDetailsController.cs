using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;
using System.Net.Http;
using HandleContent;
using ContentService;



namespace ContentInfo.Controllers
{
    [Route("api/[controller]")]
    public class ContentDetailsController:Controller //4.Using the infoservice defined in startup in the controller.
    {
        private readonly UserContentDetailsContext _context;

        private IContentDetailsService _service;

        public ContentDetailsController(IContentDetailsService service)
        {
            //_context=context;
            _service=service;
        }

    //     [HttpGet]
    //     public Task<List<UserContentDetails>> GetAll()
    //     {
    //         return _service.GetAll();
    //     }

    //     [HttpGet("{id}", Name = "GetContentInfo")]
    //     public Task<List<UserContentDetails>> GetUsingId(int id)
    //     {
    //         return _service.GetUsingId(id);
    //     }


    //     // [HttpPost] //Post method
    //     // public Task Create([FromBody] ContentDetails item)
    //     // {
    //     //     return _service.Create(item);
    //     // }

    //     [HttpPut("{id}")]
    //     public void Put(int id, [FromBody] UserContentDetails item)
    //     {
    //        _service.Update(id, item);
    //     }

    //    [HttpDelete("{id}")]
    //     public void Del(int id)
    //     {
    //         _service.Delete(id);
    //     }

        [HttpGet]
        public Task<List<UserContentDetails>> GetAll()
        {
            return _service.Get();
        }
        
        [HttpGet("{id}")]
        public Task<List<UserContentDetails>> GetID(int id)
        {
            return  _service.GetByID(id); 
        }

        [HttpPut("{id}")]
        public Task<int> Put(int id, [FromBody] UserContentDetails item)
        {
            return _service.Update(id, item);
        }

        [HttpDelete("{id}")]
        public Task<int> Del(int id)
        {
            return _service.Delete(id);
        }

        [HttpPost]
        public Task<int> Create([FromBody] UserContentDetails item)
        {
            return _service.Create(item);
        }  

    }

}