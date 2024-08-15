import { postData } from "@shared/api";

type CreateUserParameters = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

export const createUser = async ({
	firstName,
	lastName,
	email,
	password
}: CreateUserParameters) => {
	try {
		const response = await postData("/api/users/new", {
			FirstName: firstName,
			LastName: lastName,
			Email: email,
			Password: password
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Failed to send user data. Status: ${response.status}. Message: ${errorText || "Unknown error"}`
			);
		}

		const contentType = response.headers.get("Content-Type");

		if (!contentType || !contentType.includes("application/json")) {
			throw new Error("Expected JSON response but received a different format.");
		}

		return await response.json();
	} catch (error) {
		console.error("An error occurred while sending the user data:", error);
		throw error;
	}
};
