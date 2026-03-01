"use client";

import { useEffect, useState } from "react";
import portfolioData from "./assets/data/portfolio-data.json";
import {
	activeCursor,
	inactiveCursor,
	removeCursor,
} from "./utils/cursorState";
import Link from "next/link";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import "./Home.scss";

const reference = [
	{
		title: "Rodinné domy",
		desc: "Luxusní bydlení, které přirozeně vyrůstá z místa. Každý detail je součástí promyšleného celku.",
		imgSrc: "/project-img/01-c.jpg",
		type: "STUDIE / Praha 2025",
	},
	{
		title: "Rezidenční bydlení ",
		desc: "Vystavba 38 rodinných domů v jednotném architektonickém konceptu současného bydlení.",
		imgSrc: "/project-img/02-c.jpg",
		type: "Stavební povolení / Káranice 2025",
	},
	{
		title: "Bytové domy",
		desc: "Moderní bydlení respektující charakter lokality. Architektura založená na proporcích a kvalitních materiálech.",
		imgSrc: "/project-img/03-c.jpg",
		type: "Stavební povolení / Pozlovice 2026",
	},
	{
		title: "OBČANSKÁ VYBAVENOST",
		desc: "Moderní restaurace pro slavnostní příležitosti. Prostor, kde se architektura stává součástí zážitku.",
		imgSrc: "/project-img/04-c.jpg",
		type: "STUDIE / Ukrajina 2020",
	},
];

