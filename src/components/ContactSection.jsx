import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa"; 
import { useState } from "react";
import { Send } from "lucide-react";


export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-24 bg-gradient-to-b from-background via-background/95 to-background text-foreground"
    >
      {/* 🌌 Fond étoilé */}
      <div className="absolute inset-0 -z-10 bg-[url('/stars-bg.png')] bg-cover bg-center opacity-30"></div>

      <div className="container mx-auto max-w-6xl">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I’m always open to discussing new opportunities.
        </p>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 📌 Infos Contact */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

            {/* Email */}
            <div className="flex items-center space-x-4 bg-card/40 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Laksyerreda@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4 bg-card/40 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+11234567890"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +212 6 7557 87 20
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4 bg-card/40 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Rabat, Maroc</p>
              </div>
            </div>

            {/* 🌍 Réseaux sociaux */}
            <div className="mt-10 text-center">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex justify-center items-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/reda-laksyer-31704926a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-card shadow hover:bg-primary hover:text-white transition transform hover:scale-110"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100008622878301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-card shadow hover:bg-primary hover:text-white transition transform hover:scale-110"
                >
                  <FaFacebook size={22} />
                </a>
                <a
                  href="https://wa.me/212667641474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-card shadow hover:bg-primary hover:text-white transition transform hover:scale-110"
                >
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* 📩 Formulaire */}
      <div className="bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-border hover:shadow-primary/30 transition">
  {/* 🔹 Titre avec icône */}
  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
  <Mail className="h-7 w-7 text-primary" /> Send a Message
</h3>


  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Nom */}
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition shadow-sm hover:shadow-md"
        placeholder="your name "
        required
      />
    </div>

    {/* Email */}
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Your Email
      </label>
      <input
        type="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition shadow-sm hover:shadow-md"
        placeholder="example@email.com"
        required
      />
    </div>

    {/* Message */}
    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        Your Message
      </label>
      <textarea
        id="message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition shadow-sm hover:shadow-md"
        placeholder="Write your message..."
        required
      ></textarea>
    </div>

    {/* Bouton stylisé */}
   <button
  type="submit"
  className="w-full flex justify-center items-center gap-2 px-6 py-3 rounded-lg shadow-lg bg-gradient-to-r from-primary to-primary/80 text-white font-semibold tracking-wide hover:scale-105 hover:shadow-xl transition-all"
>
  Send Message <Send className="h-5 w-5" />
</button>

  </form>
</div>

        </div>
      </div>
    </section>
  );
};
