export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full"></div>
            <span className="text-2xl font-bold text-gray-800">NestMates</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-orange-500">Features</a>
            <a href="#about" className="text-gray-600 hover:text-orange-500">About</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Rediscover Each Other
            <span className="block text-orange-500">After the Kids Leave Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            NestMates uses AI to find perfect local activities tailored to you and your partner's interests. 
            Reconnect, explore, and fall in love all over again.
          </p>
          
          {/* Email Signup */}
          <div className="mb-8">
            <a 
              href="http://eepurl.com/jiImeY" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Get Early Access →
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            Join 500+ couples already on the waitlist • No spam, unsubscribe anytime
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            How NestMates Helps You Reconnect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI-Powered Matching</h3>
              <p className="text-gray-600 text-lg">
                Smart recommendations based on your unique preferences, interests, and relationship goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Local Discovery</h3>
              <p className="text-gray-600 text-lg">
                Find hidden gems and exciting events in your area that you never knew existed.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Relationship Growth</h3>
              <p className="text-gray-600 text-lg">
                Daily insights backed by relationship science to help you grow closer together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            What Couples Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 text-lg mb-6 italic">
                "After 25 years of raising kids, we forgot how to be just us. NestMates helped us rediscover the spark we thought was gone forever."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">SM</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Sarah & Mike</p>
                  <p className="text-gray-500 text-sm">Empty nesters, Denver</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 text-lg mb-6 italic">
                "The AI recommendations were spot-on. We discovered amazing local events we never would have found on our own."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JL</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Jennifer & Luis</p>
                  <p className="text-gray-500 text-sm">Recently empty nesters, Austin</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 text-lg mb-6 italic">
                "We were like roommates before NestMates. Now we're lovers again, trying new adventures every week."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">DK</span>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">David & Karen</p>
                  <p className="text-gray-500 text-sm">Married 28 years, Phoenix</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-orange-500 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Rediscover Your Love Story?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join hundreds of couples already on their journey to reconnection.
          </p>
          
          <a 
            href="http://eepurl.com/jiImeY" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-500 px-10 py-4 rounded-lg text-xl font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Get Early Access Now →
          </a>
          
          <p className="text-orange-100 text-sm mt-4">
            No spam, unsubscribe anytime • Privacy first approach
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full"></div>
                <span className="text-2xl font-bold">NestMates</span>
              </div>
              <p className="text-gray-400 text-lg">
                Helping empty nester couples rediscover their love through AI-powered local experiences.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                <li><a href="/contact" className="hover:text-white">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 NestMates.ai - Rediscover Love Together</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
