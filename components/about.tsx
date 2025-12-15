import { Target, TrendingUp, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Section Header */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <span className="text-primary text-sm uppercase tracking-widest font-medium">About</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">Who I Am</h2>
              <div className="w-16 h-1 bg-primary mt-4" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a <span className="text-foreground font-medium">Data Analyst & Backend Developer</span> pursuing B.Tech in
              Electronics and Communication at <span className="text-primary font-medium">VIT Vellore</span> with a CGPA
              of 8.48. My passion lies at the intersection of data and technology, where I transform complex datasets
              into meaningful stories and build scalable systems that drive business decisions.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              With hands-on experience in <span className="text-foreground font-medium">Python, SQL, Node.js, and PostgreSQL</span>, I
              specialize in data cleaning, backend API development, database design, and automation. I&apos;ve built
              real-time analytics platforms, created ETL workflows, developed robust database schemas, and designed APIs that deliver
              measurable impact.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                <Target className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-foreground font-semibold mb-2">Full-Stack Thinker</h3>
                <p className="text-muted-foreground text-sm">
                  From data insights to backend systems—designing end-to-end solutions
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-foreground font-semibold mb-2">Impact Focused</h3>
                <p className="text-muted-foreground text-sm">
                  Delivered 40% reduction in manual effort through automation and database optimization
                </p>
              </div>
              <div className="p-6 bg-secondary/50 rounded-lg border border-border">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-foreground font-semibold mb-2">Fast Learner</h3>
                <p className="text-muted-foreground text-sm">
                  Quick to adapt and implement new technologies and development paradigms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
