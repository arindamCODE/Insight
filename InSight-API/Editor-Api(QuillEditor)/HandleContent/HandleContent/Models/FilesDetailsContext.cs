using Microsoft.EntityFrameworkCore;

namespace HandleContent
{
    public class UserFileDetailsContext:DbContext
    {
        public UserFileDetailsContext(DbContextOptions<UserFileDetailsContext>options):base(options)
        {}
        public DbSet<UserFileDetails> UserFileDetails {get;set;}

        public DbSet<UserContentDetails> UserContentDetails {get;set;}
        
    }

}