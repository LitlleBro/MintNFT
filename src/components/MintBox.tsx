import { useMemo, useState } from "react";

const MAX_QUANTITY = 10;

type MintBoxProps = {
  onImageClick: (src: string, alt: string) => void;
};

function MintBox({ onImageClick }: MintBoxProps) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [minted, setMinted] = useState(false);
  const [showFirework, setShowFirework] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const nftImageSrc = "/images/base-girl-nft.png";
  const confettiPieces = useMemo(
    () => {
      const sides = ["left", "right", "bottom"] as const;
      return Array.from({ length: 84 }, (_, index) => {
        const source = sides[index % sides.length];
        const fromBottom = source === "bottom";
        const fromLeft = source === "left";

        return {
          id: index,
          source,
          delay: `${Math.random() * 0.28}s`,
          duration: `${1.7 + Math.random() * 1.1}s`,
          x: fromBottom
            ? `${-220 + Math.random() * 440}px`
            : fromLeft
              ? `${120 + Math.random() * 520}px`
              : `${-120 - Math.random() * 520}px`,
          y: fromBottom
            ? `${-180 - Math.random() * 460}px`
            : `${-70 - Math.random() * 320}px`,
          rotate: `${180 + Math.random() * 420}deg`,
          start:
            source === "left"
              ? `${14 + Math.random() * 70}%`
              : source === "right"
                ? `${14 + Math.random() * 70}%`
                : `${10 + Math.random() * 80}%`
        };
      });
    },
    []
  );

  const totalPreview = useMemo(() => quantity, [quantity]);

  const handleMinus = () => {
    if (minted) return;
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handlePlus = () => {
    if (minted) return;
    setQuantity((prev) => Math.min(MAX_QUANTITY, prev + 1));
  };

  const handleMockMint = () => {
    if (minted) return;
    setMinted(true);
    setShowFirework(true);
    setShowConfetti(true);
    setTimeout(() => setShowFirework(false), 1400);
    setTimeout(() => setShowConfetti(false), 3400);
    setMessage(
      "Mint preview completed. Blockchain connection is not enabled in this demo."
    );
  };

  return (
    <section className="section container" id="mint">
      {showConfetti && (
        <div className="confetti-layer" aria-hidden="true">
          {confettiPieces.map((piece) => (
            <span
              key={piece.id}
              className={`confetti-piece ${piece.source}`}
              style={
                {
                  "--start": piece.start,
                  animationDelay: piece.delay,
                  animationDuration: piece.duration,
                  "--x": piece.x,
                  "--y": piece.y,
                  "--rotate": piece.rotate
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
      <div className="mint-grid">
        <article className="glass-card nft-preview-card">
          <img
            src={nftImageSrc}
            alt="Base Girl NFT"
            className="nft-preview-image zoomable-image"
            onClick={() => onImageClick(nftImageSrc, "Base Girl NFT")}
          />
          <h3>Base Girl NFT Preview</h3>
        </article>

        <article className="glass-card mint-panel">
          <h2>Mint the Base Girl NFT</h2>
          <p>
            The Base Girl NFT is a tribute to every onchain believer, builder,
            trader, minter, and dreamer waiting for the next chapter of Base.
          </p>
          <p>
            This collection contains 100,000 identical NFTs - one symbol, one
            story, one community.
          </p>
          <p>Mint your Base Girl NFT and become part of the legend.</p>

          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Collection Supply</span>
              <strong>100,000</strong>
            </div>
            <div className="stat-item">
              <span className="stat-label">Network</span>
              <strong>Base</strong>
            </div>
            <div className="stat-item">
              <span className="stat-label">NFT Type</span>
              <strong>Collectible</strong>
            </div>
            <div className="stat-item">
              <span className="stat-label">Status</span>
              <strong>Mock Mint Preview</strong>
            </div>
          </div>

          <div className="mint-controls">
            <span className="control-label">Quantity</span>
            <div className={`quantity-control ${minted ? "quantity-locked" : ""}`}>
              <button onClick={handleMinus} aria-label="Decrease quantity">
                -
              </button>
              <span>{quantity}</span>
              <button onClick={handlePlus} aria-label="Increase quantity">
                +
              </button>
            </div>
            <p className="mint-note">Max per mock mint: {MAX_QUANTITY}</p>
          </div>

          {!minted ? (
            <div className="mint-action-wrap">
              <button className="primary-btn mint-btn mint-btn-glow" onClick={handleMockMint}>
                Mint ({totalPreview})
              </button>
              {showFirework && (
                <div className="firework" aria-hidden="true">
                  <span>✨</span>
                  <span>🎆</span>
                  <span>✨</span>
                  <span>🎇</span>
                  <span>✨</span>
                </div>
              )}
            </div>
          ) : (
            <p className="minted-badge">Minted for this wallet: 1/1</p>
          )}

          {message && <p className="mint-message">{message}</p>}
        </article>
      </div>
    </section>
  );
}

export default MintBox;
