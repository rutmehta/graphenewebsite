import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              About Graphene
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* First grey box */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <p className="mb-8 text-white/80">
                Graphene is reimagining what a browser can be in the age of AI. We're building a next-generation web browser that solves two critical problems:
              </p>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                      Our Mission
                    </span>
                  </h2>
                  <p className="text-white/80">
                    Our mission is to transform how people interact with the web by creating a browser that understands your needs, remembers what you've seen, and can take action on your behalf across any website.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                      Our Vision
                    </span>
                  </h2>
                  <p className="text-white/80">
                    We envision a future where navigating the web is intuitive, contextual, and powered by AI — eliminating information overload and making the entire internet accessible to automation.
                  </p>
                </div>
              </div>
            </div>

            {/* Second grey box */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-10 border border-white/10">
              <h2 className="text-3xl font-bold mb-8 text-center" id="faq">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                  Frequently Asked Questions
                </span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                      When will Graphene be available?
                    </span>
                  </h3>
                  <p className="text-white/80">
                    We're currently in private alpha. Join our waitlist to be notified when we open access.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                      What platforms will Graphene support?
                    </span>
                  </h3>
                  <p className="text-white/80">
                    Initially, we're launching on macOS, with Windows and Linux support coming soon after.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                      Is my browsing data private?
                    </span>
                  </h3>
                  <p className="text-white/80">
                    Absolutely. Your browsing data stays local to your device. The AI features work on your machine, so your sensitive information never leaves your control.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                      How is Graphene different from other browsers?
                    </span>
                  </h3>
                  <p className="text-white/80">
                    Unlike traditional browsers that organize information in tabs, Graphene uses a node-based graph visualization. We also have built-in AI capabilities that make all websites automatable without requiring special integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}