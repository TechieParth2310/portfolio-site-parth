"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const RESUME_LINK = "https://drive.google.com/file/d/1Tpm6Ks-KTRENh4NDF8JodL1UiCmu-jjA/view?usp=drive_link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary text-sm uppercase tracking-widest font-medium">Hello, I&apos;m</p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">Parth Kothawade</h1>
              <h2 className="text-2xl md:text-3xl text-primary font-medium">Data Analyst</h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              I transform raw datasets into actionable insights through statistical analysis, KPI tracking, and
              visualization. Skilled in building data pipelines and creating automated reporting workflows that drive
              decision-making.
            </p>

            <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Chalisgaon, Maharashtra, India
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                parthkothawade2310@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +91-8329258378
              </span>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/TechieParth2310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/parth-kothawade-1721b8267"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:parthkothawade2310@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30">
                <Image
                  src="/images/my-20photo.jpeg"
                  alt="Parth Kothawade"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
