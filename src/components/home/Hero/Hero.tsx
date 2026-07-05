import "./styles.scss";

export default function Hero() {
	return (
		<div className="container">
			<section className="hero" id="hero">
				<div className="hero-wrapper">
					<div style={{ textAlign: "center", alignSelf: "flex-start" }}>
						<p className="tenor-sans">ARCHITECTURA & DESIGN</p>
						<h1 className="hero__heading">UŽITEČNOST, PEVNOST A KRÁSA</h1>
						<i className="cormorant-garamond" style={{ fontSize: "1.5rem" }}>
							promyšlené v každém detailu
						</i>
					</div>
					<p className="hero__desc sen">
						Každý projekt je jedinečný, vychází z místa, funkce a zadání.
						Navrhuji architekturu na míru, od první myšlenky až po realizaci.
					</p>
				</div>
				<img className="hero-img" src="/hero.png" alt="" />
			</section>
		</div>
	);
}
