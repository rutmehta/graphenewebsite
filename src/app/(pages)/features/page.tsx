import { FaBrain, FaProjectDiagram, FaSearch, FaRobot, FaBolt, FaSyncAlt } from 'react-icons/fa';
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const features = [
  {
    icon: <FaProjectDiagram className="h-12 w-12 text-purple-500" />,
    title: "Node-Based Navigation",
    description: "Navigate visually with an intuitive graph of connected sites, replacing the outdated tab system with a spatial model of your browsing session.",
    details: [
      "Visually group related content",
      "Easily navigate between connected sites",
      "Spatial organization reduces cognitive load",
      "Never lose track of what you're working on"
    ]
  },
  {
    icon: <FaBrain className="h-12 w-12 text-blue-500" />,
    title: "AI-Powered Retrieval",
    description: "Ask natural language questions about anything you've seen in your browser and get instant, accurate answers from your browsing history.",
    details: [
      "Search across your entire browsing history",
      "Natural language understanding of content",
      "Contextual awareness of your projects",
      "Finds information you forgot where you saw"
    ]
  },
  {
    icon: <FaRobot className="h-12 w-12 text-indigo-500" />,
    title: "Browser Automation",
    description: "Let AI assistants interact with any website, even without API access, creating universal automation possibilities across the entire web.",
    details: [
      "No website-specific integrations needed",
      "Automate repetitive tasks across any site",
      "AI understands web interfaces natively",
      "Create custom workflows spanning multiple sites"
    ]
  }
];

const additionalFeatures = [
  {
    icon: <FaSearch className="h-8 w-8 text-cyan-500" />,
    title: "Context-Aware Search",
    description: "Find anything within your browsing sessions with AI that understands content and your intent."
  },
  {
    icon: <FaBolt className="h-8 w-8 text-amber-500" />,
    title: "Blazing Fast Performance",
    description: "Engineered from the ground up for speed and efficiency with modern web technologies."
  },
  {
    icon: <FaSyncAlt className="h-8 w-8 text-green-500" />,
    title: "Seamless Synchronization",
    description: "Your workspace syncs across all your devices for a consistent browsing experience everywhere."
  }
];

// Helper function to extract color from className string
const extractColor = (className: string): string => {
  const colorClass = className.split(' ').find((c: string) => c.includes('text-'));
  return colorClass ? colorClass.replace('text-', 'var(--tw-text-opacity, 1) * var(--tw-') + ')' : '';
};

// Helper function to extract background color
const extractBgColor = (className: string): string => {
  const colorClass = className.split(' ').find((c: string) => c.includes('text-'));
  return colorClass ? colorClass.replace('text-', 'rgba(var(--tw-') + ')' : '';
};

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Features
              </span>
            </h1>
            <p className="text-lg text-white/80">
              Graphene reimagines what a browser can do with cutting-edge AI and a thoughtfully designed user experience.
            </p>
          </div>
          
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                  <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 mb-4 font-semibold border border-white/10" style={{ color: extractColor(feature.icon.props.className) }}>
                    Core Feature
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {feature.title}
                  </h2>
                  <p className="text-white/80 mb-6 text-lg">
                    {feature.description}
                  </p>
                  <ul className="space-y-3 bg-black/30 rounded-xl p-5 border border-white/10">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70">
                        <span style={{ color: extractColor(feature.icon.props.className) }} className="mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`relative h-[300px] md:h-[400px] ${index % 2 === 1 ? "order-2 lg:order-1" : ""}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center p-12 shadow-2xl border border-white/10 backdrop-blur-xl overflow-hidden">
                    {feature.icon}
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-xl" style={{ backgroundColor: extractBgColor(feature.icon.props.className) }}></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-xl" style={{ backgroundColor: extractBgColor(feature.icon.props.className) }}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Additional Features
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/5">
                  <div className="bg-black/30 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}