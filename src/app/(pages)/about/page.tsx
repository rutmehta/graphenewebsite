import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              About Graphene
            </span>
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p>
              Graphene is reimagining what a browser can be in the age of AI. We're building a next-generation web browser that solves two critical problems:
            </p>
            
            <h2>Our Mission</h2>
            <p>
              Our mission is to transform how people interact with the web by creating a browser that understands your needs, remembers what you've seen, and can take action on your behalf across any website.
            </p>
            
            <h2>Our Vision</h2>
            <p>
              We envision a future where navigating the web is intuitive, contextual, and powered by AI — eliminating information overload and making the entire internet accessible to automation.
            </p>
            
            <h2 id="faq">Frequently Asked Questions</h2>
            
            <h3>When will Graphene be available?</h3>
            <p>
              We're currently in private alpha. Join our waitlist to be notified when we open access.
            </p>
            
            <h3>What platforms will Graphene support?</h3>
            <p>
              Initially, we're launching on macOS, with Windows and Linux support coming soon after.
            </p>
            
            <h3>Is my browsing data private?</h3>
            <p>
              Absolutely. Your browsing data stays local to your device. The AI features work on your machine, so your sensitive information never leaves your control.
            </p>
            
            <h3>How is Graphene different from other browsers?</h3>
            <p>
              Unlike traditional browsers that organize information in tabs, Graphene uses a node-based graph visualization. We also have built-in AI capabilities that make all websites automatable without requiring special integrations.
            </p>
            
            <h2 id="careers">Careers</h2>
            <p>
              We're building a team of exceptional engineers, designers, and AI researchers who are passionate about creating the future of web browsing.
            </p>
            <p>
              Check back soon for open positions or reach out directly if you're passionate about our mission.
            </p>
            
            <h2 id="press">Press</h2>
            <p>
              For press inquiries, please contact press@graphenebrowser.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}