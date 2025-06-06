﻿using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace SagipResearch.Hubs
{
    public class MessageHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
