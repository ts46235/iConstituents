using System;
using System.Collections.Generic;
using System.Data.Common;
using Core.Entities;
using Core.Interfaces;
using System.Data.SQLite;
using System.Threading.Tasks;

namespace Infrastructure
{
    public class MessageRepository : IMessageRepository
    {
        private DbConnection _connection;

        public MessageRepository()
        {
            _connection = new SQLiteConnection("Data Source=..\\Infrastructure\\message.db; Version=3;");
            _connection.Open();
        }

        public async Task<IList<Message>> GetMessages()
        {
            var cmd = _connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Message ORDER BY ID DESC";

            var list = new List<Message>();
            await using var reader = await cmd.ExecuteReaderAsync();
            while (await reader.ReadAsync())
            {
                list.Add(new Message()
                {
                    Id = reader.GetInt32(reader.GetOrdinal("Id")),
                    Comment = reader.GetString(reader.GetOrdinal("Comment")),
                    Time = reader.GetString(reader.GetOrdinal("Time")),
                    User = reader.GetString(reader.GetOrdinal("User")),
                });
            }

            return list;
        }

        public async Task Create(Message item)
        {
            item.Time = DateTimeOffset.Now.ToString("o");
            var cmd = _connection.CreateCommand();
            cmd.CommandText = $"insert into Message (Time, Comment, User) values ('{item.Time}','{item.Comment}','{item.User}')";
            await cmd.ExecuteNonQueryAsync();
        }
    }
}
