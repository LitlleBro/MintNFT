import { useMemo, useState } from "react";

const MAX_QUANTITY = 10;

function MintBox() {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const totalPreview = useMemo(() => quantity, [quantity]);

  const handleMinus = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handlePlus = () => {
    setQuantity((prev) => Math.min(MAX_QUANTITY, prev + 1));
  };

  const handleMockMint = () => {
    setMessage(
      "Mint preview completed. Blockchain connection is not enabled in this demo."
    );
  };

  return (
    <section className="section container">
      <div className="mint-grid">
        <article className="glass-card nft-preview-card">
          <img
            src="/images/base-girl-nft.png"
            alt="Base Girl NFT placeholder"
            className="nft-preview-image"
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
            <div className="quantity-control">
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

          <button className="primary-btn mint-btn" onClick={handleMockMint}>
            Mint ({totalPreview})
          </button>

          {message && <p className="mint-message">{message}</p>}
        </article>
      </div>
    </section>
  );
}

export default MintBox;
