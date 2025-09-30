import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <div className="bg-background text-foreground font-main">
      <Navbar />
      <Hero />
      <Features/>
      <HowItWorks/>
    </div>
  )
}

export default App
