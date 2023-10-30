﻿namespace FrontEndProjectBackPart.Models
{
    public class Product:BaseEntity
    {
        public string Name { get; set; }
        public decimal Price { get; set; }

        public int ReviewCount { get; set; }

        public string Discount { get; set; }
        public ICollection<ProductImage> Images { get; set; }
        public int? CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