const services = [
	{
		title: "Architektonická studie",
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
	{
		title: "Projekt pro provedení stavby",
		desc: "Realizační dokumentace pro výstavbu",
		list: [
			"detailní architektonicko-stavební řešení",
			"podrobné konstrukční a technické detaily",
			"koordinace všech profesních částí projektu",
			"výkresy v podrobnosti pro realizaci stavby",
			"návaznost jednotlivých konstrukcí a profesí",
			"podklady pro výběr zhotovitele a realizaci",
		],
	},
];

const philosophy = [
	{
		title: "Proč je architekt nezbytný",
		desc: "Ze stejných materiálů lze postavit průměrnou stavbu i kvalitní architekturu. Rozdíl nevzniká v ceně betonu nebo tloušťce izolace, ale ve způsobu, jak jsou jednotlivé prvky uspořádány, proporčně vyváženy a technicky vyřešeny. Architekt propojuje funkci, konstrukci a kontext do jednoho logického celku. Určuje prostorovou hierarchii, pracuje s přirozeným světlem, optimalizuje provoz a předvídá dlouhodobé užívání budovy. Kvalita stavby proto není náhodná. Je výsledkem systematických rozhodnutí, která dávají materiálu řád, prostoru smysl a investici dlouhodobou hodnotu.",
	},
	{
		title: "Jak pracovat s architektem",
		desc: "Ze stejných materiálů lze postavit průměrnou stavbu i kvalitní architekturu. Rozdíl nevzniká v ceně betonu nebo tloušťce izolace, ale ve způsobu, jak jsou jednotlivé prvky uspořádány, proporčně vyváženy a technicky vyřešeny. Architekt propojuje funkci, konstrukci a kontext do jednoho logického celku. Určuje prostorovou hierarchii, pracuje s přirozeným světlem, optimalizuje provoz a předvídá dlouhodobé užívání budovy. Kvalita stavby proto není náhodná. Je výsledkem systematických rozhodnutí, která dávají materiálu řád, prostoru smysl a investici dlouhodobou hodnotu.",
	},
	{
		title: "Architekt není mobilní operátor",
		desc: "Ze stejných materiálů lze postavit průměrnou stavbu i kvalitní architekturu. Rozdíl nevzniká v ceně betonu nebo tloušťce izolace, ale ve způsobu, jak jsou jednotlivé prvky uspořádány, proporčně vyváženy a technicky vyřešeny. Architekt propojuje funkci, konstrukci a kontext do jednoho logického celku. Určuje prostorovou hierarchii, pracuje s přirozeným světlem, optimalizuje provoz a předvídá dlouhodobé užívání budovy. Kvalita stavby proto není náhodná. Je výsledkem systematických rozhodnutí, která dávají materiálu řád, prostoru smysl a investici dlouhodobou hodnotu.",
	},
	{
		title: "O vztahu ceny a kvality",
		desc: "Ze stejných materiálů lze postavit průměrnou stavbu i kvalitní architekturu. Rozdíl nevzniká v ceně betonu nebo tloušťce izolace, ale ve způsobu, jak jsou jednotlivé prvky uspořádány, proporčně vyváženy a technicky vyřešeny. Architekt propojuje funkci, konstrukci a kontext do jednoho logického celku. Určuje prostorovou hierarchii, pracuje s přirozeným světlem, optimalizuje provoz a předvídá dlouhodobé užívání budovy. Kvalita stavby proto není náhodná. Je výsledkem systematických rozhodnutí, která dávají materiálu řád, prostoru smysl a investici dlouhodobou hodnotu.",
	},
	{
		title: "Jednotka informace v architektuře",
		desc: "Ze stejných materiálů lze postavit průměrnou stavbu i kvalitní architekturu. Rozdíl nevzniká v ceně betonu nebo tloušťce izolace, ale ve způsobu, jak jsou jednotlivé prvky uspořádány, proporčně vyváženy a technicky vyřešeny. Architekt propojuje funkci, konstrukci a kontext do jednoho logického celku. Určuje prostorovou hierarchii, pracuje s přirozeným světlem, optimalizuje provoz a předvídá dlouhodobé užívání budovy. Kvalita stavby proto není náhodná. Je výsledkem systematických rozhodnutí, která dávají materiálu řád, prostoru smysl a investici dlouhodobou hodnotu.",
	},
	{
		title: "Pozemek pro stavbu: rovina, nebo terén?",
		desc: "Ze stejných materiálů lze postavit průměrnou stavbu i kvalitní architekturu. Rozdíl nevzniká v ceně betonu nebo tloušťce izolace, ale ve způsobu, jak jsou jednotlivé prvky uspořádány, proporčně vyváženy a technicky vyřešeny. Architekt propojuje funkci, konstrukci a kontext do jednoho logického celku. Určuje prostorovou hierarchii, pracuje s přirozeným světlem, optimalizuje provoz a předvídá dlouhodobé užívání budovy. Kvalita stavby proto není náhodná. Je výsledkem systematických rozhodnutí, která dávají materiálu řád, prostoru smysl a investici dlouhodobou hodnotu.",
	},
	{
		title: " Jak rozpoznat rukopis architekta",
		desc: "Ze stejných materiálů lze postavit průměrnou stavbu i kvalitní architekturu. Rozdíl nevzniká v ceně betonu nebo tloušťce izolace, ale ve způsobu, jak jsou jednotlivé prvky uspořádány, proporčně vyváženy a technicky vyřešeny. Architekt propojuje funkci, konstrukci a kontext do jednoho logického celku. Určuje prostorovou hierarchii, pracuje s přirozeným světlem, optimalizuje provoz a předvídá dlouhodobé užívání budovy. Kvalita stavby proto není náhodná. Je výsledkem systematických rozhodnutí, která dávají materiálu řád, prostoru smysl a investici dlouhodobou hodnotu.",
	},
];

export default function Home() {
	const [philosophyVisible, setPhilosophyVisible] = useState(
		// TODO: learn this
		Array(philosophy.length).fill(false),
	);

	const handlePhilosophyVisible = (index: number) => {
		setPhilosophyVisible((prev) =>
			prev.map((item, i) => (i === index ? !item : item)),
		);
	};

	function addAnimation() {
		const scroller = document.querySelector(".scroller");

		// setAttribute expects both arguments to be strings
		scroller?.setAttribute("data-animated", "true");

		const scrollerInner = scroller?.querySelector(
			".scroller__inner",
		) as HTMLDivElement;
		const scrollerContent = Array.from(scrollerInner.children);

		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true) as Element;

			duplicatedItem.setAttribute("aria-hidden", "true");
			duplicatedItem.addEventListener("mousemove", activeCursor);
			duplicatedItem.addEventListener("mouseleave", inactiveCursor);
			duplicatedItem.addEventListener("click", removeCursor);
			scrollerInner?.appendChild(duplicatedItem);
		});
	}

	useEffect(() => {
		addAnimation();
	}, []);
	return (
		<>
			<CustomCursor />
			<main className="home">
				<section className="hero">
					<h1 className="home__title">UŽITEČNOST, PEVNOST A KRÁSA</h1>
					<i>promyšlené v každém detailu</i>
					<Link className="home__link" href="/contact-me">
						Kontaktujte mě
					</Link>
				</section>
				<section className="services" id="sluzby">
					<h2 className="section__title">Služby</h2>
					<div className="services-grid">
						{services.map((service, i) => {
							return (
								<div key={i} className="service-card">
									<h3 className="service-card__title">{service.title}</h3>
									<p>{service.desc}</p>
									<ul>
										{service.list.map((item, i) => {
											return <li key={i}>{item}</li>;
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</section>
				<div className="home__bottom">
					<div
						className="home__scroller scroller"
						data-speed="slow"
						data-direction="left"
					>
						<div className="scroller__inner">
							{portfolioData
								.slice()
								.reverse()
								.map((project, i) => {
									return (
										<Link
											onMouseMove={activeCursor}
											onMouseLeave={inactiveCursor}
											onClick={removeCursor}
											className="home__project-link"
											key={project.id}
											href={`/projects/${project.id}`}
										>
											<img
												style={{
													animation: `revealProjectImg 1s ${0.5 + i * 0.2}s forwards`,
												}}
												className="home__project-img"
												key={project.id}
												src={project.img[0]}
												alt={project.name}
											/>
										</Link>
									);
								})}
						</div>
					</div>
				</div>
				<section className="reference" id="reference">
					<h2 className="section__title">Reference</h2>
					{reference.map((r, i) => {
						return (
							<div className="reference-container" key={i}>
								<div className="img-wrapper">
									<img src={r.imgSrc} alt="" />
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
				<section className="philosophy" id="filosofie">
					<h2 className="section__title">Architektonické vedení</h2>
					<p>
						Architektura je proces – nejen návrh, ale i dialog, odpovědnost a
						dlouhodobý dopad stavby na prostředí. Tento článek slouží jako
						otevřený soubor myšlenek, které se přirozeně formují při práci na
						projektech. Text průběžně doplňuji podle témat, která považuji za
						zásadní pro současnou architektonickou praxi.
					</p>
					<div>
						{philosophy.map((item, i) => {
							return (
								<div key={i}>
									<button
										onClick={() => handlePhilosophyVisible(i)}
										className="philosophy-btn"
									>
										<span>{i + 1 + " " + item.title}</span>
										<span>+</span>
									</button>
									<div
										className={`philosophy-parent ${philosophyVisible[i] ? "philosophy-parent--visible" : ""}`}
									>
										<p className="philosophy-child">{item.desc}</p>
									</div>
								</div>
							);
						})}
					</div>
				</section>
				<section className="about-me" id="o-mne">
					<h2 className="section__title">O mně</h2>
					<div className="about-me-container">
						<div>
							<div className="about-me-img"></div>
							<div>
								<h3>Kontakt</h3>
								<p>
									Mob.:
									<a href="tel:+420776171400">+420 776 171 400</a>
								</p>
								<p>
									E-mail:
									<a href="mailto:kristian.janko@email.cz">
										kristian.janko@email.cz
									</a>
								</p>
								<p>IČO: 24457205</p>
							</div>
						</div>
						<div>
							<p>
								Jmenuji se Kristián Jankó, pocházím z Ukrajiny a celý svůj
								profesní život se věnuji architektuře a projektování pozemních
								staveb, je to moje životní povolání.
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
							<p>
								PS: Nepracuji proto, abych „naplnil portfolio“, peníze a práci
								mám - to nehledám. Mým cílem je navrhovat kvalitní, nadčasovou a
								technicky promyšlenou architekturu.
							</p>
							<br />
							<p>
								Hledám investora, který chce postavit výjimečnou a technicky
								promyšlenou stavbu. Klienta, který je náročný, přemýšlivý a
								ochotný vést dialog. Společně bychom projektovali a stavěli
								objekty, které obstojí v čase a mohou se stát referenčními
								příklady kvalitní architektury.
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
