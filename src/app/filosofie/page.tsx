"use client";

import { useState } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import "./styles.scss";
import Breadcrumbs from "@/components/common/Breadcrumbs/Breadcrumbs";

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

export default function Philosophy() {
	const [expandedFaq, setExpandedFaq] = useState<boolean[]>(() =>
		new Array(philosophy.length).fill(false),
	);

	const handleExpandedFaq = (index: number) => {
		setExpandedFaq((prev) =>
			prev.map((item, i) => (i === index ? !item : item)),
		);
	};
	return (
		<main className="philosophy" id="philosophy">
			<Breadcrumbs />
			<div className="philosophy-inner">
				<h2 className="main__heading">Architektonické vedení</h2>
				<p>
					Architektura je proces – nejen návrh, ale i dialog, odpovědnost a
					dlouhodobý dopad stavby na prostředí. Tento článek slouží jako
					otevřený soubor myšlenek, které se přirozeně formují při práci na
					projektech. Text průběžně doplňuji podle témat, která považuji za
					zásadní pro současnou architektonickou praxi.
				</p>
				<div className="faqs-list">
					{philosophy.map(({ title, desc }, i) => {
						return (
							<div
								key={i}
								className={`faqs-item ${expandedFaq[i] ? "faqs-item--expanded" : ""}`}
							>
								<button
									className="faqs-q"
									onClick={() => handleExpandedFaq(i)}
									type="button"
									aria-expanded={expandedFaq[i]}
									aria-controls={`faq-a-${i}`}
									id={`faq-q-${i}`}
								>
									<span>§ {i + 1}</span>
									<h3>{title}</h3>
									<span
										className={`faq-q-icon ${expandedFaq[i] ? "faq-q-icon--active" : ""}`}
									>
										<PlusIcon size={18} />
									</span>
								</button>
								<div
									id={`faq-a-${i}`}
									role="region"
									aria-labelledby={`faq-q-${i}`}
									className={`faqs-a-container ${expandedFaq[i] ? "faqs-a-container--expanded" : ""}`}
								>
									<p className="faqs-a vollkorn">{desc}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</main>
	);
}
