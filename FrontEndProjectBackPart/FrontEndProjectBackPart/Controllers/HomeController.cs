
using FrontEndProjectBackPart.Data;
using FrontEndProjectBackPart.Models;
using FrontEndProjectBackPart.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace FrontEndProjectBackPart.Controllers
{
    public class HomeController : Controller
    {

        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context; 
        }

        public IActionResult Index()
        {
            List<Slider> sliders=_context.Sliders.Where(m=>!m.SoftDeleted).ToList();
            List<Product> products=_context.Products.Where(m=>!m.SoftDeleted).Include(m=>m.Images).ToList();

            HomeVM model = new()
            {
                Sliders = sliders,
                Products = products
            };
            return View(model);
        }

       
    }
}