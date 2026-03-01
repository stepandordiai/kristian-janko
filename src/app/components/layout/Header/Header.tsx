"use client";

import { usePreload } from "@/app/context/PreloadContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DarkModeBtn from "../../DarkModeBtn/DarkModeBtn";
import LogoAnimated from "@/app/icons/LogoAnimated";
import "./Header.scss";

const navLinksData = [
	{ name: "Ůvod", path: `/`, end: true },
	{
		name: "Služby",
		path: "#sluzby",
	},
	{
		name: "Reference",
		path: "#reference",
	},
	{
		name: "Filosofie",
		path: "#filosofie",
	},
	{ name: "O mně", path: "#o-mne" },
	{ name: "Kontakt", path: `/kontakt` },
];

const Header = () => {
	const done = usePreload();

	const [menuOpen, setMenuOpen] = useState(false);

	const pathname = usePathname();

	// menu-btn

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		const closeMenuOnEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setMenuOpen(false);
			}
		};

		const closeMenuOnScroll = () => {
			setMenuOpen(false);
		};

		document.addEventListener("keydown", closeMenuOnEsc);
		window.addEventListener("scroll", closeMenuOnScroll);

		return () => {
			document.removeEventListener("keydown", closeMenuOnEsc);
			window.removeEventListener("scroll", closeMenuOnScroll);
		};
	}, []);

	return (
		<header className="header">
			<div className="header__top">
				<Link className="header__logo-link" href="/">
					{/* <LogoAnimated key={done ? "animate" : "wait"} size={40} /> */}
					{done && <LogoAnimated size={40} />}
				</Link>
				<nav className="header__nav">
					{navLinksData.map((navLink, i) => {
						return (
							<Link
								key={i}
								className={`header__nav-link link-effect ${
									pathname === navLink.path ? "link-effect--active" : ""
								}`}
								href={navLink.path}
							>
								{navLink.name}
							</Link>
						);
					})}
				</nav>
				<div className="header__right-section">
					<DarkModeBtn />
					<a
						className="header__link link-effect"
						href="https://www.instagram.com/kristian.janko"
						target="_blank"
					>
						Instagram
					</a>
					{/* menu-btn */}
					<button
						onClick={toggleMenu}
						className={`menu-btn ${menuOpen ? "menu-btn--active" : ""}`}
						aria-expanded={menuOpen}
						aria-controls="menu"
					></button>
				</div>
			</div>
			<div
				className={`header__bottom ${menuOpen ? "header__bottom--active" : ""}`}
			>
				{/* menu */}
				<div className="menu" id="menu">
					<nav className="menu__nav">
						{navLinksData.map((navLink, i) => {
							return (
								<Link
									key={i}
									onClick={() => setMenuOpen(false)}
									className={`menu__nav-link link-effect ${
										pathname === navLink.path ? "link-effect--active" : ""
									} ${menuOpen ? "menu__nav-link--active" : ""}`}
									style={
										// To start first element with 0ms transitionDelay, use index
										menuOpen ? { transitionDelay: `${1 + i * 100}ms` } : {}
									}
									href={navLink.path}
								>
									{navLink.name}
								</Link>
							);
						})}
					</nav>
					<div>
						<a
							className="menu__link link-effect"
							href="https://www.instagram.com/kristian.janko"
							target="_blank"
						>
							Instagram
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
