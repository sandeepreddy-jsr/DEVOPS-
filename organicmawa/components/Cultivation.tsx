export default function Cultivation() {
  const methods = [
    {
      title: "Soil Preparation",
      icon: "🌍",
      description: "Building healthy, living soil is the foundation of organic farming.",
      techniques: [
        "Deep plowing to improve soil aeration and drainage",
        "Adding organic matter like compost and green manure",
        "Maintaining soil pH between 6.0-7.5 for optimal nutrient availability",
        "Crop rotation to prevent soil depletion and disease buildup"
      ]
    },
    {
      title: "Natural Pest Control",
      icon: "🐛",
      description: "Protect crops without harmful chemicals using nature's own solutions.",
      techniques: [
        "Neem oil spray for controlling aphids and mites",
        "Companion planting (marigolds with vegetables)",
        "Introducing beneficial insects like ladybugs",
        "Garlic and chili pepper spray as natural repellents"
      ]
    },
    {
      title: "Water Management",
      icon: "💧",
      description: "Efficient irrigation techniques for sustainable water use.",
      techniques: [
        "Drip irrigation to minimize water waste",
        "Mulching to retain soil moisture",
        "Rainwater harvesting and storage systems",
        "Early morning watering to reduce evaporation"
      ]
    },
    {
      title: "Crop Rotation",
      icon: "🔄",
      description: "Systematic crop rotation maintains soil fertility and breaks pest cycles.",
      techniques: [
        "Legumes → Leafy vegetables → Root crops → Fruiting crops",
        "3-4 year rotation cycle for best results",
        "Never plant same family crops consecutively",
        "Include nitrogen-fixing crops in rotation"
      ]
    }
  ];

  return (
    <section id="cultivation" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Organic Cultivation Methods
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover time-tested and modern organic farming techniques that work in harmony with nature
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methods.map((method, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-100">
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{method.title}</h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              <ul className="space-y-3">
                {method.techniques.map((technique, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Key Principles of Organic Cultivation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">🌿 Work with Nature</h4>
              <p className="text-green-50">Enhance natural processes rather than fighting against them</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔬 Build Soil Health</h4>
              <p className="text-green-50">Focus on feeding the soil, not just the plants</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🌈 Promote Biodiversity</h4>
              <p className="text-green-50">Diverse ecosystems are more resilient and productive</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">♻️ Close Nutrient Cycles</h4>
              <p className="text-green-50">Recycle organic matter back into the soil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
