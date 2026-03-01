import { Vollkorn } from "next/font/google";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { Metadata } from "next";
import "./globals.scss";
import Preload from "./components/Preload/Preload";
import { PreloadProvider } from "./context/PreloadContext";

const vollkorn = Vollkorn({
	variable: "--font-vollkorn",
	weight: ["400", "500", "600"],
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
