import BackgroundElements from './components/BackgroundElements';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import WhyScreenFree from './components/WhyScreenFree';
import KitSection from './components/KitSection';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="text-gray-800 bg-[#FAFAFA] relative text-lg">
      <BackgroundElements />
      <Navigation />
      <Hero />
      <SocialProof />
      <WhyScreenFree />
      <KitSection />
      <Impact />
      <Testimonials />
      <About />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
