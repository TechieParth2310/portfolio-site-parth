import { Building2, Calendar } from "lucide-react"

const experiences = [
  {
    title: "GIS Data Intern",
    company: "Techlive Solutions",
    companyDesc: "",
    period: "May 2025 - June 2025",
    location: "Mohali",
    achievements: [
      <>
        Cleaned and organized <strong className="font-semibold text-foreground">100+ spatial and tabular data records</strong>, improving dataset consistency for internal use.
      </>,
      <>
        Supported creation of <strong className="font-semibold text-foreground">10+ basic maps</strong> to help visualize project data and geographic patterns.
      </>,
      <>
        Assisted in validating data entries, reducing small formatting and accuracy issues by <strong className="font-semibold text-foreground">15–20%</strong>.
      </>,
      <>
        Helped prepare and update <strong className="font-semibold text-foreground">weekly project files</strong>, ensuring up-to-date information for team reviews.
      </>,
      <>
        Performed routine data filtering, formatting, and reporting tasks that saved the team <strong className="font-semibold text-foreground">4–5 hours per week</strong>.
      </>,
    ],
    skills: ["Data Cleaning", "QGIS/Mapping", "Data Validation", "Reporting", "ETL"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <span className="text-primary text-sm uppercase tracking-widest font-medium">Experience</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">Work History</h2>
              <div className="w-16 h-1 bg-primary mt-4" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-primary" />

                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        {exp.companyDesc && <span className="text-muted-foreground">• {exp.companyDesc}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}{exp.location ? `, ${exp.location}` : ""}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
