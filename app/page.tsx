import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Brain, Star, Facebook, Twitter, Instagram, Users, Sparkles } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream via-warm-peach/20 to-romantic-rose/10">
      {/* Hero Section with Couple Background */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Happy couple walking hand in hand at golden hour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange/30 via-warm-peach/40 to-soft-teal/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="w-8 h-8 text-sunset-orange animate-pulse" />
                  <span className="text-sunset-orange font-semibold text-lg">For Couples Ready to Reconnect</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  Rediscover Each Other <span className="text-golden-hour">After the Kids</span> Leave Home
                </h1>
                <p className="text-2xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
                  NestMates uses AI to find perfect local activities tailored to you and your partner's unique love
                  story
                </p>
              </div>

              {/* Email Signup Form */}
              <div className="bg-white/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Start Your Love Renaissance</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email to begin the journey"
                    className="flex-1 h-14 text-lg border-2 border-warm-peach/30 focus:border-sunset-orange focus:ring-sunset-orange rounded-2xl bg-white/80"
                  />
                  <Button className="h-14 px-10 bg-gradient-to-r from-sunset-orange via-warm-coral to-golden-hour hover:from-golden-hour hover:to-sunset-orange text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    Get Early Access ✨
                  </Button>
                </div>
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Image
                        key={i}
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={`Happy couple ${i}`}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 font-medium">Join 2,847+ couples already reconnecting</p>
                </div>
              </div>
            </div>

            {/* Floating Love Elements */}
            <div className="relative hidden lg:block">
              <div className="absolute top-10 right-10 w-24 h-24 bg-romantic-rose/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-32 h-32 bg-golden-hour/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-soft-teal/40 rounded-full blur-xl animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Couple Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with couple cooking together */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Couple cooking together in kitchen"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-warm-cream/90 via-white/85 to-romantic-rose/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-golden-hour mr-3" />
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Designed for Your Love Story</h2>
              <Sparkles className="w-8 h-8 text-golden-hour ml-3" />
            </div>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              After years of putting family first, it's time to put your relationship at the center again. Let us help
              you fall in love all over again.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/90 to-sunset-orange/10 rounded-3xl overflow-hidden backdrop-blur-sm transform hover:scale-105">
              <CardContent className="p-10 text-center relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-sunset-orange/10 rounded-full -mr-10 -mt-10"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-sunset-orange to-warm-coral rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Love Matching</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our AI learns what makes you both smile, laugh, and connect. Get personalized date ideas that reignite
                  your spark.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/90 to-soft-teal/10 rounded-3xl overflow-hidden backdrop-blur-sm transform hover:scale-105">
              <CardContent className="p-10 text-center relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-soft-teal/10 rounded-full -mr-10 -mt-10"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-soft-teal to-soft-teal/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Romantic Local Discovery</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Uncover hidden romantic spots and intimate experiences in your area. From sunset viewpoints to cozy
                  wine tastings.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/90 to-romantic-rose/10 rounded-3xl overflow-hidden backdrop-blur-sm transform hover:scale-105">
              <CardContent className="p-10 text-center relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-romantic-rose/10 rounded-full -mr-10 -mt-10"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-romantic-rose to-warm-peach rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Deeper Connection Insights</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Daily relationship wisdom and conversation starters backed by love science to help you grow closer
                  every day.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Romantic Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with multiple couples */}
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Multiple happy couples at a romantic dinner"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-romantic-rose/20 via-warm-cream/90 to-golden-hour/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-romantic-rose mr-3" />
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Love Stories from Our Community</h2>
              <Users className="w-8 h-8 text-romantic-rose ml-3" />
            </div>
            <p className="text-2xl text-gray-700">
              Real couples sharing their journey of rediscovery and renewed romance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Testimonial 1 */}
            <Card className="bg-white/95 backdrop-blur-lg border-0 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-golden-hour/10 rounded-full -mr-8 -mt-8"></div>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-golden-hour fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 mb-8 leading-relaxed text-lg italic font-medium">
                  "After 28 years of marriage, we thought we knew everything about each other. NestMates helped us
                  discover new passions and brought back the butterflies we felt when we first met!"
                </p>
                <div className="flex items-center">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=70&width=70"
                      alt="Happy couple - Sarah and Mike"
                      width={70}
                      height={70}
                      className="rounded-full mr-4 border-4 border-warm-peach/30"
                    />
                    <Heart className="absolute -bottom-1 -right-1 w-6 h-6 text-sunset-orange fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Sarah & Mike</p>
                    <p className="text-gray-600">Married 28 years, Phoenix</p>
                    <p className="text-sm text-sunset-orange font-medium">Rediscovered through pottery classes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white/95 backdrop-blur-lg border-0 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-soft-teal/10 rounded-full -mr-8 -mt-8"></div>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-golden-hour fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 mb-8 leading-relaxed text-lg italic font-medium">
                  "The empty nest felt so quiet until NestMates showed us salsa dancing nearby. Now we dance in our
                  kitchen every morning and our house is full of laughter and music again."
                </p>
                <div className="flex items-center">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=70&width=70"
                      alt="Happy couple - Linda and Robert"
                      width={70}
                      height={70}
                      className="rounded-full mr-4 border-4 border-soft-teal/30"
                    />
                    <Heart className="absolute -bottom-1 -right-1 w-6 h-6 text-soft-teal fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Linda & Robert</p>
                    <p className="text-gray-600">Married 32 years, Seattle</p>
                    <p className="text-sm text-soft-teal font-medium">Found love through dancing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white/95 backdrop-blur-lg border-0 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-romantic-rose/10 rounded-full -mr-8 -mt-8"></div>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-golden-hour fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 mb-8 leading-relaxed text-lg italic font-medium">
                  "We were stuck in a routine of Netflix and takeout. NestMates introduced us to moonlit hiking trails,
                  couples cooking classes, and romantic weekend getaways that made us feel like newlyweds again."
                </p>
                <div className="flex items-center">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=70&width=70"
                      alt="Happy couple - Maria and James"
                      width={70}
                      height={70}
                      className="rounded-full mr-4 border-4 border-romantic-rose/30"
                    />
                    <Heart className="absolute -bottom-1 -right-1 w-6 h-6 text-romantic-rose fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Maria & James</p>
                    <p className="text-gray-600">Married 25 years, Austin</p>
                    <p className="text-sm text-romantic-rose font-medium">Adventure brought them closer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Couple watching sunset together"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange/80 via-romantic-rose/70 to-golden-hour/80"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            Your Love Story's Next Chapter Starts Now
          </h2>
          <p className="text-2xl text-white/95 mb-12 drop-shadow-md leading-relaxed">
            Don't let another day pass in routine. Rediscover the magic that brought you together.
          </p>
          <Button className="h-16 px-12 bg-white text-sunset-orange hover:bg-warm-cream font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110">
            Begin Your Love Renaissance ❤️
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=400&width=1920" alt="Couples silhouettes" fill className="object-cover" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-sunset-orange mr-3" />
                <h3 className="text-3xl font-bold text-sunset-orange">NestMates</h3>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md text-lg">
                Helping empty nester couples rediscover their relationship through AI-powered romantic experiences and
                meaningful connections.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-romantic-rose transition-colors text-lg">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-romantic-rose transition-colors text-lg">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-romantic-rose transition-colors text-lg">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-xl">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-romantic-rose transition-colors transform hover:scale-110"
                >
                  <Facebook className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-romantic-rose transition-colors transform hover:scale-110"
                >
                  <Twitter className="w-8 h-8" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-romantic-rose transition-colors transform hover:scale-110"
                >
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg">© 2025 NestMates.ai - Rediscover Love Together ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
