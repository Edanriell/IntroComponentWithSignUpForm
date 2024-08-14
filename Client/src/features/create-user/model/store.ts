export type FormInputState = {
	value: string;
	isValid: "invalid" | "valid" | "idle";
	errorMessage: string | null;
};

export type FormState = {
	firstNameInput: FormInputState;
	lastNameInput: FormInputState;
	emailInput: FormInputState;
	passwordInput: FormInputState;
	form: {
		isValid: "invalid" | "valid" | "idle";
		isSubmitting: "submitting" | "submitted" | "idle";
	};
};

export const formInitialState: FormState = {
	firstNameInput: {
		value: "",
		isValid: "idle",
		errorMessage: null
	},
	lastNameInput: {
		value: "",
		isValid: "idle",
		errorMessage: null
	},
	emailInput: {
		value: "",
		isValid: "idle",
		errorMessage: null
	},
	passwordInput: {
		value: "",
		isValid: "idle",
		errorMessage: null
	},
	form: {
		isSubmitting: "idle",
		isValid: "idle"
	}
};
