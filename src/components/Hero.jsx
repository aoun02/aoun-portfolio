import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

// Each line is a list of [tokenType, text] pairs for simple syntax colouring.
const code = [
  [['an', '@RestController']],
  [['kw', 'public class '], ['ty', 'AounRaza'], ['p', ' {']],
  [],
  [['p', '  '], ['ty', 'String '], ['id', 'role'], ['p', ' = '], ['st', '"Full Stack Engineer"'], ['p', ';']],
  [['p', '  '], ['ty', 'String '], ['id', 'based'], ['p', ' = '], ['st', '"Karachi, PK"'], ['p', ';']],
  [],
  [['p', '  '], ['ty', 'List'], ['p', '<'], ['ty', 'String'], ['p', '> '], ['id', 'stack'], ['p', ' = '], ['ty', 'List'], ['p', '.'], ['fn', 'of'], ['p', '(']],
  [['p', '      '], ['st', '"Spring Boot"'], ['p', ', '], ['st', '"Kafka"'], ['p', ', '], ['st', '".NET 8"'], ['p', ',']],
  [['p', '      '], ['st', '"React"'], ['p', ', '], ['st', '"Flutter"'], ['p', ', '], ['st', '"AKS"'], ['p', ');']],
  [],
  [['p', '  '], ['an', '@GetMapping'], ['p', '('], ['st', '"/now"'], ['p', ')']],
  [['p', '  '], ['kw', 'public '], ['ty', 'String '], ['fn', 'currentlyBuilding'], ['p', '() {']],
  [['p', '    '], ['kw', 'return '], ['st', '"Fintech card platform"'], ['p', ';']],
  [['p', '  }']],
  [['p', '}']],
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__prompt mono">
            <span className="green">~/aoun02</span> <span className="muted">$</span> whoami
            <span className="caret" />
          </p>
          <h1 className="hero__name">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>
          <h2 className="hero__role">
            {profile.role} <span className="muted">·</span> Fintech <span className="muted">·</span> Cloud
          </h2>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">View my work</a>
            <a className="btn btn--ghost" href="#contact">Get in touch</a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </div>
        </div>

        <div className="editor" aria-label="Java class describing Aoun Raza">
          <div className="editor__bar">
            <span className="dot dot--red" /><span className="dot dot--yellow" /><span className="dot dot--green" />
            <span className="editor__tab mono">AounRaza.java</span>
          </div>
          <pre className="editor__code mono">
            {code.map((line, i) => (
              <div className="editor__line" key={i} style={{ animationDelay: `${150 + i * 70}ms` }}>
                <span className="editor__ln">{i + 1}</span>
                <span>
                  {line.map(([type, text], j) => (
                    <span key={j} className={`tk-${type}`}>{text}</span>
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  )
}
