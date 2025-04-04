"use client";

import { useState } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(128,90,213,0.2),transparent_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  Join the Waitlist
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Be among the first to experience the future of browsing with Graphene. Sign up now and we'll notify you when we're ready to launch.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow bg-white/5 text-white border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:transform-none disabled:hover:scale-100"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing
                      </span>
                    ) : "Join Waitlist"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center max-w-md mx-auto bg-white/5 rounded-lg p-6 border border-green-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
                <p className="text-white/80">
                  Thank you for joining our waitlist. We'll notify you when Graphene is ready for you to try.
                </p>
              </div>
            )}
            
            <div className="mt-12 flex flex-col md:flex-row justify-center md:items-center gap-8 text-center md:text-left">
              <div className="flex-1 max-w-xs mx-auto md:mx-0">
                <div className="text-purple-400 font-semibold mb-2">Early Access</div>
                <p className="text-white/70">Get exclusive early access to the Graphene browser.</p>
              </div>
              <div className="flex-1 max-w-xs mx-auto md:mx-0">
                <div className="text-blue-400 font-semibold mb-2">Founder Updates</div>
                <p className="text-white/70">Receive development updates directly from our team.</p>
              </div>
              <div className="flex-1 max-w-xs mx-auto md:mx-0">
                <div className="text-green-400 font-semibold mb-2">Feature Input</div>
                <p className="text-white/70">Help shape Graphene with your feedback and suggestions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
