import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Hero from "@/components/home/Hero/Hero";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { type Metadata } from "next";
import AnimatedTxt from "@/components/AnimatedTxt/AnimatedTxt";
import CopyBtn from "@/components/CopyBtn/CopyBtn";
import "./Home.scss";

const reference = [
	{
		title: "RODINNÉ DOMY",
		desc: "Každý dům začíná jinak — jiným pozemkem, jinou rodinou, jiným způsobem života. Mým úkolem není vtlačit vás do hotového konceptu, ale navrhnout dům, který funguje přesně pro vás: dispozičně, technicky i vizuálně. Řeším i věci, které vidíte až za pět let, správné orientování ke světovým stranám, nenápadné detaily, které z domu dělají domov. Složité požadavky beru jako výzvu, ne komplikaci.",
		imgSrc: "/project-img/Praha.png",
		type: "STUDIE / Praha 2025",
	},
	{
		title: "REZIDENČNÍ BYDLENÍ",
		desc: "Rezidenční lokality mají svá vlastní pravidla, nestačí navrhnout hezké a kvalitní domy, ale vymyslet logickou a funkční infrastrukturu. Každý projekt řeším jako celek, od urbanistického konceptu až po detaily, které sousedství drží pohromadě. Výsledkem není řada domů vedle sebe, ale prostředí, ve kterém se lidé rádi usadí. Součástí návrhu je vždy řešení dopravy, zeleně a napojení na stávající zástavbu.",
		imgSrc: "/project-img/01.png",
		type: "Stavební povolení / Káranice 2025",
	},
	{
		title: "BYTOVÉ DOMY",
		desc: "Moderní bydlení respektující charakter lokality. Architektura založená na proporcích a kvalitních materiálech.",
		imgSrc: "/project-img/Deluxe.png",
		type: "Stavební povolení / Pozlovice 2026",
	},
	{
		title: "OBČANSKÁ VYBAVENOST",
		desc: "Moderní restaurace pro slavnostní příležitosti. Prostor, kde se architektura stává součástí zážitku.",
		imgSrc: "/project-img/Deluxe.png",
		type: "STUDIE / Ukrajina 2020",
	},
];

const services = [
	{
		title: "ARCHITEKTONICKÁ STUDIE",
		desc: "Koncepční návrh stavby",
		list: [
			"architektonický koncept a variantní řešení",
			"varianty dispozičního a hmotového řešení",
			"kapacitní a objemová studie",
			"základní konstrukční a materiálový koncept",
			"základní 3D model a vizualizace",
			"prověření souladu s ÚP dokumentací",
		],
	},
	{
		title: "PROJEKT PRO POVOLENÍ STAVBY",
		desc: "Dokumentace pro projednání a povolení záměru",
		list: [
			"kompletní architektonicko-stavební řešení",
			"koordinace profesních částí projektu",
			"základní technická a provozní řešení stavby",
			"posouzení vlivů stavby dle požadavků úřadů",
			"podklady pro projednání s úřady",
			"zajištění povolení stavby “inženýring”",
		],
	},
];

export const metadata: Metadata = {
	title: "Kristián Jankó – architekt a projektant pozemních staveb",
	description:
		"Architektonické studie a projekty pro povolení staveb. Kristián Jankó navrhuje nadčasovou a technicky promyšlenou architekturu s osobním přístupem ke klientovi.",
	keywords: [
		"Kristián Jankó",
		"architekt",
		"projektant",
		"pozemní stavby",
		"architektonická studie",
		"projekt pro stavební povolení",
		"rodinné domy",
		"bytové domy",
	],
	authors: [{ name: "Kristián Jankó" }],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "cs_CZ",
		url: "/",
		siteName: "Kristián Jankó",
		title: "Kristián Jankó – architekt a projektant pozemních staveb",
		description:
			"Architektonické studie a projekty pro povolení staveb. Nadčasová a technicky promyšlená architektura s osobním přístupem ke klientovi.",
		images: [
			{
				// FIXME:
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Kristián Jankó – architektura a projektování staveb",
			},
		],
	},
};

