import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold text-lg">Parth Kothawade</p>
            <p className="text-muted-foreground text-sm mt-1">Data Analyst & Developer</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/TechieParth2310"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/parth-kothawade-1721b8267"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:parthkothawade2310@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p className="flex items-center gap-1 justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in 2025
            </p>
            <p className="mt-1">© All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
