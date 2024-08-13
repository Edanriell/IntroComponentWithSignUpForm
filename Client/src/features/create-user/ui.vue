<script lang="ts" setup>
	import { computed, reactive, toRef } from "vue";

	import { Button } from "@shared/ui/button";
	import { Input } from "@shared/ui/input";
	import { Icon } from "@shared/ui/icon";

	import {
		validateEmailInput,
		validateNameInput,
		validatePasswordInput,
		validateSurnameInput
	} from "./model";
	import { Spinner } from "@shared/ui/spinner";

	type Props = {
		classes?: string;
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: ""
	});

	type FormInputState = {
		value: string;
		isValid: "invalid" | "valid" | "idle";
		errorMessage: string | null;
	};

	type FormState = {
		nameInput: FormInputState;
		surnameInput: FormInputState;
		emailInput: FormInputState;
		passwordInput: FormInputState;
		form: {
			isValid: "invalid" | "valid" | "idle";
			isSubmitting: "submitting" | "submitted" | "idle";
		};
	};

	const formInitialState: FormState = {
		nameInput: {
			value: "",
			isValid: "idle",
			errorMessage: null
		},
		surnameInput: {
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

	const formState = reactive<FormState>(formInitialState);

	const nameInputValue = toRef(formState.nameInput, "value");
	const surnameInputValue = toRef(formState.surnameInput, "value");
	const emailInputValue = toRef(formState.emailInput, "value");
	const passwordInputValue = toRef(formState.passwordInput, "value");

	const isNameInputValid = toRef(formState.nameInput, "isValid");
	const isSurnameInputValid = toRef(formState.surnameInput, "isValid");
	const isEmailInputValid = toRef(formState.emailInput, "isValid");
	const isPasswordInputValid = toRef(formState.passwordInput, "isValid");

	const nameInputErrorMessage = toRef(formState.nameInput, "errorMessage");
	const surnameInputErrorMessage = toRef(formState.surnameInput, "errorMessage");
	const emailInputErrorMessage = toRef(formState.emailInput, "errorMessage");
	const passwordInputErrorMessage = toRef(formState.passwordInput, "errorMessage");

	const isFormSubmitting = toRef(formState.form, "isSubmitting");
	const isFormValid = toRef(formState.form, "isValid");

	const handleNameInputChange = (event: Event) => {
		nameInputValue.value = (event.target as HTMLInputElement).value;
		validateNameInput({
			value: nameInputValue.value,
			isValid: isNameInputValid,
			errorMessage: nameInputErrorMessage
		});
	};

	const handleSurnameInputChange = (event: Event) => {
		surnameInputValue.value = (event.target as HTMLInputElement).value;
		validateSurnameInput({
			value: surnameInputValue.value,
			isValid: isSurnameInputValid,
			errorMessage: surnameInputErrorMessage
		});
	};

	const handleEmailInputChange = (event: Event) => {
		emailInputValue.value = (event.target as HTMLInputElement).value;
		validateEmailInput({
			value: emailInputValue.value,
			isValid: isEmailInputValid,
			errorMessage: emailInputErrorMessage
		});
	};

	const handlePasswordInputChange = (event: Event) => {
		passwordInputValue.value = (event.target as HTMLInputElement).value;
		validatePasswordInput({
			value: passwordInputValue.value,
			isValid: isPasswordInputValid,
			errorMessage: passwordInputErrorMessage
		});
	};

	const handleCreateUserFormSubmit = (event: Event) => {
		event.preventDefault();

		console.log(formState);

		for (const [_, { isValid }] of Object.entries(formState)) {
			if (isValid === "invalid" || isValid === "idle") return;
		}
	};

	const nameInputFieldClasses = computed(() => ({
		"sign-up-form__field-error": isNameInputValid.value === "invalid",
		"sign-up-form__field": true
	}));
	const surnameInputFieldClasses = computed(() => ({
		"sign-up-form__field-error": isSurnameInputValid.value === "invalid",
		"sign-up-form__field": true
	}));
	const emailInputFieldClasses = computed(() => ({
		"sign-up-form__field-error": isEmailInputValid.value === "invalid",
		"sign-up-form__field": true
	}));
	const passwordInputFieldClasses = computed(() => ({
		"sign-up-form__field-error": isPasswordInputValid.value === "invalid",
		"sign-up-form__field": true
	}));

	const nameInputClasses = computed(() => ({
		"sign-up-form__input-error": isNameInputValid.value === "invalid"
	}));
	const surnameInputClasses = computed(() => ({
		"sign-up-form__input-error": isSurnameInputValid.value === "invalid"
	}));
	const emailInputClasses = computed(() => ({
		"sign-up-form__input-error": isEmailInputValid.value === "invalid"
	}));
	const passwordInputClasses = computed(() => ({
		"sign-up-form__input-error": isPasswordInputValid.value === "invalid"
	}));
</script>

<template>
	<form :class="props.classes + ' sign-up-form'" method="POST" @submit="handleCreateUserFormSubmit">
		<div class="sign-up-form__content">
			<Input
				:classes="nameInputClasses"
				:fieldClasses="nameInputFieldClasses"
				description="Name"
				name="name"
				placeholder="First Name"
				type="text"
				@change="handleNameInputChange"
			>
				<Icon
					v-if="isNameInputValid === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="isNameInputValid === 'invalid' && nameInputErrorMessage!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ nameInputErrorMessage }}
				</p>
			</Input>
			<Input
				:classes="surnameInputClasses"
				:fieldClasses="surnameInputFieldClasses"
				description="Last Name"
				name="last-name"
				placeholder="Last Name"
				type="text"
				@change="handleSurnameInputChange"
			>
				<Icon
					v-if="isSurnameInputValid === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="isSurnameInputValid === 'invalid' && surnameInputErrorMessage!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ surnameInputErrorMessage }}
				</p>
			</Input>
			<Input
				:classes="emailInputClasses"
				:fieldClasses="emailInputFieldClasses"
				description="Email Address"
				name="email-address"
				placeholder="Email Address"
				type="email"
				@change="handleEmailInputChange"
			>
				<Icon
					v-if="isEmailInputValid === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="isEmailInputValid === 'invalid' && emailInputErrorMessage!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ emailInputErrorMessage }}
				</p>
			</Input>
			<Input
				:classes="passwordInputClasses"
				:fieldClasses="passwordInputFieldClasses"
				description="Password"
				name="password"
				placeholder="Password"
				type="password"
				@change="handlePasswordInputChange"
			>
				<Icon
					v-if="isPasswordInputValid === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="isPasswordInputValid === 'invalid' && passwordInputErrorMessage!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ passwordInputErrorMessage }}
				</p>
			</Input>
			<Button :disabled="!isFormValid" classes="sign-up-form__button" type="submit">
				<p
					v-if="isFormSubmitting === 'idle' || isFormSubmitting === 'submitted'"
					class="sign-up-form__button-text"
				>
					Claim your free trial
				</p>
				<div v-else-if="isFormSubmitting === 'submitting'" class="sign-up-form__button-sending">
					<p class="sign-up-form__button-text">Sending data</p>
					<Spinner />
				</div>
			</Button>
		</div>
		<small class="sign-up-form__agreement"
			>By clicking the button, you are agreeing to our
			<a href="#" target="_blank">Terms and Services</a></small
		>
	</form>
