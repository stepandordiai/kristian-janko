"use client";

// import { usePreload } from "@/context/PreloadContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LogoAnimated from "@/components/icons/LogoAnimated";
import AnimatedTxt from "@/components/AnimatedTxt/AnimatedTxt";
import "./Header.scss";

const navLinksData = [
	{ name: "Úvod", path: `/#hero` },
	{
		name: "Služby",
		path: "/#services",
	},
	{
		name: "Reference",
		path: "/#reference",
	},

	{ name: "O mně", path: "/#about-me" },
	{
		name: "Filosofie",
		path: "/filosofie",
	},
];

const Header = () => {
	// const done = usePreload();

	const [menuOpen, setMenuOpen] = useState(false);

	const pathname = usePathname();

	const indicatorRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLElement>(null);

	const [indicatorStyle, setIndicatorStyle] = useState({
		width: "0px",
		left: "0px",
		transition: "none",
	});
	const updateIndicator = () => {
		if (!navRef.current || !indicatorRef.current) return;

		requestAnimationFrame(() => {
			const activeLink = navRef.current?.querySelector(
				".header__nav-link.active",
			) as HTMLElement;

			if (!activeLink) return;

			setIndicatorStyle((prev) => ({
				width: `${activeLink.offsetWidth}px`,
				left: `${activeLink.offsetLeft}px`,
				transition: prev.width === "0px" ? "none" : "all 0.3s",
			}));
		});
	};

	function getRect(
		sections: HTMLElement[],
		navLinks: NodeListOf<HTMLAnchorElement>,
	) {
		navLinks.forEach((link) => link.classList.remove("active"));

		sections.forEach((section, index) => {
			if (!section) return;

			const sectionRect = section.getBoundingClientRect();

			if (sectionRect.top <= 80 && sectionRect.bottom >= 85) {
				navLinks[index].classList.add("active");
			}
		});

		updateIndicator();
	}

	// FIXME:
	useEffect(() => {
		const sections = [
			document.querySelector(".hero") as HTMLElement,
			document.querySelector(".services") as HTMLElement,
			document.querySelector(".reference") as HTMLElement,
			document.querySelector(".about-me") as HTMLElement,
			document.querySelector(".philosophy") as HTMLElement,
		];
		const navLinks = document.querySelectorAll(
			".header__nav-link",
		) as NodeListOf<HTMLAnchorElement>;

		// Reset indicator style
		setIndicatorStyle({
			width: "0px",
			left: "0px",
			transition: "none",
		});

		if (!navLinks.length || !sections.some(Boolean)) return;

		const handleGetRectOnScroll = () => getRect(sections, navLinks);

		const frameId = requestAnimationFrame(() => {
			handleGetRectOnScroll();
		});

		document.addEventListener("scroll", handleGetRectOnScroll);

		return () => {
			cancelAnimationFrame(frameId);
			document.removeEventListener("scroll", handleGetRectOnScroll);
		};
	}, [pathname]);

	// menu-btn

	const toggleMenu = () => setMenuOpen((prev) => !prev);

	useEffect(() => {
		const closeMenuOnEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setMenuOpen(false);
			}
		};

		document.addEventListener("keydown", closeMenuOnEsc);

		return () => {
			document.removeEventListener("keydown", closeMenuOnEsc);
		};
	}, []);

	return (
		<>
			<header className="header">
				<Link className="header__logo-link" href="/">
					<LogoAnimated size={40} color="#fff" />
				</Link>
				<nav ref={navRef} className="header__nav">
					{navLinksData.map((navLink, i) => {
						return (
							<Link
								key={i}
								className={`header__nav-link tenor-sans ${
									pathname === navLink.path ? "header__nav-link--active" : ""
								}`}
								href={navLink.path}
							>
								<AnimatedTxt text={navLink.name} />
							</Link>
						);
					})}
					<div
						className="nav-link-indicator"
						ref={indicatorRef}
						style={indicatorStyle}
					></div>
				</nav>
				<button
					className="menu-btn"
					onClick={toggleMenu}
					aria-expanded={menuOpen}
					aria-controls="menu"
				>
					<span
						className={`menu-btn-inner ${menuOpen ? "menu-btn-inner--active" : ""}`}
					>
						<span
							className={`menu-btn-inner__center-line ${menuOpen ? "menu-btn-inner__center-line--active" : ""}`}
						></span>
					</span>
				</button>
			</header>
			<div className={`menu ${menuOpen ? "menu--visible" : ""}`} id="menu">
				<nav className="menu__nav">
					{navLinksData.map((navLink, i) => {
						return (
							<Link
								key={i}
								onClick={() => setMenuOpen(false)}
								className={`menu__nav-link ${menuOpen ? "menu__nav-link--active" : ""}`}
								href={navLink.path}
							>
								<AnimatedTxt text={navLink.name} />
							</Link>
						);
					})}
				</nav>
				<div>
					<a
						className={`menu__link ${menuOpen ? "menu__link--visible" : ""}`}
						href="https://www.instagram.com/kristian.janko"
						target="_blank"
					>
						<AnimatedTxt text="Instagram" />
					</a>
				</div>
			</div>
		</>
	);
};

export default Header;
