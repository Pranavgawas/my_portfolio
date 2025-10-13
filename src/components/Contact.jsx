import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Facebook, Instagram, Send, Copy, Check } from 'lucide-react';

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = "pranavgawas1999@gmail.com";

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Pranavgawas/",
      icon: Github,
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:shadow-gray-500/50"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pranavgawas/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:shadow-blue-500/50"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/PranavGawas1999",
      icon: Twitter,
      color: "from-sky-400 to-blue-500",
      hoverColor: "hover:shadow-sky-500/50"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_pranav_gawas_/",
      icon: Instagram,
      color: "from-purple-500 via-pink-500 to-orange-500",
      hoverColor: "hover:shadow-pink-500/50"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/pranav.b.gawas.5/",
      icon: Facebook,
      color: "from-blue-500 to-blue-700",
      hoverColor: "hover:shadow-blue-500/50"
    }
  ];

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contactId" className="max-w-4xl mx-auto" aria-labelledby="contact-heading">
      {/* Main CTA Card */}
      <div className="card bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 shadow-xl border border-indigo-500/20 backdrop-blur-sm mb-8">
        <div className="card-body text-center p-8 sm:p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg">
              <Send className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
            </div>
          </div>
          
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-base sm:text-lg text-base-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleEmailClick}
              className="btn btn-lg gap-3 w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              aria-label="Send email to Pranav Gawas"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Send Email
            </button>
            
            <button 
              onClick={handleCopyEmail}
              className="btn btn-lg gap-3 w-full sm:w-auto btn-outline border-2 hover:scale-105 transition-all duration-300"
              aria-label={emailCopied ? "Email copied to clipboard" : "Copy email to clipboard"}
            >
              {emailCopied ? (
                <>
                  <Check className="w-5 h-5" aria-hidden="true" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" aria-hidden="true" />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-base-content mb-6">
          Connect With Me
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card bg-base-100 shadow-lg hover:shadow-2xl ${social.hoverColor} transition-all duration-300 transform hover:-translate-y-2 border border-base-200 hover:border-transparent overflow-hidden group cursor-pointer`}
              aria-label={`Visit my ${social.name} profile`}
            >
              <div className="card-body p-6 items-center text-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-base-content mt-3">
                  {social.name}
                </h4>
              </div>
            </a>
          );
        })}
      </div>

      {/* Quick Info */}
      <div className="mt-8 text-center">
        <button 
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-6 py-3 bg-base-200/50 hover:bg-base-200 rounded-full transition-all duration-300 group cursor-pointer"
          aria-label="Copy email address to clipboard"
        >
          <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
          <span className="text-sm sm:text-base text-base-content/80 group-hover:text-base-content transition-colors">
            {email}
          </span>
          {emailCopied ? (
            <Check className="w-4 h-4 text-success" aria-hidden="true" />
          ) : (
            <Copy className="w-4 h-4 text-base-content/50 group-hover:text-primary transition-colors" aria-hidden="true" />
          )}
        </button>
      </div>
    </section>
  );
}

export default Contact;
