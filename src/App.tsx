import { useState } from "react";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Transformation from "./components/Transformation";
import MintBox from "./components/MintBox";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(
    null
  );

  return (
    <div className="app">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <Hero onImageClick={(src, alt) => setActiveImage({ src, alt })} />
      <Story />
      <Transformation onImageClick={(src, alt) => setActiveImage({ src, alt })} />
      <MintBox onImageClick={(src, alt) => setActiveImage({ src, alt })} />
      <Roadmap />
      <section className="section final-cta container">
        <h2>Are You Ready to Join Base Girl?</h2>
        <p>
          Mint the symbol of onchain curiosity, Base energy, and builder spirit.
        </p>
        <a className="primary-btn" href="#mint">
          Mint Base Girl
        </a>
      </section>
      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <img src={activeImage.src} alt={activeImage.alt} className="lightbox-image" />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
