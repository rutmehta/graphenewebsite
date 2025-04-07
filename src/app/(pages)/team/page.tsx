import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import Image from "next/image";

const teamMembers = [
  {
    name: "Rut",
    role: "Co-Founder",
    experience: "BAIT/CS/Math @Rutgers\n\
Ex- AI intern @T-Mobile\n\
Ex- MLE intern @WINLAB\n\
Ex- Service Design intern @NASA\n\
Co-founder of SageTech",
    image: "/founders/Rut.png"
  },
  {
    name: "Roy",
    role: "Co-Founder",
    experience: "CS @ Rutgers\nPrev Innovation Intern @Mondelez International",
    image: "/founders/Roy.png"
  },
  {
    name: "Deep",
    role: "Co-Founder",
    image: "/founders/Deep.png",
    experience: "CS @ Rutgers\nMBS @Rutgers"
  },
  {
    name: "Avi",
    role: "Co-Founder",
    experience: "Previous SWE Intern at Greenlit (Techstars 2024)",
    image: "/founders/Avi.png"
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
                The Team Behind Graphene
              </span>
            </h1>
            <p className="text-lg text-white/80">
              We're a group of students who saw the frustration that comes with using browsers and believe browsing can be both useful and productive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/5">
                <div className="relative w-full aspect-square mb-6 bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-white/70">{member.experience}</p>
              </div>
            ))}
          </div>


        </div>
      </main>
      <Footer />
    </div>
  );
}