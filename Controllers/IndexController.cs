using Microsoft.AspNetCore.Mvc;

namespace laout.Controllers
{
    public class IndexController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult DemoCard()
        {
            return View();
        }
    }
}
