import TitleBar from './components/TitleBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import InteractiveTerminal from './components/InteractiveTerminal'
import Contact from './components/Contact'
import StatusBar from './components/StatusBar'

export default function App() {
  return (
    <>
      <div className="scanlines" aria-hidden="true" />
      <TitleBar />
      <main className="container">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <InteractiveTerminal />
      </main>
      <StatusBar />
    </>
  )
}
