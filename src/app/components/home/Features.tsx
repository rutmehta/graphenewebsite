import { BookOpenText, Brain, Network, NotebookPen } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <NotebookPen className="h-5 w-5" />,
      title: "Note Taking",
      description: "Be able to bring back classical textbook learning and annotate on any webpage along with letting AI organize your notes."
    },
    {
      icon: <BookOpenText className="h-5 w-5" />,
      title: "Information Aggregation",
      description: "Store snippets of information collected whenever copying to clipboard along with the source of the information."
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: "Network History",
      description: "Organizes your history as a network in order to visualize your train of throughts as you research."
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI-First Browser Architecture",
      description: "Allow your AI agents to automate your workflow by interacting with your browser seamlessly, enabling efficient task execution and enhanced productivity."
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
              Designed with Human Thoughts in Mind
            </span>
          </h2>
          <p className="text-lg text-white/80">
            Every feature has been carefully considered to enhance your browsing without the frustration of a browser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
