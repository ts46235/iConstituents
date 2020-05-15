using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Interfaces;
using Core.Entities;
using MessageBoard.Hub;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace MessageBoard.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService _messageService;
        private readonly IHubContext<MessageHub> _hub;

        public MessageController(IMessageService messageService, IHubContext<MessageHub> hub)
        {
            _messageService = messageService;
            _hub = hub;
        }

        [HttpGet]
        public async Task<IList<Message>> Get()
        {
            return await _messageService.GetMessages();
        }

        [HttpPost]
        public async Task Create(Message message)
        {
            await _messageService.Create(message);
            await _hub.Clients.All.SendAsync("commentAdded", message.Comment, message.Time, message.User);
        }
    }
}