export default function Home() {
	return (
		<>
			<CustomCursor />
			<main className="home">
				<Hero />
				<section
					className="sen"
					style={{
						textAlign: "center",
						maxWidth: "1200px",
						margin: "100px auto",
					}}
				>
					<h2 className="section__heading">
						STAVBA NENÍ JEN O OBRÁZCÍCH A VÝKRESECH
					</h2>
					<p>
						Každý projekt řeším od první myšlenky až po realizovatelný detail s
						důrazem na funkčnost, estetiku a dlouhodobou udržitelnost. Výsledkem
						je architektura, která obstojí v čase
					</p>
				</section>
				<section className="services sen" id="services">
					<h2 className="section__heading">Služby</h2>
					<div className="services-grid">
						{services.map((service, i) => {
							return (
								<div key={i} className="service-card">
									<h3 className="service-card__title">{service.title}</h3>
									<p>{service.desc}</p>
									<ul className="service-card__list">
										{service.list.map((item, i) => {
											return <li key={i}>{item}</li>;
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</section>
				<ImageSlider />
				<section className="reference" id="reference">
					<h2 className="section__heading">REFERENCE</h2>
					{reference.map((r, i) => {
						return (
							<div className="reference-container gabarito" key={i}>
								<div className="reference__img-wrapper">
									<img className="reference__img" src={r.imgSrc} alt="" />
								</div>
								<div className="reference-details">
									<h3 className="reference-details__title">{r.title}</h3>
									<p>{r.desc}</p>
									<p style={{ fontWeight: 600, marginTop: "20px" }}>{r.type}</p>
								</div>
							</div>
						);
					})}
				</section>
				<section className="about-me" id="about-me">
					<h2 className="section__heading">O mně</h2>
					<div className="about-me-container">
						<div>
							<div className="about-me-img">
								<img src="/kristian-janko.png" alt="" />
								<div className="about-me-img-container">
									<span className="archivo-black">20+</span>
									<span
										style={{ color: "hsl(0, 0%, 75%)" }}
										className="urbanist"
									>
										let praxe v architektuře
									</span>
								</div>
							</div>
							<p
								style={{ marginTop: "10px", fontSize: "2rem" }}
								className="urbanist"
							>
								Pojďme tvořit spolu
							</p>
							<div className="about-me-contact-details gabarito">
								<h3 style={{ fontSize: "2rem" }}>Kontakt</h3>
								<div>
									<span>Mob.: </span>
									<a href="tel:+420776171400">
										<AnimatedTxt text="+420 776 171 400" />
									</a>
								</div>
								<div>
									<span>E-mail: </span>
									<a href="mailto:kristian.janko@email.cz">
										<AnimatedTxt text="kristian.janko@email.cz" />
									</a>
								</div>
								<div>
									<span>IČO: 24457205</span> <CopyBtn value="24457205" />
								</div>
							</div>
						</div>
						<div className="gabarito">
							<p>
								Jmenuji se <strong>Kristián Jankó</strong> , pocházím z Ukrajiny
								a celý svůj profesní život se věnuji architektuře a projektování
								pozemních staveb, je to moje životní povolání.
							</p>
							<br />
							<p>
								Nepůsobím jako velké studio s administrativním oddělením –
								pracuji soustředěně a osobně na každém projektu. Díky tomu mohu
								veškerou energii věnovat samotné architektuře a nabídnout
								komfortní spolupráci, vždyť veškerý svůj čas věnuji tomu
								nejdůležitějšímu ... svému klientovi :)
							</p>
							<br />
							<p>
								Za každý projekt ručím svým jménem – je to závazek
								kvality.Reputace je pro mne vyšší hodnotou než jakákoli
								marketingová deklarace.
							</p>
							<br />
							<p
								style={{
									color: "hsl(0, 0%, 75%)",
									borderLeft: "2px solid hsl(0, 0%, 75%)",
									paddingLeft: "10px",
								}}
							>
								<i>
									“Nepracuji proto, abych „naplnil portfolio“, peníze a práci
									mám - to nehledám. Mým cílem je navrhovat kvalitní, nadčasovou
									a technicky promyšlenou architekturu.
									<br />
									<br />
									Hledám investora, který chce postavit výjimečnou a technicky
									promyšlenou stavbu. Klienta, který je náročný, přemýšlivý a
									ochotný vést dialog. Společně bychom projektovali a stavěli
									objekty, které obstojí v čase a mohou se stát referenčními
									příklady kvalitní architektury.”
								</i>
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
