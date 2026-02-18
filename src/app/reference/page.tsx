"use client";

import { useState } from "react";
import portfolioData from "../assets/data/portfolio-data.json";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	activeCursor,
	inactiveCursor,
	removeCursor,
} from "../utils/cursorState";
import "./Projects.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const types = [
	"RODINNÉ DOMY",
	"REZIDENČNÍ BYDLENÍ",
	"BYTOVÉ DOMY",
	"OBČANSKÁ VYBAVENOST",
];

export default function Projects() {
	const [filter, setFilter] = useState("all");

	return (
		<motion.main
			className="projects"
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.5 }}
		>
			<div className="projects__title-container">
				<div className="projects__title-inner">
					<h1 className="projects__title">Projekty</h1>
					<div className="projects__btn-container">
						<button
							onClick={() => setFilter("all")}
							className={`projects__btn dark--active ${
								filter === "all" ? "projects__btn--active" : ""
							}`}
						>
							Všechny projekty
						</button>
						{types.map((type, i) => {
							return (
								<button
									key={i}
									onClick={() => setFilter("residential")}
									className={`projects__btn dark--active ${
										filter === type ? "projects__btn--active" : ""
									}`}
								>
									{type}
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<div className="projects__mansory-container">
				<div className="projects__labels-container">
					{[...portfolioData]
						.reverse()
						.filter((project) => filter === "all" || filter === project.type)
						.map((project, index) => {
							return (
								<div key={index} className="projects__label-container">
									<span style={{ fontSize: "0.8rem" }}>
										{String(project.id).padStart(2, "0")}
									</span>
									<Link href={`#${index}`}>
										<img
											src={project.img[0]}
											alt={project.name}
											loading="lazy"
										/>
									</Link>
								</div>
							);
						})}
				</div>
				<div className="masonry">
					{[...portfolioData]
						.reverse()
						.filter((project) => filter === "all" || filter === project.type)
						.map((project, index) => {
							return (
								<Link
									onMouseMove={activeCursor}
									onMouseLeave={inactiveCursor}
									onClick={removeCursor}
									key={index}
									className="projects__link"
									id={index.toString()}
									href={`/project-page/${project.id}`}
								>
									<img src={project.img[0]} alt={project.name} loading="lazy" />
								</Link>
							);
						})}
				</div>
			</div>
		</motion.main>
	);
}
