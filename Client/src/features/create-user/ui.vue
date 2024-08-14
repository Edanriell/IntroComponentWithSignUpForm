<script lang="ts" setup>
	import { computed, reactive, toRef } from "vue";

	import { Button } from "@shared/ui/button";
	import { Input } from "@shared/ui/input";
	import { Icon } from "@shared/ui/icon";
	import { Spinner } from "@shared/ui/spinner";

	import { formInitialState, type FormState } from "./model/store";
	import {
		validateEmailInput,
		validateFirstNameInput,
		validateLastNameInput,
		validatePasswordInput
	} from "./model/validation";
	import { createUser } from "@entities/user/api";

	type Props = {
		classes?: string;
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: ""
	});

	const formState = reactive<FormState>(formInitialState);

	const firstNameInputValue = toRef(formState.firstNameInput, "value");
	const lastNameInputValue = toRef(formState.lastNameInput, "value");
	const emailInputValue = toRef(formState.emailInput, "value");
	const passwordInputValue = toRef(formState.passwordInput, "value");

	const isFirstNameInputValid = toRef(formState.firstNameInput, "isValid");
	const isLastNameInputValid = toRef(formState.lastNameInput, "isValid");
	const isEmailInputValid = toRef(formState.emailInput, "isValid");
	const isPasswordInputValid = toRef(formState.passwordInput, "isValid");

	const firstNameInputErrorMessage = toRef(formState.firstNameInput, "errorMessage");
	const lastNameInputErrorMessage = toRef(formState.lastNameInput, "errorMessage");
	const emailInputErrorMessage = toRef(formState.emailInput, "errorMessage");
	const passwordInputErrorMessage = toRef(formState.passwordInput, "errorMessage");

	const isFormSubmitting = toRef(formState.form, "isSubmitting");
	const isFormValid = toRef(formState.form, "isValid");
	const formErrorMessage = toRef(formState.form, "errorMessage");
	const formSuccessMessage = toRef(formState.form, "successMessage");

	const handleFirstNameInputChange = (event: Event) => {
		firstNameInputValue.value = (event.target as HTMLInputElement).value;
		validateFirstNameInput({
			value: firstNameInputValue.value,
			isValid: isFirstNameInputValid,
			errorMessage: firstNameInputErrorMessage
		});
	};

	const handleLastNameInputChange = (event: Event) => {
		lastNameInputValue.value = (event.target as HTMLInputElement).value;
		validateLastNameInput({
			value: lastNameInputValue.value,
			isValid: isLastNameInputValid,
			errorMessage: lastNameInputErrorMessage
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

	const handleCreateUserFormSubmit = async (event: Event) => {
		event.preventDefault();

		if (
			isFirstNameInputValid.value === "valid" ||
			isLastNameInputValid.value === "valid" ||
			isEmailInputValid.value === "valid" ||
			isPasswordInputValid.value === "valid"
		) {
			isFormValid.value = "valid";
		} else {
			isFormValid.value = "invalid";
		}

		if (isFormValid.value === "invalid") return;

		try {
			isFormSubmitting.value = "submitting";

			await createUser({
				firstName: firstNameInputValue.value,
				lastName: lastNameInputValue.value,
				email: emailInputValue.value,
				password: passwordInputValue.value
			});

			isFormSubmitting.value = "submitted";
			formSuccessMessage.value = `Data successfully submitted.`;
		} catch (error) {
			if (error instanceof Error) {
				console.error("Error message:", error.message);
				formErrorMessage.value = error.message;
			} else {
				console.error("Unexpected error:", error);
			}

			isFormSubmitting.value = "unsubmitted";
		}
	};

	const firstNameInputFieldClasses = computed(() => ({
		"sign-up-form__field-error": isFirstNameInputValid.value === "invalid",
		"sign-up-form__field": true
	}));
	const lastNameInputFieldClasses = computed(() => ({
		"sign-up-form__field-error": isLastNameInputValid.value === "invalid",
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

	const firstNameInputClasses = computed(() => ({
		"input-error": isFirstNameInputValid.value === "invalid",
		input: true
	}));
	const lastNameInputClasses = computed(() => ({
		"input-error": isLastNameInputValid.value === "invalid",
		input: true
	}));
	const emailInputClasses = computed(() => ({
		"input-error": isEmailInputValid.value === "invalid",
		input: true
	}));
	const passwordInputClasses = computed(() => ({
		"input-error": isPasswordInputValid.value === "invalid",
		input: true
	}));
</script>

<template>
	<form :class="props.classes + ' sign-up-form'" method="POST" @submit="handleCreateUserFormSubmit">
		<div class="sign-up-form__content">
			<Input
				:classes="firstNameInputClasses"
				:field-classes="firstNameInputFieldClasses"
				description="Name"
				name="name"
				placeholder="First Name"
				type="text"
				@change="handleFirstNameInputChange"
			>
				<Icon
					v-if="isFirstNameInputValid === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="isFirstNameInputValid === 'invalid' && firstNameInputErrorMessage!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ firstNameInputErrorMessage }}
				</p>
			</Input>
			<Input
				:classes="lastNameInputClasses"
				:field-classes="lastNameInputFieldClasses"
				description="Last Name"
				name="last-name"
				placeholder="Last Name"
				type="text"
				@change="handleLastNameInputChange"
			>
				<Icon
					v-if="isLastNameInputValid === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="isLastNameInputValid === 'invalid' && lastNameInputErrorMessage!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ lastNameInputErrorMessage }}
				</p>
			</Input>
			<Input
				:classes="emailInputClasses"
				:field-classes="emailInputFieldClasses"
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
				:field-classes="passwordInputFieldClasses"
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
			<Button :disabled="isFormValid === 'invalid'" classes="sign-up-form__button" type="submit">
				<p
					v-if="
						isFormSubmitting === 'idle' ||
						isFormSubmitting === 'submitted' ||
						isFormSubmitting === 'unsubmitted'
					"
					class="sign-up-form__button-text"
				>
					Claim your free trial
				</p>
				<div v-else-if="isFormSubmitting === 'submitting'" class="sign-up-form__button-sending">
					<p class="sign-up-form__button-text">Sending data</p>
					<Spinner />
				</div>
			</Button>
			<p
				v-if="formErrorMessage || isFormValid === 'invalid'"
				class="sign-up-form__form-error-message"
			>
				{{ formErrorMessage }}
			</p>
			<p
				v-if="formSuccessMessage || isFormValid === 'valid'"
				class="sign-up-form__form-success-message"
			>
				{{ formSuccessMessage }}
			</p>
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

	.sign-up-form__form-error-message {
		text-align: right;
		font-family: var(--font-family), sans-serif;
		font-style: italic;
		font-weight: 500;
		font-size: 1.1rem;
		color: var(--pink-glamour);
	}

	.sign-up-form__form-success-message {
		text-align: right;
		font-family: var(--font-family), sans-serif;
		font-style: italic;
		font-weight: 500;
		font-size: 1.1rem;
		color: var(--dark-shamrock);
	}
</style>
