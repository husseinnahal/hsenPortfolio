import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 py-8 px-4 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-4">Hussein Nahhal</h3>
            <p className="text-gray-400 text-sm mb-4 lg:w-3/4">
              Full-stack developer passionate about creating exceptional web experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/husseinnahal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/hussein-nahal-2011a2343"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>

            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>

              <li>
                <a href="/#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                  <a
                    href="/images/husseinNahal.pdf" 
                    target="_blank" 
                    className="hover:text-white transition-colors"
                    rel="noopener noreferrer"
                  >
                     Resume

                  </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
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
                  <span>Ansar, Lebanon</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="mailto:nahalhusssein1000@gmail.com"
                    className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                  >
                    <Mail size={16} />
                    <span>nahalhusssein1000@gmail.com</span>
                  </a>
                </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Hussein Nahal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
