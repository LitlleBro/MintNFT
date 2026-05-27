type HeroProps = {
  onImageClick: (src: string, alt: string) => void;
};

function Hero({ onImageClick }: HeroProps) {
  const imageSrc = "/images/base-girl-hero.png";
  const imageAlt = "Base Girl hero";

  return (
    <section className="section hero container" id="hero">
      <div className="hero-content glass-card">
        <p className="eyebrow">BASE GIRL NFT COLLECTION</p>
        <h1>Meet Base Girl</h1>
        <h3>From quiet accountant to onchain superhero.</h3>
        <p>
          Bella Blue was just a shy accountant working behind spreadsheets,
          invoices, and endless reports. But one day, while working close to the
          Coinbase ecosystem, she discovered Base - and everything changed.
        </p>
        <div className="button-row">
          <a className="primary-btn" href="#mint">
            Mint Base Girl NFT
          </a>
          <a className="secondary-btn" href="#story">
            Read Her Story
          </a>
        </div>
      </div>
      <div className="hero-image-wrap glass-card">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="hero-image zoomable-image"
          onClick={() => onImageClick(imageSrc, imageAlt)}
        />
      </div>
    </section>
  );
}

export default Hero;
