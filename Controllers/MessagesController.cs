using Microsoft.AspNetCore.Mvc;
using SagipResearch.Models;
using System.Collections.Generic;
using System.Linq;

namespace SagipResearch.Controllers
{
    public class MessagesController : Controller
    {
        private static List<Message> messages = new List<Message>();

        public IActionResult Index()
        {
            return View(messages);
        }

        [HttpPost]
        public IActionResult SendMessage(string sender, string text)
        {
            var message = new Message { Sender = sender, Text = text };
            messages.Add(message);
            return Ok(message);
        }
    }
}
