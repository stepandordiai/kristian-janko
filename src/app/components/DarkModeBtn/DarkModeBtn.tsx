import { useState, useEffect } from "react";
import Image from "next/image";
import "./DarkModeBtn.scss";

const DarkModeBtn = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
	};

	useEffect(() => {
		// TODO:
		document.body.classList.toggle("dark", darkMode);
	}, [darkMode]);

	return (
		<button onClick={toggleDarkMode} className="dark-mode-btn">
			{darkMode ? (
				<Image
					title="Tmavý"
					style={{ display: "block" }}
					src="/icons/moon.png"
					width={25}
					height={25}
					alt="Tmavý"
				/>
			) : (
				<Image
					title="Světlo"
					style={{ display: "block" }}
					src="/icons/sun.png"
					width={25}
					height={25}
					alt="Světlo"
				/>
			)}
		</button>
	);
};

export default DarkModeBtn;
