import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(128,90,213,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.2),transparent_60%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Reimagine
              </span>{" "}
              your web experience
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Graphene is a next-generation browser with AI-powered information retrieval and seamless browser automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#waitlist" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-center">
                Join Waitlist
              </Link>
              <Link href="/features" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-full transition-all duration-300 border border-white/20 text-center">
                Explore Features
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] w-full">
              {/* Stylized browser mockup with node-based graph */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  {/* Search bar/omnibox */}
                  <div className="flex-grow bg-white/5 rounded-full px-4 py-1.5 text-xs text-white/70 border border-white/10">
                    graphene://launchpad
                  </div>
                </div>
                
                {/* Enhanced Node graph visualization */}
                <div className="h-1/2 w-full bg-black/40 rounded-lg mb-4 p-4 relative">
                  {/* Connection lines SVG - lower z-index */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
                    {/* Purple Research to Blue Projects */}
                    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2" />
                    {/* Green Resources to Blue Projects */}
                    <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="2" />
                    
                    {/* Indigo Articles to Purple Research */}
                    <line x1="60%" y1="15%" x2="25%" y2="25%" stroke="rgba(99, 102, 241, 0.6)" strokeWidth="1.5" />
                    {/* Cyan Notes to Purple Research */}
                    <line x1="15%" y1="80%" x2="25%" y2="25%" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5" />
                    {/* Rose Tasks to Green Resources */}
                    <line x1="90%" y1="60%" x2="75%" y2="75%" stroke="rgba(244, 63, 94, 0.6)" strokeWidth="1.5" />
                    
                    {/* Curved connections */}
                    <path d="M 25% 25% Q 40% 10% 60% 15%" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="1.5" fill="none" />
                    <path d="M 75% 75% Q 90% 80% 90% 60%" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="1.5" fill="none" />
                  </svg>
                  
                  {/* Central Project Node - higher z-index */}
                  <div className="absolute w-20 h-20 bg-blue-600/80 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-opacity-90 shadow-lg shadow-blue-600/30 border border-blue-400/30 z-30">
                    <div className="text-sm font-medium">Projects</div>
                  </div>
                  
                  {/* Primary Nodes - higher z-index than lines */}
                  <div className="absolute w-16 h-16 bg-purple-500/80 rounded-lg top-1/4 left-1/4 flex items-center justify-center text-white text-opacity-90 shadow-lg shadow-purple-500/20 border border-purple-400/30 z-20">
                    <div className="text-xs font-medium">Research</div>
                  </div>
                  <div className="absolute w-16 h-16 bg-green-500/80 rounded-lg bottom-1/4 right-1/4 flex items-center justify-center text-white text-opacity-90 shadow-lg shadow-green-500/20 border border-green-400/30 z-20">
                    <div className="text-xs font-medium">Resources</div>
                  </div>
                  
                  {/* Secondary Nodes - higher z-index than lines */}
                  <div className="absolute w-12 h-12 bg-indigo-500/80 rounded-lg top-[15%] left-[60%] flex items-center justify-center text-white text-opacity-90 shadow-lg shadow-indigo-500/20 border border-indigo-400/30 z-20">
                    <div className="text-[10px] font-medium">Articles</div>
                  </div>
                  <div className="absolute w-10 h-10 bg-cyan-500/80 rounded-lg bottom-[20%] left-[15%] flex items-center justify-center text-white text-opacity-90 shadow-lg shadow-cyan-500/20 border border-cyan-400/30 z-20">
                    <div className="text-[10px] font-medium">Notes</div>
                  </div>
                  <div className="absolute w-10 h-10 bg-rose-500/80 rounded-lg top-[60%] right-[10%] flex items-center justify-center text-white text-opacity-90 shadow-lg shadow-rose-500/20 border border-rose-400/30 z-20">
                    <div className="text-[10px] font-medium">Tasks</div>
                  </div>
                  
                  {/* Particle effects - highest z-index */}
                  <div className="absolute w-2 h-2 bg-purple-500 rounded-full top-[35%] left-[37%] animate-pulse z-40"></div>
                  <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-[48%] left-[50%] animate-ping opacity-75 z-40"></div>
                  <div className="absolute w-2 h-2 bg-green-500 rounded-full bottom-[40%] right-[37%] animate-pulse z-40"></div>
                </div>
                
                {/* AI search interface */}
                <div className="relative">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                      <p className="text-white/90 text-sm">Ask me anything about your browsing session...</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 text-xs text-white/80">
                      <p className="mb-2">Can you summarize the key insights from all the machine learning research papers I've read in the past month?</p>
                      <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mb-2"></div>
                      <p>Based on your recent browsing, here are the key insights:</p>
                      <ul className="list-disc list-inside pl-2 space-y-1 mt-1">
                        <li>Large multimodal models showing improved alignment across modalities</li>
                        <li>Efficient attention mechanisms reducing computational requirements</li>
                        <li>Emerging research on agent-based architectures for complex tasks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
