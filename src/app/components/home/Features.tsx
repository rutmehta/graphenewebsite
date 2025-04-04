import Image from 'next/image';
import { 
  FaBrain, 
  FaProjectDiagram, 
  FaSearch, 
  FaRobot, 
  FaBolt, 
  FaSyncAlt 
} from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaProjectDiagram className="h-8 w-8 text-purple-500" />,
      title: "Node-Based Navigation",
      description: "Navigate with an intuitive graph-based visualization of your web session instead of traditional tabs."
    },
    {
      icon: <FaBrain className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Retrieval",
      description: "Find information from your browsing history using natural language queries across any website you've visited."
    },
    {
      icon: <FaRobot className="h-8 w-8 text-indigo-500" />,
      title: "Browser Automation",
      description: "Let AI agents interact with web elements to automate tasks without requiring website-specific integrations."
    },
    {
      icon: <FaSearch className="h-8 w-8 text-cyan-500" />,
      title: "Context-Aware Search",
      description: "Search within your projects and sessions with AI that understands the content and your intent."
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

  return (
    <section id="features" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(128,90,213,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.15),transparent_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Powerful Features
            </span>
          </h2>
          <p className="text-lg text-white/80">
            Graphene reimagines what a browser can do with cutting-edge AI and a thoughtfully designed user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
    </section>
  );
}
