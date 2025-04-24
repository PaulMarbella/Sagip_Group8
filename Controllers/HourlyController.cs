using Microsoft.AspNetCore.Mvc;

namespace SagipResearch.Controllers
{
    public class HourlyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
