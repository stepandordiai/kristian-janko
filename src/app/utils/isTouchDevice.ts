const isTouchDevice = (): boolean => {
	// TODO: ?
	// try {
	// 	document.createEvent("TouchEvent");
	// 	return true;
	// } catch (error) {
	// 	return false;
	// }

	// TODO: learn this
	return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

export default isTouchDevice;
