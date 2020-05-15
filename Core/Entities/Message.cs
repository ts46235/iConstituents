using System;

namespace Core.Entities
{
    public class Message
    {
        public int Id { get; set; }
        
        public /*DateTimeOffset*/string Time { get; set; }

        public string Comment { get; set; }

        public string User { get; set; }
    }
}
