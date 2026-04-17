"use client";

import AnimatedTxt from "@/components/AnimatedTxt/AnimatedTxt";
import "./Footer.scss";

const Footer = () => {
	const restoreScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="footer">
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					flexDirection: "column",
					gap: 15,
				}}
			>
				<a
					className="link-effect"
					href="https://www.instagram.com/kristian.janko"
					target="_blank"
				>
					Instagram
				</a>
				<button onClick={restoreScrollToTop}>
					<AnimatedTxt text="Na začátek stránky" />
				</button>
				<p>&copy; {new Date().getFullYear()} Kristián Jankó</p>
			</div>
			<p>
				Website created by{" "}
				<a href="https://www.heeeyooo.com" target="_blank">
					<AnimatedTxt text="heeeyooo studio" />
				</a>
			</p>
		</footer>
	);
};

export default Footer;
