<script lang="ts" setup>
	import { Button } from "@shared/ui/button";
	import { Input } from "@shared/ui/input";

	type Props = {
		classes?: string;
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: ""
	});

	const handleCreateUserFormSubmit = (event: Event) => {
		event.preventDefault();
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
			/>
			<Input
				classes="sign-up-form__field"
				description="Last Name"
				name="last-name"
				placeholder="Last Name"
				type="text"
			/>
			<Input
				classes="sign-up-form__field"
				description="Email Address"
				name="email-address"
				placeholder="Email Address"
				type="email"
			/>
			<Input
				classes="sign-up-form__field"
				description="Password"
				name="password"
				placeholder="Password"
				type="password"
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
