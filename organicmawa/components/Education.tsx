export default function Education() {
  const resources = [
    {
      category: "Beginner's Guide",
      icon: "📚",
      color: "bg-blue-500",
      topics: [
        "Introduction to Organic Farming",
        "Understanding Soil Health",
        "Basic Composting Techniques",
        "Starting Your First Organic Garden"
      ]
    },
    {
      category: "Advanced Techniques",
      icon: "🎓",
      color: "bg-purple-500",
      topics: [
        "Integrated Pest Management",
        "Soil Microbiology",
        "Advanced Composting Methods",
        "Organic Certification Process"
      ]
    },
    {
      category: "Crop Specific",
      icon: "🌾",
      color: "bg-green-500",
      topics: [
        "Organic Vegetable Cultivation",
        "Fruit Tree Management",
        "Grain Crop Production",
        "Medicinal Plant Growing"
      ]
    },
    {
      category: "Sustainability",
      icon: "♻️",
      color: "bg-teal-500",
      topics: [
        "Water Conservation Methods",
        "Renewable Energy in Farming",
        "Biodiversity Enhancement",
        "Carbon Sequestration"
      ]
    }
  ];

  const benefits = [
    {
      title: "Environmental Protection",
      description: "Reduce pollution, conserve water, and protect biodiversity",
      icon: "🌍"
    },
    {
      title: "Health Benefits",
      description: "Produce nutritious food free from harmful chemicals",
      icon: "💚"
    },
    {
      title: "Economic Viability",
      description: "Lower input costs and premium prices for organic produce",
      icon: "💰"
    },
    {
      title: "Soil Regeneration",
      description: "Build healthy, living soil for long-term productivity",
      icon: "🌱"
    }
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Knowledge & Education Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning resources to master organic farming from basics to advanced techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
              <div className={`${resource.color} text-white p-6 text-center`}>
                <div className="text-5xl mb-2">{resource.icon}</div>
                <h3 className="text-xl font-bold">{resource.category}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {resource.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-green-600 mr-2 mt-1">→</span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Organic Farming?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">🌟 Key Learning Outcomes</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-200 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Master Organic Principles</h4>
                  <p className="text-green-50 text-sm">Understand the core concepts of organic agriculture and sustainable farming</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-200 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Practical Skills</h4>
                  <p className="text-green-50 text-sm">Learn hands-on techniques for composting, pest control, and crop management</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-200 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Problem Solving</h4>
                  <p className="text-green-50 text-sm">Develop skills to diagnose and solve common organic farming challenges</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-200 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">Business Knowledge</h4>
                  <p className="text-green-50 text-sm">Learn marketing, certification, and business aspects of organic farming</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📖 Learning Path</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Foundation</h4>
                  <p className="text-gray-600 text-sm">Start with basic principles and soil health fundamentals</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Practice</h4>
                  <p className="text-gray-600 text-sm">Apply techniques in small-scale trials and experiments</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expansion</h4>
                  <p className="text-gray-600 text-sm">Scale up operations with advanced methods and systems</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-700 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mastery</h4>
                  <p className="text-gray-600 text-sm">Become an expert and share knowledge with others</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🎯 Start Your Organic Farming Journey Today
          </h3>
          <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're a beginner or experienced farmer, our comprehensive resources will help you succeed in organic agriculture. Join thousands of farmers who have transformed their practices and improved their livelihoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-lg">
              Download Free Guide
            </button>
            <button className="px-8 py-3 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg">
              Watch Video Tutorials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
