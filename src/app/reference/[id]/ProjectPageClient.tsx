"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import portfolioData from "../../assets/data/portfolio-data.json";
import {
	activeCursor,
	inactiveCursor,
	removeCursor,
} from "../../utils/cursorState";
import { notFound } from "next/navigation";
import "./ProjectPage.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

export default function ProjectPageClient({ id }: { id: string }) {
	const project = portfolioData.find((project) => project.id == Number(id));

	if (!project) {
		return notFound();
	}

	const relatedProjects = portfolioData.filter((item) => {
		return item.type === project.type && item.name !== project.name;
	});

	return (
		<motion.div
			className="project-page"
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.5 }}
		>
			<div className="project-page__img-container">
				<div>
					<img src={project.img[0]} alt={project.name} loading="lazy" />
				</div>
				<div>
					<img src={project.img[1]} alt={project.name} loading="lazy" />
				</div>
			</div>
			<div className="project-page__title-container">
				<p>{project.year}</p>
				<h1 className="project-page__title">{project.name}</h1>
			</div>
			<p className="project-page__info">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fuga
				harum quis quo quidem provident natus culpa obcaecati ullam perspiciatis
				possimus doloremque perferendis! Repellat quo nulla, provident excepturi
				vel quam. Quae, assumenda labore. Eius voluptate autem numquam ducimus
				incidunt ea dolorem nesciunt dignissimos, tempore, cumque molestiae
				quasi maxime libero corrupti accusantium! Adipisci ex incidunt autem
				odio nisi? Harum, excepturi recusandae? Quisquam voluptatibus officia
				expedita dignissimos? Porro officia veritatis facere, explicabo
				consequuntur culpa, doloribus fuga voluptatem consectetur magni,
				voluptate quasi voluptatum laboriosam quia animi? Tempora, porro
				consectetur dolore nesciunt expedita maiores? Quas iste consequuntur
				odit delectus quisquam vel maxime aliquid accusamus id, labore libero,
				necessitatibus voluptatibus quae, asperiores totam reiciendis? Quia
				perferendis aliquam praesentium maxime est necessitatibus? Aspernatur
				officiis vero earum! Autem, voluptatibus neque blanditiis assumenda
				repellat impedit quo iusto. Cumque nobis saepe labore eum consequatur
				magnam veniam quia perferendis. Voluptates, accusamus vitae veritatis
				facere illo reprehenderit nulla quos eum necessitatibus! Mollitia
				deserunt saepe neque nostrum, unde architecto, labore natus aliquam
				debitis obcaecati vel? Velit ratione autem molestiae beatae temporibus,
				modi unde aspernatur at incidunt et, sapiente commodi optio nobis
				consectetur? Aut odio neque quibusdam harum ad expedita voluptas
				mollitia cupiditate, temporibus sint deleniti omnis. Totam laudantium
				commodi modi sunt nemo. Voluptas corrupti esse ipsum reprehenderit
				labore exercitationem deserunt in dolorem. Doloremque corrupti quae
				temporibus accusantium qui provident dicta dignissimos quod! Culpa et
				facilis dolorum soluta cupiditate iure maiores, quaerat distinctio
				numquam nulla quae tenetur doloribus aspernatur amet perspiciatis fuga
				expedita. Impedit similique quo excepturi rerum, provident, pariatur
				odit aut sequi unde possimus architecto soluta quis eum, nobis quae
				atque. Deserunt commodi consequatur quae quisquam nesciunt aliquid
				doloremque modi autem deleniti. Vero animi voluptatibus doloremque nam
				assumenda, quia blanditiis labore a voluptatem earum cum placeat culpa
				neque esse dolorem est saepe laudantium, odio, enim laborum cumque ea
				debitis hic harum. Aspernatur?
			</p>
			<p style={{ margin: "30px 0", textAlign: "right" }}>
				Potřebujete projekt?{" "}
				<Link className="home__link" href="/contact-me">
					Kontaktujte mě
				</Link>
			</p>
			{relatedProjects.length > 0 && (
				<div>
					{/* FIXME: */}
					<p className="project-page__related-title">
						Mohlo by se vám také líbit
					</p>
					<div className="project-page__related-grid">
						{relatedProjects.map((project) => {
							return (
								<Link
									key={project.id}
									onMouseMove={activeCursor}
									onMouseLeave={inactiveCursor}
									onClick={removeCursor}
									href={`/project-page/${project.id}`}
								>
									<img src={project.img[0]} alt={project.name} loading="lazy" />
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</motion.div>
	);
}
