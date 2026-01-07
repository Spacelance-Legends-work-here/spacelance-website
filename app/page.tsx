import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from './components/TestimonialsSection'

export default function Home() {
  return (
    <div className='scroll-smooth'>
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
    </div>
  )
}
