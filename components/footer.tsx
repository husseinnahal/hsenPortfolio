import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)]/60 py-12 px-4 sm:px-6 border-t border-[var(--border-default)]">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Hussein <span className="text-accent-gradient">Nahal</span>
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4 lg:w-3/4">
              Full-stack developer passionate about creating exceptional web experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/husseinnahal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10  rounded-full glass flex items-center justify-center text-[var(--accent-500)] hover:text-[var(--accent-700)] transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/hussein-nahal-2011a2343"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-[var(--accent-500)] hover:text-[var(--accent-700)] transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a href="/#about-me" className="hover:text-[var(--accent-400)] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-[var(--accent-400)] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-[var(--accent-400)] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/images/HusseinNahal–FullStackDeveloper.pdf"
                  target="_blank"
                  className="hover:text-[var(--accent-400)] transition-colors"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <div>
                <a
                  href="https://wa.me/96170883675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-500 transition-colors"
                >
                  <Phone size={16} />
                  <span>+961 70883675</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Beirut, Lebanon</span>
              </div>
              <div>
                <a
                  href="mailto:nahalhusssein1000@gmail.com"
                  className="flex items-center gap-2 hover:text-[var(--accent-400)] transition-colors"
                >
                  <Mail size={16} />
                  <span>nahalhusssein1000@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider" style={{margin:"20px"}} />
        <p className="text-center text-[var(--text-tertiary)] text-sm">
          &copy; {new Date().getFullYear()} Hussein Nahal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
