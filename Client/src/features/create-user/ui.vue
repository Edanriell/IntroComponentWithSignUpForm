<script lang="ts" setup>
	import { reactive, toRef } from "vue";

	import { Button } from "@shared/ui/button";
	import { Input } from "@shared/ui/input";

	type Props = {
		classes?: string;
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: ""
	});

	type FormState = {
		nameInput: {
			value: string;
			isValid: boolean;
			errorMessage: string | null;
		};
		surnameInput: {
			value: string;
			isValid: boolean;
			errorMessage: string | null;
		};
		emailInput: {
			value: string;
			isValid: boolean;
			errorMessage: string | null;
		};
		passwordInput: {
			value: string;
			isValid: boolean;
			errorMessage: string | null;
		};
	};

	const formInitialState: FormState = {
		nameInput: {
			value: "",
			isValid: false,
			errorMessage: null
		},
		surnameInput: {
			value: "",
			isValid: false,
			errorMessage: null
		},
		emailInput: {
			value: "",
			isValid: false,
			errorMessage: null
		},
		passwordInput: {
			value: "",
			isValid: false,
			errorMessage: null
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

	const handleNameInputChange = (event: Event) => {
		nameInputValue.value = (event.target as HTMLInputElement).value;
	};

	const handleSurnameInputChange = (event: Event) => {
		surnameInputValue.value = (event.target as HTMLInputElement).value;
	};

	const handleEmailInputChange = (event: Event) => {
		emailInputValue.value = (event.target as HTMLInputElement).value;
	};

	const handlePasswordInputChange = (event: Event) => {
		passwordInputValue.value = (event.target as HTMLInputElement).value;
	};

	const handleCreateUserFormSubmit = (event: Event) => {
		event.preventDefault();

		console.log(formState);

		for (const [_, { isValid }] of Object.entries(formState)) {
			if (isValid === false) return;
		}
	};
</script>

<template>
	<form :class="props.classes + ' sign-up-form'" method="POST" @submit="handleCreateUserFormSubmit">
		<div class="sign-up-form__content">
			<Input
				classes="sign-up-form__field"
				description="Name"
				name="name"
				placeholder="First Name"
				type="text"
				@change="handleNameInputChange"
			/>
			<Input
				classes="sign-up-form__field"
				description="Last Name"
				name="last-name"
				placeholder="Last Name"
				type="text"
				@change="handleSurnameInputChange"
			/>
			<Input
				classes="sign-up-form__field"
				description="Email Address"
				name="email-address"
				placeholder="Email Address"
				type="email"
				@change="handleEmailInputChange"
			/>
			<Input
				classes="sign-up-form__field"
				description="Password"
				name="password"
				placeholder="Password"
				type="password"
				@change="handlePasswordInputChange"
			/>
			<Button classes="sign-up-form__button" text="Claim your free trial" type="submit" />
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

	.sign-up-form__button {
		position: relative;
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
</style>
