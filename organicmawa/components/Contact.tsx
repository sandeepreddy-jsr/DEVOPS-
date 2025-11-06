"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? Want to learn more? We're here to help you on your organic farming journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your farming goals or questions..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-xl mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📧</div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-green-50">info@organicmawa.com</p>
                    <p className="text-green-50">support@organicmawa.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📞</div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-green-50">+91 1800-XXX-XXXX (Toll Free)</p>
                    <p className="text-green-50">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-3xl mr-4">📍</div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-green-50">Organic Mawa Knowledge Center</p>
                    <p className="text-green-50">Agricultural Innovation Hub</p>
                    <p className="text-green-50">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-green-600 cursor-pointer">📖 Free Guides</li>
                    <li className="hover:text-green-600 cursor-pointer">🎥 Video Tutorials</li>
                    <li className="hover:text-green-600 cursor-pointer">📊 Case Studies</li>
                    <li className="hover:text-green-600 cursor-pointer">📰 Blog Articles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Support</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="hover:text-green-600 cursor-pointer">❓ FAQ</li>
                    <li className="hover:text-green-600 cursor-pointer">💬 Community Forum</li>
                    <li className="hover:text-green-600 cursor-pointer">🎓 Training Programs</li>
                    <li className="hover:text-green-600 cursor-pointer">🤝 Consultation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border-2 border-amber-200 p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🌟 Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get weekly tips, seasonal guides, and exclusive organic farming insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
            />
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
