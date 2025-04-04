import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white/80 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur-sm opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">G</div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">Graphene</span>
            </Link>
            <p className="text-white/70 max-w-md">
              Reimagining web navigation with AI-powered information retrieval and browser automation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition">About</Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-white transition">Team</Link>
              </li>
              <li>
                <Link href="/about#careers" className="text-white/70 hover:text-white transition">Careers</Link>
              </li>
              <li>
                <Link href="/about#press" className="text-white/70 hover:text-white transition">Press</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-white/70 hover:text-white transition">Features</Link>
              </li>
              <li>
                <Link href="/#waitlist" className="text-white/70 hover:text-white transition">Join Waitlist</Link>
              </li>
              <li>
                <Link href="/about#faq" className="text-white/70 hover:text-white transition">FAQ</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition">Privacy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Graphene. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
