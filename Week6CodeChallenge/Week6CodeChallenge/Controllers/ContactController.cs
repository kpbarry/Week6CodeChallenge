using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net.Mail;
using System.Text;

namespace Week6CodeChallenge.Controllers
{
    public class ContactController : Controller
    {
        //
        // GET: /Contact/
        [HttpGet]
        public ActionResult Index()
        {
            return PartialView(new Week6CodeChallenge.Models.ContactMeCompany());
        }

        [HttpPost]
        public ActionResult Index(Week6CodeChallenge.Models.ContactMeCompany contact)
        {
            MailMessage message = new MailMessage("theRobots@seedpaths.com", "kpbarry7@gmail.com");

            //Step 3. Set the subject
            message.Subject = "Pls respond to " + contact.FirstName + " " + contact.LastName;

            //Step 4. Build the body w/ a string builder
            StringBuilder sb = new StringBuilder();
            sb.AppendLine("You have a new contact request.");
            sb.AppendLine("Name: " + contact.FirstName + " " + contact.LastName);

            sb.AppendLine("My number is: " + contact.PhoneNumber);
            sb.AppendLine("Message: " + contact.Comment);
            //Step 5. Set body = sb.ToString()
            message.Body = sb.ToString();

            //Step 6. SMTP Client
            SmtpClient client = new SmtpClient("mail.dustinkraft.com", 587);
            client.Credentials = new System.Net.NetworkCredential("postmaster@dustinkraft.com", "techIsFun1");
            //Step 7. Send the message
            client.Send(message);
            //kick user back to list
            return PartialView("ThankYou");
        }

        [HttpGet]
        public ActionResult ThankYou()
        {
            return PartialView();
        }
    }
}
