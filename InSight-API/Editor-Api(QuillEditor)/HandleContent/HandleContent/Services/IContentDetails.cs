using System;
using HandleContent;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.Mvc;

namespace ContentService
{
    public interface IContentDetailsService
    {
        // Task<List<ContentDetails>> GetAll();

        // Task<List<ContentDetails>> GetUsingId(int id);
        // Task Create(ContentDetails item);
        // Task Update(int id, ContentDetails item);
        // Task Delete(int id);

        Task<List<UserContentDetails>> Get();
        Task<List<UserContentDetails>> GetByID(int id);
        Task Post(UserContentDetails item);
        Task<int> Update(int id, UserContentDetails item);
        Task<int> Delete(int id);
        Task<int> Create(UserContentDetails item);
       
    }
}