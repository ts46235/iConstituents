using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Interfaces;
using Core.Entities;
using Core.Interfaces;

namespace Application.Services
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository _repository;

        public MessageService(IMessageRepository repository)
        {
            _repository = repository;
        }

        public async Task<IList<Message>> GetMessages()
        {
            return await _repository.GetMessages();
        }

        public async Task Create(Message message)
        {
            await _repository.Create(message);
        }
    }
}