</template>

<style scoped>
	.sign-up-form {
		border-radius: 1rem;
		box-shadow: 0 0.8rem 0 0 rgba(0, 0, 0, 0.15);
		background: var(--white);
		padding: 2.4rem;

		@media (width >= 1440px) {
			padding: 4rem;
		}
	}

	.sign-up-form__content {
		display: flex;
		flex-direction: column;
		row-gap: 1.6rem;
		margin-bottom: 0.8rem;

		@media (width >= 1440px) {
			row-gap: 2rem;
		}
	}

	.sign-up-form__field {
		position: relative;
	}

	.sign-up-form__field-error {
		margin-bottom: 1.8rem;

		@media (width >= 1440px) {
			margin-bottom: 2.2rem;
		}
	}

	.sign-up-form__input-error {
		outline: var(--pink-glamour) solid 0.2rem !important;
		background: mediumvioletred;

		&:focus {
			outline: var(--pink-glamour) solid 0.2rem !important;
		}
	}

	.sign-up-form__button {
		position: relative;
	}

	.sign-up-form__button-text {
		background-color: transparent;
		pointer-events: none;
		user-select: none;
	}

	.sign-up-form__button-sending {
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 1.4rem;
	}

	.sign-up-form__agreement {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 1.1rem;
		line-height: 191%;
		text-align: center;
		color: var(--purple-heather);
		display: block;
		padding: 0 1.5rem;

		> a {
			font-weight: 700;
			color: var(--pink-glamour);
		}

		@media (width >= 1440px) {
			padding: unset;
		}
	}

	.sign-up-form__error-icon {
		position: absolute;
		top: 50%;
		right: 2.7rem;
		transform: translateY(-50%);
	}

	.sign-up-form__error-message {
		position: absolute;
		bottom: -1.8rem;
		right: 0;
		font-family: var(--font-family), sans-serif;
		font-style: italic;
		font-weight: 500;
		font-size: 1.1rem;
		text-align: right;
		color: var(--pink-glamour);
	}
</style>
