export default function SeedPreparation() {
  return (
    <section id="seeds" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seed Preparation Techniques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proper seed preparation is crucial for successful germination and healthy plant growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">🔍</span>
              Seed Selection
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Choose Quality Seeds</h4>
                <p className="text-gray-600">Select plump, uniform seeds free from damage, disease, or pest infestation. Avoid shriveled or discolored seeds.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Heirloom & Open-Pollinated</h4>
                <p className="text-gray-600">Prefer heirloom varieties that can be saved and replanted, maintaining genetic diversity and traditional traits.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Local Adaptation</h4>
                <p className="text-gray-600">Choose varieties adapted to your local climate, soil conditions, and growing season for best results.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="text-3xl mr-3">🧪</span>
              Seed Treatment Methods
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Water Soaking</h4>
                <p className="text-gray-600">Soak seeds in clean water for 6-12 hours to soften seed coat and speed up germination.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Neem Treatment</h4>
                <p className="text-gray-600">Treat seeds with neem oil solution (5ml per liter) to protect against fungal diseases and pests.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Cow Urine Treatment</h4>
                <p className="text-gray-600">Dilute cow urine (1:10 ratio) and soak seeds for 30 minutes as a natural growth promoter and disease preventive.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Step-by-Step Seed Preparation Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-700">1</div>
              <h4 className="font-semibold text-gray-900 mb-2">Selection</h4>
              <p className="text-gray-600 text-sm">Choose healthy, viable seeds from reliable sources</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-700">2</div>
              <h4 className="font-semibold text-gray-900 mb-2">Cleaning</h4>
              <p className="text-gray-600 text-sm">Remove debris, damaged seeds, and foreign matter</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-700">3</div>
              <h4 className="font-semibold text-gray-900 mb-2">Treatment</h4>
              <p className="text-gray-600 text-sm">Apply organic treatments for disease protection</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-green-700">4</div>
              <h4 className="font-semibold text-gray-900 mb-2">Drying</h4>
              <p className="text-gray-600 text-sm">Dry seeds in shade before storage or sowing</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md border border-amber-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">🌡️</span>
              Priming
            </h4>
            <p className="text-gray-600 text-sm mb-3">Pre-germination technique to enhance seedling vigor</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Soak in water for specific duration</li>
              <li>• Drain and keep moist for 24-48 hours</li>
              <li>• Sow when radicle just emerges</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md border border-purple-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">🦠</span>
              Bio-Priming
            </h4>
            <p className="text-gray-600 text-sm mb-3">Inoculate seeds with beneficial microorganisms</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Use Trichoderma or Pseudomonas</li>
              <li>• Enhances disease resistance</li>
              <li>• Improves nutrient uptake</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl shadow-md border border-rose-100">
            <h4 className="font-bold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">📦</span>
              Storage
            </h4>
            <p className="text-gray-600 text-sm mb-3">Proper storage maintains seed viability</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Cool, dry place (below 15°C)</li>
              <li>• Airtight containers</li>
              <li>• Label with variety and date</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
