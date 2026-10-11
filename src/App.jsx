import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Experience, Skills, Projects, Contact, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
