using System;
using System.Collections.Generic;
using Core.Entities;
using Core.Interfaces;
using System.Data.SQLite;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace Infrastructure
{
    public class MessageRepository : IMessageRepository
    {
        private string _connectionString;

        public MessageRepository(IConfiguration config)
        {
            _connectionString = config["DBConnection"];
        }

        public async Task<IList<Message>> GetMessages()
        {
            var list = new List<Message>();
            
            await using var connection = new SQLiteConnection(_connectionString);
            await connection.OpenAsync();

            var cmd = connection.CreateCommand();
            cmd.CommandText = "SELECT * FROM Message ORDER BY ID DESC";

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
            
            await connection.CloseAsync();

            return list;
        }

        public async Task Create(Message item)
        {
            item.Time = DateTimeOffset.Now.ToString("o");
            
            await using var connection = new SQLiteConnection(_connectionString);
            await connection.OpenAsync();
            
            var cmd = connection.CreateCommand();
            cmd.CommandText = $"insert into Message (Time, Comment, User) values ('{item.Time}','{item.Comment}','{item.User}')";
            
            await cmd.ExecuteNonQueryAsync();
            await connection.CloseAsync();
        }
    }
}
