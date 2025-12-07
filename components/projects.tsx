import Image from "next/image"
import { ExternalLink, Github, Database, Brain, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "IoT Data Analytics Dashboard",
    description: "Real-time analytics platform for sensor insights and anomaly detection",
    icon: Activity,
    images: [
      "/images/IOT_1.png",
      "/images/IOT_2.png",
      "/images/IOT_3.png",
    ],
    highlights: [
      "Processed 50k+ sensor readings to analyse trends, usage patterns, and anomalies",
      "Applied z-score & rolling-window methods to detect abnormal readings, improving anomaly accuracy by 30%",
      "Built ETL workflows using Pandas, reducing data processing time by 25%",
      "Created interactive Plotly dashboards visualising KPIs, time-series trends, and anomaly insights",
    ],
    tech: ["Flask", "MySQL", "NumPy", "Pandas", "Plotly"],
    github: "https://github.com/TechieParth2310/IOT_ANALYTICS",
    live: null,
  },
  {
    title: "Hospital Management System",
    description: "Data workflows for medical records & scheduling insights",
    icon: Database,
    images: [
      "/images/H1.png",
      "/images/H2.png",
      "/images/H3.png",
      "/images/H4.png",
      "/images/H5.png",
    ],
    highlights: [
      "Designed structured tables for appointments, user data, and records, ensuring clean and consistent datasets",
      "Analyzed appointment demand patterns and reduced booking conflicts using real-time availability logic",
      "Developed dashboards summarising daily bookings, user activity, and workflow KPIs",
      "Built automated reminders, improving patient/doctor workflow efficiency by 50%",
    ],
    tech: ["Flask", "SQLite", "Python"],
    github: null,
    live: "https://mediflow-dbn1.onrender.com/",
  },
  {
    title: "AI-Based Anomaly Detection in Surveillance Videos",
    description: "Visual data analysis for detecting abnormal activities",
    icon: Brain,
    images: [
      "/images/ML1.png",
      "/images/ML2.png",
    ],
    highlights: [
      "Processed 630+ videos, extracting motion-based features via OpenCV & NumPy",
      "Applied MobileNetV2 + Bi-LSTM, achieving 93% anomaly detection accuracy",
      "Generated risk scores and summary insights for flagged incidents to support security monitoring",
    ],
    tech: ["Python", "Flask", "OpenCV", "TensorFlow", "NumPy"],
    github: "https://github.com/TechieParth2310/video-classification-womens-safety",
    live: null,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Projects</span>
          <h2 className="text-3xl font-bold text-foreground mt-2">Featured Work</h2>
          <div className="w-16 h-1 bg-primary mt-4 mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in data analytics, machine learning, and building end-to-end
            solutions that deliver real business value.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-secondary/30 border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl"
            >
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4 bg-background/50">
                  {project.images.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-background text-muted-foreground rounded-full border border-border shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-border text-foreground hover:bg-secondary bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}