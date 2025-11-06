export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">🌱 OrganicMawa</h3>
            <p className="text-gray-400 text-sm">
              Empowering farmers with knowledge and sustainable practices for a healthier, greener future.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-green-400 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Our Mission</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Success Stories</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Blog</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Cultivation Guide</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Seed Preparation</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Fertilizer Methods</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Video Tutorials</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-green-400 cursor-pointer transition-colors">Facebook</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">YouTube</li>
              <li className="hover:text-green-400 cursor-pointer transition-colors">WhatsApp Community</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 OrganicMawa.com - All rights reserved
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span className="hover:text-green-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-green-400 cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-green-400 cursor-pointer transition-colors">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
