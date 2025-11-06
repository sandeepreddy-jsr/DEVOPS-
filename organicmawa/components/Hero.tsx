export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-green-600">Organic Mawa</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your Complete Knowledge Hub for Organic Cultivation, Seed Preparation, and Natural Fertilizer Production
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Empowering farmers and enthusiasts with sustainable farming practices, traditional wisdom, and modern organic techniques for a healthier tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("education")}
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Learning
            </button>
            <button
              onClick={() => scrollToSection("cultivation")}
              className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Methods
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Organic Cultivation</h3>
            <p className="text-gray-600">Learn sustainable farming techniques that nurture the soil and produce healthy crops naturally.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Seed Preparation</h3>
            <p className="text-gray-600">Master the art of seed selection, treatment, and preparation for optimal germination and growth.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">♻️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Fertilizers</h3>
            <p className="text-gray-600">Create nutrient-rich organic fertilizers from natural materials for thriving, chemical-free gardens.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
