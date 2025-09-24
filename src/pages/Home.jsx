import React from 'react'
import StarBackgroud from '../components/StarBackgroud'
import { Navbar } from '../components/Navbar'
import { HeroSection} from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Fouter } from '../components/Fouter'

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto"> 
        <StarBackgroud/>
        <Navbar/>

        <main className="flex-1 flex items-center justify-center">
          <div className="space-y-20 w-full max-w-6xl px-4">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </main>
      </div>

      <Fouter/>  
    </div>
  )
}

export default Home
