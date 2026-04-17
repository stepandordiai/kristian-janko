"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PreloadContext = createContext(false);

export const PreloadProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [done, setDone] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setDone(true), 6000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<PreloadContext.Provider value={done}>{children}</PreloadContext.Provider>
	);
};

export const usePreload = () => useContext(PreloadContext);
