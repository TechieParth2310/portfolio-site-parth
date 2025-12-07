import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Electronics and Communication",
    institution: "Vellore Institute of Technology",
    location: "Vellore",
    period: "2022 - 2026",
    grade: "8.48 CGPA",
    type: "cgpa",
  },
  {
    degree: "Higher Secondary Certificate",
    field: "Class XII",
    institution: "Namo RIMS Junior College",
    location: "Pune",
    period: "2021",
    grade: "93.67%",
    type: "percentage",
  },
  {
    degree: "Secondary School Certificate",
    field: "Class X",
    institution: "Dr. Kakasaheb Purnapatre Madhyamik Vidyalaya",
    location: "Chalisgaon",
    period: "2019",
    grade: "92.20%",
    type: "percentage",
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <span className="text-primary text-sm uppercase tracking-widest font-medium">Education</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">Academic Background</h2>
              <div className="w-16 h-1 bg-primary mt-4" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-muted-foreground mt-1">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Award className="w-4 h-4" />
                      {edu.grade}
                    </div>
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
