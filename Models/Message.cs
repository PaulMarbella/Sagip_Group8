using System;
using System.ComponentModel.DataAnnotations;

namespace SagipResearch.Models
{
    public class Message
    {
        public int Id { get; set; }

        [Required]
        public string? Sender { get; set; }

        [Required]
        public string? Text { get; set; }

        public DateTime Timestamp { get; set; } = DateTime.Now;
    }
}
