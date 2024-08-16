<script lang="ts" setup>
	import { reactive, toRef } from "vue";

	import { createUser } from "@entities/user/api";

	import { Button } from "@shared/ui/button";
	import { Input } from "@shared/ui/input";
	import { Icon } from "@shared/ui/icon";
	import { Spinner } from "@shared/ui/spinner";

	import { formInitialState, type FormInputState, type FormState } from "./model/store";
	import {
		clearFormSubmissionResultMessages,
		validateEmailInput,
		validateFirstNameInput,
		validateForm,
		validateLastNameInput,
		validatePasswordInput
	} from "./model/validation";

	type Props = {
		classes?: string;
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: ""
	});

	const formState = reactive<FormState>(formInitialState);

	const createInputFieldRefs = <T extends FormInputState>(field: T) => {
		return {
			value: toRef(field, "value"),
			isValid: toRef(field, "isValid"),
			errorMessage: toRef(field, "errorMessage")
		};
	};

	const firstName = createInputFieldRefs<typeof formState.firstNameInput>(formState.firstNameInput);
	const lastName = createInputFieldRefs<typeof formState.lastNameInput>(formState.lastNameInput);
	const email = createInputFieldRefs<typeof formState.emailInput>(formState.emailInput);
	const password = createInputFieldRefs<typeof formState.passwordInput>(formState.passwordInput);
	const form = {
		isSubmitting: toRef(formState.form, "isSubmitting"),
		isValid: toRef(formState.form, "isValid"),
		errorMessage: toRef(formState.form, "errorMessage"),
		successMessage: toRef(formState.form, "successMessage")
	};

	const handleCreateUserFormInputChange = (
		field: { value: any; isValid: any; errorMessage: any },
		validator: Function,
		event: Event
	) => {
		field.value.value = (event.target as HTMLInputElement).value;

		validator({
			value: field.value.value,
			isValid: field.isValid,
			errorMessage: field.errorMessage
		});

		validateForm({ form, firstName, lastName, email, password });
	};

	const handleCreateUserFormSubmit = async (event: Event) => {
		event.preventDefault();

		if (form.isValid.value === "invalid") return;

		clearFormSubmissionResultMessages(form);

		try {
			form.isSubmitting.value = "submitting";

			await createUser({
				firstName: firstName.value.value,
				lastName: lastName.value.value,
				email: email.value.value,
				password: password.value.value
			});

			form.isSubmitting.value = "submitted";
			form.successMessage.value = "Data sent successfully.";
		} catch (error) {
			if (error instanceof Error) {
				console.error("Error message:", error.message);

				const splitMessage = error.message.split('Message: "');
				form.errorMessage.value =
					splitMessage.length > 1
						? splitMessage[1].replace(/"$/, "")
						: "An unexpected error occurred.";
			} else {
				console.error("Unexpected error:", error);
			}

			form.isSubmitting.value = "unsubmitted";
		}
	};

	const formInputClasses = (isValid: any) => {
		return () => {
			return {
				"input-error": isValid === "invalid",
				input: true
			};
		};
	};

	const formFieldClasses = (isValid: any) => {
		return () => {
			return {
				"sign-up-form__field-error": isValid === "invalid",
				"sign-up-form__field": true
			};
		};
	};
</script>

<template>
	<form :class="props.classes + ' sign-up-form'" method="POST" @submit="handleCreateUserFormSubmit">
		<div class="sign-up-form__content">
			<Input
				:classes="formInputClasses(firstName.isValid.value)()"
				:field-classes="formFieldClasses(firstName.isValid.value)()"
				description="Name"
				name="name"
				placeholder="First Name"
				type="text"
				@input="
					(event) => handleCreateUserFormInputChange(firstName, validateFirstNameInput, event)
				"
			>
				<Icon
					v-if="firstName.isValid.value === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="firstName.isValid.value === 'invalid' && firstName.errorMessage.value!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ firstName.errorMessage }}
				</p>
			</Input>
			<Input
				:classes="formInputClasses(lastName.isValid.value)()"
				:field-classes="formFieldClasses(lastName.isValid.value)()"
				description="Last Name"
				name="last-name"
				placeholder="Last Name"
				type="text"
				@change="(event) => handleCreateUserFormInputChange(lastName, validateLastNameInput, event)"
			>
				<Icon
					v-if="lastName.isValid.value === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="lastName.isValid.value === 'invalid' && lastName.errorMessage.value!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ lastName.errorMessage }}
				</p>
			</Input>
			<Input
				:classes="formInputClasses(email.isValid.value)()"
				:field-classes="formFieldClasses(email.isValid.value)()"
				description="Email Address"
				name="email-address"
				placeholder="Email Address"
				type="email"
				@change="(event) => handleCreateUserFormInputChange(email, validateEmailInput, event)"
			>
				<Icon
					v-if="email.isValid.value === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="email.isValid.value === 'invalid' && email.errorMessage.value!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ email.errorMessage }}
				</p>
			</Input>
			<Input
				:classes="formInputClasses(password.isValid.value)()"
				:field-classes="formFieldClasses(password.isValid.value)()"
				description="Password"
				name="password"
				placeholder="Password"
				type="password"
				@change="(event) => handleCreateUserFormInputChange(password, validatePasswordInput, event)"
			>
				<Icon
					v-if="password.isValid.value === 'invalid'"
					classes="sign-up-form__error-icon"
					icon-type="error"
				/>
				<p
					v-if="password.isValid.value === 'invalid' && password.errorMessage.value!.length > 1"
					class="sign-up-form__error-message"
				>
					{{ password.errorMessage }}
				</p>
			</Input>
			<Button
				:disabled="form.isValid.value === 'invalid' || form.isValid.value === 'idle'"
				classes="sign-up-form__button"
				type="submit"
			>
				<p
					v-if="
						form.isSubmitting.value === 'idle' ||
						form.isSubmitting.value === 'submitted' ||
						form.isSubmitting.value === 'unsubmitted'
					"
					class="sign-up-form__button-text"
				>
					Claim your free trial
				</p>
				<div
					v-else-if="form.isSubmitting.value === 'submitting'"
					class="sign-up-form__button-sending"
				>
					<p class="sign-up-form__button-text">Sending data</p>
					<Spinner />
				</div>
			</Button>
			<div
				v-if="
					form.isValid.value !== 'idle' &&
					form.isSubmitting.value !== 'idle' &&
					form.isSubmitting.value !== 'submitting'
				"
			>
				<p
					v-if="form.errorMessage || form.isValid.value === 'invalid'"
					class="sign-up-form__form-error-message"
				>
					{{ form.errorMessage }}
				</p>
				<p
					v-if="form.successMessage || form.isValid.value === 'valid'"
					class="sign-up-form__form-success-message"
				>
					{{ form.successMessage }}
				</p>
			</div>
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
