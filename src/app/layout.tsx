import {
	Abhaya_Libre,
	Tenor_Sans,
	Cormorant_Garamond,
	Sen,
	Gabarito,
	Urbanist,
	EB_Garamond,
	Vollkorn,
	Archivo_Black,
} from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { Metadata } from "next";
import Preload from "@/components/Preload/Preload";
import { PreloadProvider } from "@/context/PreloadContext";
import "@/scss/globals.scss";
import { BASE_URL } from "@/lib/constants";

const tenorSans = Tenor_Sans({
	variable: "--font-tenor-sans",
	weight: ["400"],
	subsets: ["latin"],
});

const urbanist = Urbanist({
	variable: "--font-urbanist",
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

const ebGaramond = EB_Garamond({
	variable: "--font-eb-garamond",
	subsets: ["latin"],
});

const vollkorn = Vollkorn({
	variable: "--font-vollkorn",
	weight: ["400"],
	subsets: ["latin"],
});

const abhayaLibre = Abhaya_Libre({
	variable: "--font-abhaya-libre",
	weight: ["400"],
	subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
	variable: "--font-archivo-black",
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="cs">
			<body
				className={`${archivoBlack.variable} ${vollkorn.variable} ${abhayaLibre.variable} ${tenorSans.variable} ${cormorantGaramond.variable} ${sen.variable} ${gabarito.variable} ${urbanist.variable} ${ebGaramond.variable}`}
			>
				<PreloadProvider>
					{/* <Preload /> */}
					<Header />
					{children}
					<Footer />
				</PreloadProvider>
			</body>
		</html>
	);
}
