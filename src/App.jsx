import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ScrollProgress,
  BackToTop,
} from "./components";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <ScrollProgress />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Education />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
