import Hero from "./components/Hero";
import Story from "./components/Story";
import Transformation from "./components/Transformation";
import MintBox from "./components/MintBox";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <Hero />
      <Story />
      <Transformation />
      <MintBox />
      <Roadmap />
      <section className="section final-cta container">
        <h2>Are You Ready to Join Base Girl?</h2>
        <p>
          Mint the symbol of onchain curiosity, Base energy, and builder spirit.
        </p>
        <button className="primary-btn">Mint Base Girl</button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
