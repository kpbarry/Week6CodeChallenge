﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Week6CodeChallenge.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return PartialView();
        }
        [HttpGet]
        public ActionResult HomePage()
        {
            return PartialView();
        }

    }
}
