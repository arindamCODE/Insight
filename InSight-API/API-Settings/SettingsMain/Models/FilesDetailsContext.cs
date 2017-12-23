using Microsoft.EntityFrameworkCore;

namespace HandleContent
{
    public class FilesDetailsContext:DbContext
    {
        public FilesDetailsContext(DbContextOptions<FilesDetailsContext>options):base(options)
        {}
        public DbSet<FilesDetails> PhotoTable {get;set;}
        
    }

}