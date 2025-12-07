const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 90 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 65 },
      { name: "JavaScript", level: 60 },
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      { name: "Exploratory Data Analysis", level: 90 },
      { name: "Data Cleaning", level: 88 },
      { name: "Statistical Analysis", level: 82 },
      { name: "KPI Tracking", level: 85 },
      { name: "Reporting Automation", level: 80 },
    ],
  },
  {
    title: "Visualization",
    skills: [
      { name: "Excel (Pivot Tables, Dashboards)", level: 90 },
      { name: "Plotly", level: 85 },
      { name: "Matplotlib & Seaborn", level: 80 },
      { name: "Tableau", level: 75 },
    ],
  },
  {
    title: "Databases & ML",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQLite", level: 80 },
      { name: "Query Optimization", level: 75 },
      { name: "Time-Series Analysis", level: 72 },
      { name: "Anomaly Detection", level: 70 },
    ],
  },
]

const tools = ["Git", "GitHub", "VS Code", "Postman", "Qoder", "Cursor", "OpenCV"]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Skills</span>
          <h2 className="text-3xl font-bold text-foreground mt-2">Technical Expertise</h2>
          <div className="w-16 h-1 bg-primary mt-4 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <span className="text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
