function Hero() {
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
          <button className="primary-btn">Mint Base Girl NFT</button>
          <button className="secondary-btn">Read Her Story</button>
        </div>
      </div>
      <div className="hero-image-wrap glass-card">
        <img
          src="/images/base-girl-hero.png"
          alt="Base Girl hero placeholder"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
