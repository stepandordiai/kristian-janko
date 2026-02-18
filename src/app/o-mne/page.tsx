"use client";

import { motion } from "framer-motion";
import "./About.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

export default function About() {
	return (
		<motion.main
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.5 }}
			className="about"
		>
			<div className="about__title-container">
				<h1 className="about__title">O mně</h1>
			</div>
			<div className="about__container">
				<p>
					Jmenuji se Kristián Jankó a celý život věnuji se architektuře a
					projektování pozemních staveb.
				</p>
				<br />
				<p>
					Za sebou mám desítky realizovaných projektů v oblasti bydlení i
					občanské vybavenosti, od prvních studií až po stavby, které dnes
					skutečně slouží lidem. Ve své práci propojuji architektonickou
					myšlenku s technickou realitou stavby.
				</p>
				<p>
					Záleží mi na funkčnosti, logice provozu a kvalitním detailu, který
					rozhoduje o dlouhodobé hodnotě návrhu. Každý projekt vnímám v kontextu
					místa, investora i budoucího užívání. Navrhuji stavby s klidem a
					rozvahou – tak, aby dávaly smysl nejen na papíře, ale i při realizaci
					a každodenním životě
				</p>
			</div>
		</motion.main>
	);
}
