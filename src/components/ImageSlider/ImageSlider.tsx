"use client";

import { useEffect } from "react";
import portfolio from "@/data/portfolio.json";
import "./styles.scss";

export default function ImageSlider() {
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
			scrollerInner?.appendChild(duplicatedItem);
		});
	}

	useEffect(() => {
		addAnimation();
	}, []);

	return (
		<section>
			<div className="home__bottom">
				<div
					className="home__scroller scroller"
					data-speed="slow"
					data-direction="left"
				>
					<div className="scroller__inner">
						{portfolio
							.slice()
							.reverse()
							.map((project) => {
								return (
									<div key={project.id}>
										<img
											className="home__project-img"
											key={project.id}
											src={project.img[0]}
											alt={project.name}
										/>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</section>
	);
}
