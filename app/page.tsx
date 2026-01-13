const experiences = [
  {
    title: "Chief Technology Officer",
    company: "SeatStock",
    period: "2023 - Present",
    description:
      "Built the entire platform from scratch, creating a secure student ticket exchange now operating on 5+ campuses with 1,200+ tickets traded. Led technical architecture and development.",
  },
  {
    title: "Software Engineer Intern",
    company: "Collins Aerospace",
    period: "2022 - 2023",
    description:
      "Developed software solutions in the aerospace industry, working on systems requiring high reliability and performance.",
  },
  {
    title: "Research Assistant",
    company: "Kliemann Laboratories",
    period: "2021 - 2023",
    description:
      "Conducted social cognitive neuroscience research with a focus on data science and analysis using Python, Pandas, and Matplotlib.",
  },
  {
    title: "Software Developer",
    company: "PeachPay",
    period: "2021 - 2022",
    description:
      "Contributed to the development of one-click checkout solutions, improving e-commerce conversion rates.",
  },
];

const projects = [
  {
    title: "SeatStock",
    description:
      "A secure student ticket exchange platform that eliminates scam risks. Won 1st place at Global Student Entrepreneur Awards (GSEA) Pitch competition.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    link: "https://seatstock.com",
  },
  {
    title: "Spotify Song Recommendations",
    description:
      "A recommendation engine using cosine similarity to suggest songs based on audio features from the Spotify API.",
    technologies: ["TypeScript", "Spotify API", "Machine Learning"],
    link: "https://github.com/brandonegg/song-recommendations",
  },
  {
    title: "Iowa ATR",
    description:
      "University of Iowa auditory training resource platform for hearing research and rehabilitation.",
    technologies: ["TypeScript", "React", "Web Audio API"],
    link: "https://github.com/brandonegg/uiowaATR",
  },
  {
    title: "tempProbe",
    description:
      "ESP32-based wireless temperature monitoring system with a Flutter mobile app and Twilio SMS alerts.",
    technologies: ["C++", "Flutter", "ESP32", "Twilio"],
    link: "https://github.com/brandonegg/tempProbe",
  },
];

const skills = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Java", "C", "C++"],
  },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "Docker", "Linux", "Flutter"] },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <main className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
        {/* Hero Section */}
        <section className="mb-24">
          <h1 className="text-foreground mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Brandon Egger
          </h1>
          <h2 className="text-accent mb-6 text-xl font-medium md:text-2xl">
            Software Engineer & CTO at SeatStock
          </h2>
          <p className="text-muted mb-8 max-w-xl text-lg leading-relaxed">
            I build accessible, high-performance web applications. Currently
            leading technical development at SeatStock, where we&apos;re
            transforming how students buy and sell event tickets.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/brandonegg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-egger/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href="mailto:me@brandonegger.com"
              className="text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <EmailIcon className="h-6 w-6" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-24">
          <h3 className="text-accent mb-8 text-sm font-semibold tracking-widest uppercase">
            About
          </h3>
          <div className="text-muted space-y-4">
            <p>
              I&apos;m a software engineer based in Iowa City with a passion for
              building products that solve real problems. I graduated from the{" "}
              <span className="text-foreground">University of Iowa</span> with a
              B.S. in Computer Science & Engineering and a minor in Economics,
              maintaining a 3.96 GPA on the Dean&apos;s and President&apos;s
              List.
            </p>
            <p>
              My journey spans from neuroscience research labs to aerospace
              systems to founding a startup. I thrive at the intersection of
              complex technical challenges and user-focused design, whether
              that&apos;s building recommendation engines, IoT monitoring
              systems, or scalable web platforms.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or working on side
              projects that push my skills in new directions.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h3 className="text-accent mb-8 text-sm font-semibold tracking-widest uppercase">
            Experience
          </h3>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <h4 className="text-foreground font-semibold">{exp.title}</h4>
                  <span className="text-muted text-sm">{exp.period}</span>
                </div>
                <p className="text-accent mb-2">{exp.company}</p>
                <p className="text-muted">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-24">
          <h3 className="text-accent mb-8 text-sm font-semibold tracking-widest uppercase">
            Projects
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group hover:border-accent/50 rounded-lg border border-slate-700/50 bg-slate-800/30 p-6 transition-all hover:bg-slate-800/50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-foreground font-semibold">
                    {project.title}
                  </h4>
                  <ArrowIcon className="text-muted group-hover:text-accent h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-muted mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-accent/10 text-accent rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <h3 className="text-accent mb-8 text-sm font-semibold tracking-widest uppercase">
            Skills
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="text-foreground mb-3 font-semibold">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-muted rounded-full border border-slate-700 px-3 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-muted border-t border-slate-700/50 pt-8 text-center text-sm">
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent"
            >
              Tailwind CSS
            </a>
            . Deployed on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent"
            >
              Vercel
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
