import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="py-20 relative">
      {/* Background decorations */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(128,90,213,0.15),transparent_60%)]"></div>
      </div> */}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              How Graphene Works
            </span>
          </h2>
          <p className="text-lg text-white/80">
            We've reimagined the browser from the ground up to solve two critical problems.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* Problem/Solution 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 text-purple-400 font-semibold border border-white/10">
                Problem 1
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Information Overload
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                The web contains vast information, but finding what you need—especially something you've seen before—is frustratingly difficult. Traditional search doesn't understand context or your browsing history.
              </p>
              <div className="bg-black/30 rounded-xl p-5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">Current Limitations:</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>No way to search across your personal browsing history with natural language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Information spread across dozens of tabs and windows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Context switching disrupts productivity</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-grow"></div>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center">
                    <div className="relative grid grid-cols-3 grid-rows-4 gap-2 w-full max-w-lg p-4">
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 1
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 2
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 3
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 4
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 5
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 6
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 7
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 8
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 9
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 10
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 11
                      </div>
                      <div className="w-full h-16 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-white/30 text-xs">
                        Tab 12
                      </div>
                      
                      {/* Centered message box */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-black rounded-lg px-5 py-3 shadow-lg text-center z-10 w-56 max-w-full border border-white">
                        <p className="font-semibold text-sm">Where was that article I read last week?</p>
                      </div>
                      
                      {/* Frustrated expression indicator */}
                      <div className="absolute -top-3 -right-3 bg-red-500/80 rounded-full w-8 h-8 flex items-center justify-center animate-pulse border-2 border-white">
                        <span className="text-white text-xs">😩</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Solution 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-grow"></div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="bg-black/40 rounded-lg mb-4 p-4 h-1/2 flex items-center justify-center relative">
                      <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="bg-purple-500/40 rounded-lg p-3 flex items-center justify-center text-white text-xs h-20">
                          Research
                        </div>
                        <div className="bg-blue-500/40 rounded-lg p-3 flex items-center justify-center text-white text-xs h-20">
                          Project A
                        </div>
                        <div className="bg-green-500/40 rounded-lg p-3 flex items-center justify-center text-white text-xs h-20">
                          Personal
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        <p className="text-white/90 text-sm">Find articles about quantum computing from last week...</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 text-xs text-white/80">
                        <p className="mb-2">I found these results from your browsing history:</p>
                        <div className="space-y-2">
                          <div className="p-2 rounded bg-white/5 border border-white/10">
                            <p className="font-medium">Quantum Computing Breakthroughs - Read last Wednesday</p>
                          </div>
                          <div className="p-2 rounded bg-white/5 border border-white/10">
                            <p className="font-medium">Practical Applications of Quantum Algorithms - Read Friday</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 text-green-400 font-semibold border border-white/10">
                Solution 1
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                AI-Powered Information Retrieval
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                Graphene indexes everything you browse and makes it searchable using natural language. Just ask a question about something you've seen, and Graphene finds it instantly.
              </p>
              <div className="bg-black/30 rounded-xl p-5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">Graphene Advantages:</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Natural language search across your entire browsing history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Organized by project and context, not by tabs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>AI-powered summaries and insights from your browsing data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Problem/Solution 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 text-purple-400 font-semibold border border-white/10">
                Problem 2
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Limited Browser Automation
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                AI assistants can't interact with browser interfaces without specialized integrations for each website, limiting their potential to help with web-based tasks.
              </p>
              <div className="bg-black/30 rounded-xl p-5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">Current Limitations:</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Each website requires custom integration for AI automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Most web interfaces remain inaccessible to AI assistants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✖</span>
                    <span>Repetitive tasks still require manual human intervention</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-grow"></div>
                  </div>
                  
                  <div className="flex-grow bg-white/5 rounded-lg p-4 relative">
                    <div className="flex flex-col h-full items-center justify-center">
                      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-2">
                        <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/30 text-xs">
                          Website 1
                        </div>
                        <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/30 text-xs">
                          Website 2
                        </div>
                        <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/30 text-xs">
                          Website 3
                        </div>
                        <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/30 text-xs">
                          Website 4
                        </div>
                      </div>
                      <div className="relative z-10 bg-black/70 rounded-lg p-4 text-center max-w-xs border border-white/10">
                        <p className="text-white mb-2">I'd like to help you with those websites, but I can't interact with any of them.</p>
                        <div className="text-red-400 text-sm">No API or integration available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-grow"></div>
                  </div>
                  
                  <div className="flex-grow bg-white/5 rounded-lg p-4 relative">
                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-2">
                      <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/90 text-xs">
                        <div className="bg-blue-500/30 p-2 rounded">
                          ✓ Interacting
                        </div>
                      </div>
                      <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/90 text-xs">
                        <div className="bg-blue-500/30 p-2 rounded">
                          ✓ Interacting
                        </div>
                      </div>
                      <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/90 text-xs">
                        <div className="bg-blue-500/30 p-2 rounded">
                          ✓ Interacting
                        </div>
                      </div>
                      <div className="bg-white/5 rounded border border-white/10 flex items-center justify-center text-white/90 text-xs">
                        <div className="bg-blue-500/30 p-2 rounded">
                          ✓ Interacting
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 bg-black/70 rounded-lg p-4 text-center max-w-xs mx-auto border border-blue-500/30">
                      <p className="text-white mb-2">I'll complete those tasks for you across all these websites!</p>
                      <div className="text-green-400 text-sm">Graphene makes any website accessible to AI</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 text-green-400 font-semibold border border-white/10">
                Solution 2
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Universal Browser Automation
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                Graphene builds MCP server-like capabilities for each website automatically, so AI can interact with any web interface without requiring developers to implement special integrations.
              </p>
              <div className="bg-black/30 rounded-xl p-5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-2">Graphene Advantages:</h4>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>AI assistants can interact with any website out of the box</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>No need for website-specific integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Automate repetitive tasks across the entire web</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
