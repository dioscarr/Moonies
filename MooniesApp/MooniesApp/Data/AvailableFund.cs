using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MooniesApp.Data
{
    public class AvailableFund
    {
        public int id { get; set; }

        public string Name { get; set; }
        public decimal Balance { get; set; }
        public string BalanceDate { get; set; }
        public bool isActive { get; set; }
    }
}
