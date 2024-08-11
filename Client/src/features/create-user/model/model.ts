import type { Ref } from "vue";

type ValidateFunctionParameters = {
	value: string;
	isValid: Ref<boolean>;
	errorMessage: Ref<string | null>;
};

export const validateNameInput = ({ value, isValid, errorMessage }: ValidateFunctionParameters) => {
	if (!value) {
		isValid.value = false;
		errorMessage.value = "First Name cannot be empty";
	}

	if (!/^[a-zA-Z]+$/.test(value)) {
		isValid.value = false;
		errorMessage.value = "First Name must contain only letters";
	}

	isValid.value = true;
	errorMessage.value = null;
};

export const validateSurnameInput = ({
	value,
	isValid,
	errorMessage
}: ValidateFunctionParameters) => {
	if (!value) {
		isValid.value = false;
		errorMessage.value = "Last Name cannot be empty";
	}

	if (!/^[a-zA-Z]+$/.test(value)) {
		isValid.value = false;
		errorMessage.value = "Last Name must contain only letters";
	}

	isValid.value = true;
	errorMessage.value = null;
};

export const validateEmailInput = ({
	value,
	isValid,
	errorMessage
}: ValidateFunctionParameters) => {
	if (!value) {
		isValid.value = false;
		errorMessage.value = "Looks like this is not an email";
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(value)) {
		isValid.value = false;
		errorMessage.value = "Invalid email format";
	}

	isValid.value = true;
	errorMessage.value = null;
};

export const validatePasswordInput = ({
	value,
	isValid,
	errorMessage
}: ValidateFunctionParameters) => {
	if (!value) {
		isValid.value = false;
		errorMessage.value = "Password cannot be empty";
	}

	if (value.length < 8) {
		isValid.value = false;
		errorMessage.value = "Password must be at least 8 characters long";
	}

	if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
		isValid.value = false;
		errorMessage.value = "Password must contain letters and numbers";
	}

	isValid.value = true;
	errorMessage.value = null;
};
