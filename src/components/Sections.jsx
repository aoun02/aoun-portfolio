import { profile, stats, education, experience, skills, projects } from '../data/profile'
import Reveal from './Reveal'
import { GitHubIcon, LinkedInIcon, MailIcon, ExternalIcon } from './Icons'

function SectionTitle({ num, children }) {
  return (
    <Reveal as="h2" className="section__title">
      <span className="section__num mono">0{num}.</span> {children}
      <span className="section__line" />
    </Reveal>
  )
}

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle num={1}>About me</SectionTitle>
        <div className="about__grid">
          <Reveal className="about__text">
            <p>
              I&apos;m a <strong>Full Stack Engineer</strong> based in {profile.location}. Right now I work at{' '}
              <span className="accent">Simplifi</span>, building a B2B fintech platform that powers debit card
              services for business clients across the MENA region.
            </p>
            <p>
              Most of my day is spent on <strong>Java / Spring Boot microservices</strong> that talk over{' '}
              <strong>Kafka</strong>, React features on the frontend, and Flutter apps on mobile. I also own the path
              to production — Docker images, Helm charts and CI/CD pipelines deployed to Azure Kubernetes across Dev,
              UAT and Prod, watched over with Grafana and Lens.
            </p>
            <p>
              Before that, at <span className="accent">Sofcom</span>, I modernised a legacy .NET 4.7.2 Web Forms
              system into .NET 8 Web APIs and fixed security findings from VAPT testing.
            </p>
            <div className="edu card">
              <span className="edu__label mono">education</span>
              <strong>{education.degree}</strong>
              <span>{education.school}</span>
              <span className="muted">{education.year} · {education.grade}</span>
            </div>
          </Reveal>

          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} className="stat card" delay={i * 90}>
                <span className="stat__value gradient-text">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle num={2}>Where I&apos;ve worked</SectionTitle>
        <ol className="timeline">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} className="timeline__item" delay={i * 120}>
              <span className={`timeline__dot ${job.current ? 'is-current' : ''}`} />
              <div className="card job">
                <div className="job__head">
                  <div>
                    <h3>{job.role} <span className="accent">@ {job.company}</span></h3>
                    <p className="muted mono job__meta">{job.period} · {job.location}</p>
                  </div>
                  {job.current && <span className="badge">Current</span>}
                </div>
                <ul className="job__points">
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="chips">
                  {job.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle num={3}>Skills &amp; tools</SectionTitle>
        <div className="skills">
          {skills.map((s, i) => (
            <Reveal key={s.group} className={`card skill skill--${i % 6}`} delay={(i % 3) * 90}>
              <h3 className="skill__title">{s.group}</h3>
              <div className="chips">
                {s.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle num={4}>Things I&apos;ve built</SectionTitle>
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} className="card project" delay={i * 90}>
              <div className="project__top">
                <span className="project__folder mono">{'{ }'}</span>
                <div className="project__links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`}>
                      <GitHubIcon />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live site`}>
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              <div className="chips">
                {p.tech.map((t) => <span className="chip chip--plain" key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
          <Reveal className="card project project--soon" delay={projects.length * 90}>
            <span className="project__folder mono">{'>_'}</span>
            <h3 className="project__title">More on the way</h3>
            <p className="project__desc">
              A .NET 8 MVC application is being built and will appear here soon.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact__box card">
          <p className="mono accent">05. What&apos;s next?</p>
          <h2 className="contact__title">Let&apos;s build something together</h2>
          <p className="contact__text">
            Have a role, a project or just want to talk about microservices and fintech? My inbox is always open.
          </p>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <MailIcon /> Say hello
          </a>
          <div className="contact__links">
            <a href={profile.github} target="_blank" rel="noreferrer"><GitHubIcon /> github.com/aoun02</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
            <a href={`mailto:${profile.email}`}><MailIcon /> {profile.email}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner mono">
        <span>
          Designed &amp; Built by{' '}
          <a href={profile.github} target="_blank" rel="noreferrer" className="accent">{profile.name}</a>
        </span>
        <span className="muted">© {new Date().getFullYear()} · React + Vite · Hosted on Vercel</span>
      </div>
    </footer>
  )
}
