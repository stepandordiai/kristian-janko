import type { Metadata } from "next";
import { Vollkorn } from "next/font/google";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import "./globals.scss";

const vollkorn = Vollkorn({
	variable: "--font-manrope",
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
			<body className={vollkorn.variable}>
				<ScrollToTop />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
