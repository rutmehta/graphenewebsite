import Image from "next/image";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Former AI research lead with 10+ years experience in browser technologies.",
    imagePlaceholder: true
  },
  {
    name: "Maya Rodriguez",
    role: "CTO",
    bio: "ML expert specialized in information retrieval systems and natural language processing.",
    imagePlaceholder: true
  },
  {
    name: "David Chen",
    role: "Head of Engineering",
    bio: "Browser architecture specialist with experience at leading tech companies.",
    imagePlaceholder: true
  },
  {
    name: "Sarah Kim",
    role: "Lead Product Designer",
    bio: "UI/UX visionary focused on creating intuitive web navigation patterns.",
    imagePlaceholder: true
  }
];

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                Our Team
              </span>
            </h1>
            <p className="text-lg text-white/80">
              Meet the innovators behind Graphene. We're a team of engineers, designers, and AI researchers passionate about reimagining the web browser.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/5">
                <div className="relative w-full aspect-square mb-6 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-lg overflow-hidden">
                  {member.imagePlaceholder ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white/20">{member.name.split(' ').map(n => n[0]).join('')}</div>
                    </div>
                  ) : (
                    <Image 
                      src={`/images/team/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-white/70">{member.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-white">Join Our Team</h2>
            <p className="text-white/80 mb-6">
              We're always looking for exceptional talent to help us build the future of web browsing.
            </p>
            <a 
              href="/about#careers" 
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}