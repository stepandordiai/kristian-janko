"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./Footer.scss";

const Footer = () => {
	const restoreScrollToTop = () => {
		// TODO: FIX
		const projectLabels = document.querySelector(".projects__labels-container");
		const masonry = document.querySelector(".masonry");

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});

		if (projectLabels && masonry) {
			projectLabels.scrollTo({
				top: 0,
				behavior: "smooth",
			});

			masonry.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	const [time, setTime] = useState("");

	useEffect(() => {
		const getCurrentTime = () => {
			const date = dayjs();
			const hours = String(date.hour()).padStart(2, "0");
			const minutes = String(date.minute()).padStart(2, "0");
			const seconds = String(date.second()).padStart(2, "0");

			return `${hours}:${minutes}:${seconds}`;
		};

		setTime(getCurrentTime());

		const interval = setInterval(() => setTime(getCurrentTime()), 1000);

		return () => clearInterval(interval);
	}, []);

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
				<div className="footer__time">{time}</div>
				<a
					className="link-effect"
					href="https://www.instagram.com/kristian.janko"
					target="_blank"
				>
					Instagram
				</a>
				<button onClick={restoreScrollToTop} className="link-effect">
					Na začátek stránky
				</button>
				<p>&copy; {new Date().getFullYear()} Kristián Jankó</p>
			</div>
			<p>
				Website created by{" "}
				<a
					className="link-effect"
					href="https://www.heeeyooo.studio/"
					target="_blank"
				>
					heeeyooo studio
				</a>
			</p>
		</footer>
	);
};

export default Footer;
