using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IMessageRepository
    {
        Task<IList<Message>> GetMessages();

         Task Create(Message item);
    }
}