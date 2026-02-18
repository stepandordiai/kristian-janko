"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import portfolioData from "./assets/data/portfolio-data.json";
import {
	activeCursor,
	inactiveCursor,
	removeCursor,
} from "./utils/cursorState";
import Link from "next/link";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import "./Home.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

export default function Home() {
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
			<motion.main
				className="home"
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{ duration: 0.5 }}
			>
				<section className="hero">
					<h1 className="home__title">UŽITEČNOST, PEVNOST A KRÁSA</h1>
					<i>promyšlené v každém detailu</i>
					<Link className="home__link" href="/contact-me">
						Kontaktujte mě
					</Link>
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
			</motion.main>
		</>
	);
}
