import type { MetadataRoute } from "next";

const BASE_URL = "https://kristianjanko.cz";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: BASE_URL,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${BASE_URL}/o-mne`,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/projekty`,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/kontakt`,
			changeFrequency: "monthly",
			priority: 0.8,
		},
	];
}
