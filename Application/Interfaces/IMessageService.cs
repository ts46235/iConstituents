using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Application.Interfaces
{
    public interface IMessageService
    {
        Task<IList<Message>> GetMessages();

        Task Create(Message message);
    }
}