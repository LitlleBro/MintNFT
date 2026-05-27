const roadmapItems = [
  {
    title: "Discover Base",
    text: "Bella makes her first bridge and enters the Base ecosystem."
  },
  {
    title: "Swap & Explore",
    text: "She starts using DeFi, testing dApps, and collecting NFTs."
  },
  {
    title: "Deploy & Build",
    text: "Bella deploys her first smart contract and learns the builder side of crypto."
  },
  {
    title: "Run a Node",
    text: "She raises her own Base node and connects deeper to the network."
  },
  {
    title: "Become Base Girl",
    text: "The quiet accountant transforms into an onchain superhero."
  }
];

function Roadmap() {
  return (
    <section className="section container">
      <h2>Base Girl Activity Path</h2>
      <div className="roadmap-list">
        {roadmapItems.map((item, index) => (
          <article className="glass-card roadmap-item" key={item.title}>
            <span className="step-index">{index + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
