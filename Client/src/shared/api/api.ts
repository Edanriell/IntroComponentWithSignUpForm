import { apiUrl } from "@shared/config";

export const postData = (endpoint: string, body: unknown) =>
	fetch(apiUrl + endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(body)
	});
