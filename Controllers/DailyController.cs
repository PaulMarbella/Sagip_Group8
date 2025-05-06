using Microsoft.AspNetCore.Mvc;

namespace SagipResearch.Controllers
{
    public class DailyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult WeatherInfo()
        {
            return View();
        }
    }
}
