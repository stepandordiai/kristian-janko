"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm/ContactForm";
import "./Contact.scss";

const pageVariants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

export default function Contact() {
	return (
		<motion.main
			className="contact"
			variants={pageVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.5 }}
		>
			<div className="contact__left-container">
				<h1 className="contact__title">Kontakt</h1>
				<div className="contact__details-container">
					<p>Telefonní číslo</p>
					<a className="link-effect" href="tel:+420776171400">
						+420 776 171 400
					</a>
				</div>
				<div className="contact__details-container">
					<p>E-mail</p>
					<a className="link-effect" href="mailto:kristian.janko@email.cz">
						kristian.janko@email.cz
					</a>
				</div>
				<div className="contact__details-container">
					<p>Sleduj mě</p>
					<a
						className="link-effect"
						href="https://www.instagram.com/kristian.janko"
						target="_blank"
					>
						Instagram
					</a>
				</div>
			</div>
			<ContactForm />
		</motion.main>
	);
}
