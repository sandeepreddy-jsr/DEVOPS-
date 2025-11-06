export default function Fertilizer() {
  const fertilizers = [
    {
      name: "Compost",
      icon: "🗑️",
      color: "from-amber-50 to-orange-50",
      border: "border-amber-200",
      ingredients: ["Kitchen waste", "Dry leaves", "Cow dung", "Garden waste"],
      method: "Layer green and brown materials in 3:1 ratio. Keep moist and turn every 2 weeks. Ready in 2-3 months.",
      benefits: "Rich in nutrients, improves soil structure, increases water retention"
    },
    {
      name: "Vermicompost",
      icon: "🪱",
      color: "from-green-50 to-emerald-50",
      border: "border-green-200",
      ingredients: ["Earthworms", "Organic waste", "Cow dung", "Shredded paper"],
      method: "Create bedding, add worms, feed kitchen scraps weekly. Harvest after 2-3 months when material is dark and crumbly.",
      benefits: "High in nutrients, contains beneficial microbes, excellent for seedlings"
    },
    {
      name: "Jeevamrut",
      icon: "🥛",
      color: "from-blue-50 to-cyan-50",
      border: "border-blue-200",
      ingredients: ["10kg cow dung", "10L cow urine", "2kg jaggery", "2kg pulse flour", "Handful of soil"],
      method: "Mix all ingredients in 200L water. Stir daily for 7 days. Dilute 1:10 before application.",
      benefits: "Promotes microbial activity, improves soil fertility, cost-effective"
    },
    {
      name: "Panchagavya",
      icon: "🐄",
      color: "from-yellow-50 to-amber-50",
      border: "border-yellow-200",
      ingredients: ["Cow dung", "Cow urine", "Milk", "Curd", "Ghee", "Jaggery", "Banana"],
      method: "Mix cow products, ferment for 15 days stirring twice daily. Dilute 3% for foliar spray.",
      benefits: "Growth promoter, increases immunity, improves crop quality"
    },
    {
      name: "Green Manure",
      icon: "🌿",
      color: "from-lime-50 to-green-50",
      border: "border-lime-200",
      ingredients: ["Dhaincha", "Sunhemp", "Cowpea", "Cluster beans"],
      method: "Sow green manure crops, allow to grow 45-60 days, then plow into soil before flowering.",
      benefits: "Adds nitrogen, improves soil structure, suppresses weeds"
    },
    {
      name: "Neem Cake",
      icon: "🌳",
      color: "from-teal-50 to-green-50",
      border: "border-teal-200",
      ingredients: ["Neem seed cake", "Water"],
      method: "Apply 250-500 kg per acre or make liquid fertilizer by soaking in water for 24 hours.",
      benefits: "Pest repellent, slow-release nitrogen, improves soil health"
    }
  ];

  return (
    <section id="fertilizer" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Organic Fertilizer Preparation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn to create nutrient-rich organic fertilizers that nourish your soil and plants naturally
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {fertilizers.map((fertilizer, index) => (
            <div key={index} className={`bg-gradient-to-br ${fertilizer.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 ${fertilizer.border}`}>
              <div className="text-5xl mb-4">{fertilizer.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{fertilizer.name}</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                <ul className="space-y-1">
                  {fertilizer.ingredients.map((ingredient, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Method:</h4>
                <p className="text-sm text-gray-700">{fertilizer.method}</p>
              </div>

              <div className="bg-white/50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Benefits:</h4>
                <p className="text-xs text-gray-700">{fertilizer.benefits}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Organic Fertilizer Application Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-semibold mb-2">Timing</h4>
              <p className="text-sm text-green-50">Apply during soil preparation and at regular intervals during crop growth</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl mb-2">📏</div>
              <h4 className="font-semibold mb-2">Quantity</h4>
              <p className="text-sm text-green-50">Use 5-10 tons of compost per acre depending on soil condition</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold mb-2">Application</h4>
              <p className="text-sm text-green-50">Mix thoroughly with soil or apply as top dressing around plants</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl mb-2">💧</div>
              <h4 className="font-semibold mb-2">Watering</h4>
              <p className="text-sm text-green-50">Water immediately after application for better nutrient absorption</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-amber-50 border-2 border-amber-200 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">💡</span>
            Pro Tips for Organic Fertilizer Success
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <p className="text-gray-700">Always use well-decomposed organic matter to avoid nitrogen depletion</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <p className="text-gray-700">Maintain proper C:N ratio (25-30:1) for optimal decomposition</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <p className="text-gray-700">Store organic fertilizers in cool, dry place away from direct sunlight</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <p className="text-gray-700">Combine different organic fertilizers for balanced nutrition</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <p className="text-gray-700">Test soil regularly to adjust fertilizer application rates</p>
            </div>
            <div className="flex items-start">
              <span className="text-green-600 font-bold mr-3">✓</span>
              <p className="text-gray-700">Avoid over-application which can lead to nutrient imbalance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
