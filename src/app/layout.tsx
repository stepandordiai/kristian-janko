import {
	Abhaya_Libre,
	Raleway,
	Tenor_Sans,
	Cormorant_Garamond,
	Sen,
	Gabarito,
	// Urbanist,
	// EB_Garamond,
} from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { Metadata } from "next";
import Preload from "@/components/Preload/Preload";
import { PreloadProvider } from "@/context/PreloadContext";
import "@/scss/globals.scss";

const tenorSans = Tenor_Sans({
	variable: "--font-tenor-sans",
	weight: ["400"],
	subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
	variable: "--font-cormorant-garamond",
	weight: ["400"],
	subsets: ["latin"],
});

const sen = Sen({
	variable: "--font-sen",
	weight: ["400"],
	subsets: ["latin"],
});

const gabarito = Gabarito({
	variable: "--font-gabarito",
	weight: ["400"],
	subsets: ["latin"],
});

// const urbanist = Urbanist({
// 	variable: "--font-urbanist",
// 	weight: ["400"],
// 	subsets: ["latin"],
// });

// const ebGaramond = EB_Garamond({
// 	variable: "--font-eb-garamond",
// 	weight: ["400"],
// 	subsets: ["latin"],
// });

const vollkorn = Raleway({
	variable: "--font-vollkorn",
	weight: ["400"],
	subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
	variable: "--font-abhaya-libre",
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Kristián Jankó",
	description:
		"Jmenuji se Kristián Jankó a celý život věnuji se architektuře a projektování pozemních staveb.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="cs">
			<body
				className={`${vollkorn.variable} ${abhayaLibre.variable} ${tenorSans.variable} ${cormorantGaramond.variable} ${sen.variable} ${gabarito.variable}`}
			>
				<PreloadProvider>
					<Preload />
					<Header />
					{children}
					<Footer />
				</PreloadProvider>
			</body>
		</html>
	);
}
