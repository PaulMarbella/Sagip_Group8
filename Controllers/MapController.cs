using Microsoft.AspNetCore.Mvc;

namespace SagipResearch.Controllers
{
    public class MapController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
