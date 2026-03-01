import { useState, useEffect } from "react";
import SunIcon from "@/app/icons/SunIcon";
import MoonIcon from "@/app/icons/MoonIcon";
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
			{darkMode ? <MoonIcon size={24} /> : <SunIcon size={24} />}
		</button>
	);
};

export default DarkModeBtn;
