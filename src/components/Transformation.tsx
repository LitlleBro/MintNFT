type TransformationProps = {
  onImageClick: (src: string, alt: string) => void;
};

function Transformation({ onImageClick }: TransformationProps) {
  const bellaImageSrc = "/images/bella-accountant.png";
  const baseGirlImageSrc = "/images/base-girl-after.png";

  return (
    <section className="section container">
      <h2>From Ledger to Legend</h2>
      <div className="transformation-grid">
        <article className="glass-card transform-card">
          <img
            src={bellaImageSrc}
            alt="Bella the Accountant"
            className="transform-image zoomable-image"
            onClick={() => onImageClick(bellaImageSrc, "Bella the Accountant")}
          />
          <h3>Bella the Accountant</h3>
          <p>
            A quiet office worker surrounded by reports, spreadsheets, and
            financial documents. She was shy, careful, and precise - but inside,
            she wanted something bigger.
          </p>
        </article>
        <article className="glass-card transform-card">
          <img
            src={baseGirlImageSrc}
            alt="Base Girl"
            className="transform-image zoomable-image"
            onClick={() => onImageClick(baseGirlImageSrc, "Base Girl")}
          />
          <h3>Base Girl</h3>
          <p>
            A confident onchain superhero in a sleek blue suit, carrying the
            energy of Base, ready to bridge, mint, swap, deploy, and build.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Transformation;
