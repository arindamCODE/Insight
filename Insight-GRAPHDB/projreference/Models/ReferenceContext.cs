using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Reference.Models{
    public class ReferenceContext: DbContext {
            public ReferenceContext(DbContextOptions<ReferenceContext> options)
            : base(options){}
                public DbSet<ReferenceItem> referencetable { get; set; }
            }
    } 
