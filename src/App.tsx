import { Navbar } from './components/ui/Navbar'
import { Hero } from './components/sections/Hero'
import { PhilosophyStrip } from './components/sections/PhilosophyStrip'
import { FocusAreas } from './components/sections/FocusAreas'
import { GrowthSystems } from './components/sections/GrowthSystems'
import { Work } from './components/sections/Work'
import { About } from './components/sections/About'
import { WhyWork } from './components/sections/WhyWork'
import { Philosophy } from './components/sections/Philosophy'
import { CTABlock } from './components/sections/CTABlock'
import { StartProject } from './components/sections/StartProject'
import { Footer } from './components/ui/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />
      <main>
        <Hero />
        <PhilosophyStrip />
        <FocusAreas />
        <GrowthSystems />
        <Work />
        <About />
        <WhyWork />
        <Philosophy />
        <CTABlock />
        <StartProject />
      </main>
      <Footer />
    </div>
  )
}
