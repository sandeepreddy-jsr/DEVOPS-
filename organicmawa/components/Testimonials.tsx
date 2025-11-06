export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Maharashtra",
      role: "Organic Farmer",
      image: "👨‍🌾",
      quote: "Switching to organic farming changed my life. My soil health improved dramatically, and I'm getting premium prices for my produce. The knowledge from Organic Mawa was invaluable!",
      crop: "Cotton & Vegetables"
    },
    {
      name: "Lakshmi Devi",
      location: "Tamil Nadu",
      role: "Small-scale Farmer",
      image: "👩‍🌾",
      quote: "I learned how to make my own organic fertilizers and pesticides. My input costs dropped by 60%, and my crops are healthier than ever. Thank you for this wonderful education!",
      crop: "Rice & Pulses"
    },
    {
      name: "Suresh Patel",
      location: "Gujarat",
      role: "Progressive Farmer",
      image: "👨‍🌾",
      quote: "The seed preparation techniques helped me achieve 95% germination rate. My yields increased by 40% in just two seasons. Organic farming is truly the future!",
      crop: "Wheat & Mustard"
    },
    {
      name: "Anita Sharma",
      location: "Punjab",
      role: "Organic Enthusiast",
      image: "👩‍🌾",
      quote: "Started with a small kitchen garden using these methods. Now I supply organic vegetables to my entire neighborhood. The compost preparation guide was especially helpful!",
      crop: "Vegetables"
    },
    {
      name: "Mohammed Ali",
      location: "Karnataka",
      role: "Certified Organic Farmer",
      image: "👨‍🌾",
      quote: "Got my organic certification last year thanks to the comprehensive guidance. My farm is now a model for others in my village. The Jeevamrut formula works wonders!",
      crop: "Millets & Spices"
    },
    {
      name: "Priya Reddy",
      location: "Andhra Pradesh",
      role: "Young Farmer",
      image: "👩‍🌾",
      quote: "As a young farmer, I wanted to do things differently. Organic Mawa gave me the confidence and knowledge to start my organic farm. Now I'm inspiring other youth!",
      crop: "Fruits & Vegetables"
    }
  ];

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real farmers sharing their organic farming journey and transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-100">
              <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">{testimonial.image}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-green-600 font-semibold">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
              </div>
              <div className="bg-green-100 px-3 py-2 rounded-lg inline-block">
                <p className="text-xs text-green-800 font-semibold">Grows: {testimonial.crop}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-green-50 text-lg max-w-2xl mx-auto">
              Over 10,000+ farmers have transformed their farming practices with our guidance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-green-50 text-sm">Active Farmers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-green-50 text-sm">Villages Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-green-50 text-sm">Acres Converted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-green-50 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
