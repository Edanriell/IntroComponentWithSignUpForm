import type { Ref } from "vue";

type ValidateFunctionParameters = {
	value: string;
	isValid: Ref<"invalid" | "valid" | "idle">;
	errorMessage: Ref<string | null>;
};

export const validateFirstNameInput = ({
	value,
	isValid,
	errorMessage
}: ValidateFunctionParameters) => {
	if (!value) {
		isValid.value = "invalid";
		errorMessage.value = "First Name cannot be empty";
		return;
	}

	if (!/^[a-zA-Z]+$/.test(value)) {
		isValid.value = "invalid";
		errorMessage.value = "First Name must contain only letters";
		return;
	}

	isValid.value = "valid";
	errorMessage.value = null;
};

export const validateLastNameInput = ({
	value,
	isValid,
	errorMessage
}: ValidateFunctionParameters) => {
	if (!value) {
		isValid.value = "invalid";
		errorMessage.value = "Last Name cannot be empty";
		return;
	}

	if (!/^[a-zA-Z]+$/.test(value)) {
		isValid.value = "invalid";
		errorMessage.value = "Last Name must contain only letters";
		return;
	}

	isValid.value = "valid";
	errorMessage.value = null;
};

export const validateEmailInput = ({
	value,
	isValid,
	errorMessage
}: ValidateFunctionParameters) => {
	if (!value) {
		isValid.value = "invalid";
		errorMessage.value = "Looks like this is not an email";
		return;
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(value)) {
		isValid.value = "invalid";
		errorMessage.value = "Invalid email format";
		return;
	}

	isValid.value = "valid";
	errorMessage.value = null;
};

export const validatePasswordInput = ({
	value,
	isValid,
	errorMessage
}: ValidateFunctionParameters) => {
	if (!value) {
		isValid.value = "invalid";
		errorMessage.value = "Password cannot be empty";
		return;
	}

	if (value.length < 8) {
		isValid.value = "invalid";
		errorMessage.value = "Password must be at least 8 characters long";
		return;
	}

	if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
		isValid.value = "invalid";
		errorMessage.value = "Password must contain letters and numbers";
		return;
	}

	isValid.value = "valid";
	errorMessage.value = null;
};

type IsWholeFormValidParameters = {
	form: any;
	firstName: any;
	lastName: any;
	email: any;
	password: any;
};

export const validateForm = ({
	form,
	firstName,
	lastName,
	email,
	password
}: IsWholeFormValidParameters) => {
	form.isValid.value =
		firstName.isValid.value === "valid" &&
		lastName.isValid.value === "valid" &&
		email.isValid.value === "valid" &&
		password.isValid.value === "valid"
			? "valid"
			: "invalid";
};

export const clearFormSubmissionResultMessages = (form: any) => {
	form.errorMessage.value = null;
	form.successMessage.value = null;
};
