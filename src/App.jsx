import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import RecentWorks from './components/RecentWorks'
import Services from './components/Services'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <RecentWorks />
        <Services />
      </main>
      <Footer />
    </div>
  )
}
