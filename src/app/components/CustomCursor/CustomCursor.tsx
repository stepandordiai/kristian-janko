"use client";

import { useEffect, useRef } from "react";
import isTouchDevice from "../../utils/isTouchDevice";
import "./CustomCursor.scss";

const CustomCursor = () => {
	const customCursor = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (isTouchDevice()) return;

		// TODO: ?
		const handleCursorPosition = (e: MouseEvent) => {
			if (customCursor.current) {
				customCursor.current.style.top = e.clientY + "px";
				customCursor.current.style.left = e.clientX + "px";
			}
		};

		document.addEventListener("mousemove", handleCursorPosition);

		return () =>
			document.removeEventListener("mousemove", handleCursorPosition);
	}, []);

	return (
		<div
			ref={customCursor}
			className="custom-cursor"
			data-cursor-value="Recenze"
		></div>
	);
};

export default CustomCursor;
