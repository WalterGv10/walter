import Hero from './components/Hero'
import WhoAmI from './components/WhoAmI'
import Ideology from './components/Ideology'
import Pillars from './components/Pillars'
import Projects from './components/Projects'
import Process from './components/Process'
import Territory from './components/Territory'
import CTA from './components/CTA'

function App() {
  return (
    <main className="bg-background min-h-screen text-white overflow-hidden selection:bg-primary/30 selection:text-primary">
      <Hero />
      <WhoAmI />
      <Ideology />
      <Pillars />
      <Projects />
      <Process />
      <Territory />
      <CTA />
    </main>
  )
}

export default App
