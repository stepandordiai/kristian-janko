import isTouchDevice from "./isTouchDevice";

let isLocked = false;

export function activeCursor() {
	const el = document.querySelector(".custom-cursor") as HTMLElement;

	if (isTouchDevice()) return;
	if (!isLocked) {
		el?.classList.add("custom-cursor--active");
	}
}

export function inactiveCursor() {
	const el = document.querySelector(".custom-cursor") as HTMLElement;

	if (isTouchDevice()) return;
	if (!isLocked) {
		el?.classList.remove("custom-cursor--active");
	}
}

export function removeCursor() {
	const el = document.querySelector(".custom-cursor") as HTMLElement;

	if (isTouchDevice()) return;
	el?.classList.remove("custom-cursor--active");
	isLocked = true;

	setTimeout(() => {
		isLocked = false;
	}, 1000);
}
