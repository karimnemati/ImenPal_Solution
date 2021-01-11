using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ImenPal_Project.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ImenPal_Project.AdminClient.Controllers {
    [Area ("AdminClient")]

    public class LoginController : Controller {

        public IActionResult Login () {
            return View ();
        }
  public IActionResult LoginCode () {
            return View ();
        }
        public IActionResult signup () {
            return View ();
        }
        public IActionResult forgot_pwd () {
            return View ();
        }
        public IActionResult signupCode () {
            return View ();
        }

           public IActionResult signupEnd () {
            return View ();
        }

    }
}