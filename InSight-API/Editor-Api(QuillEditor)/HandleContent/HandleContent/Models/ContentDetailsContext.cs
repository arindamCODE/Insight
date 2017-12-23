using Microsoft.EntityFrameworkCore;

namespace HandleContent
{
    public class UserContentDetailsContext:DbContext
    {
        public UserContentDetailsContext(DbContextOptions<UserContentDetailsContext>options):base(options)
        {}
        public DbSet<UserContentDetails> UserContentDetails {get;set;}
        
    }

}