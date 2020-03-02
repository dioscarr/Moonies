using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using MooniesApp.Data;
using MooniesApp.Models;

namespace MooniesApp.Controllers
{
    [Authorize]
    [Route("api/[controller]/[action]")]   
    [ApiController]
    public class ProfileAccountController : ControllerBase
    {
        private readonly ILogger<ProfileAccountController> _logger;
        private ApplicationDbContext _db;
        public ProfileAccountController(IServiceProvider serv, ILogger<ProfileAccountController> logger)
        {
            _logger = logger;
            _db = serv.GetRequiredService<ApplicationDbContext>();
        }

        [HttpGet]
        public AccountVM GetAccount()
        {
           
                AccountVM a = new AccountVM(_db);
                a.GetAvailableFunds();
                return a;
           
             
        }


    }
}