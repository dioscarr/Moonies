using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MooniesApp.Data;

namespace MooniesApp.Models
{
    public class AccountVM
    {
        private ApplicationDbContext _db;
        public AccountVM(ApplicationDbContext db)
        {
            _db = db;
        }

        public List<AvailableFundModel> AvailableFunds { get; set; }


        public void GetAvailableFunds()
        {
            AvailableFunds = new List<AvailableFundModel>();
            var avil = _db.AvailableFunds.ToList();
            avil.ForEach(c => AvailableFunds.Add(new AvailableFundModel { id = 1, Name = c.Name, Balance = c.Balance, BalanceDate = c.BalanceDate, isActive = true }));                    
        }
    }
}
