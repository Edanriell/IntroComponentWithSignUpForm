<script lang="ts" setup>
	import { MainLayout } from "@widgets/layouts/main";
</script>

<template>
	<MainLayout>
		<section class="intro-section">
			<div class="intro-section__text-content">
				<h1 class="intro-section__title">Learn to code by watching others</h1>
				<p class="intro-section__text">
					See how experienced developers solve problems in real-time. Watching scripted tutorials is
					great, but understanding how developers think is invaluable.
				</p>
			</div>
			<div class="intro-section__banner banner">
				<p class="banner__text"><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
			</div>
			<form class="intro-section__sign-up-form sign-up-form" method="POST">
				<div class="sign-up-form__content">
					<div class="sign-up-form__field">
						<label class="visually-hidden" for="name">Name</label>
						<input
							id="name"
							class="sign-up-form__input"
							name="name"
							placeholder="First Name"
							type="text"
						/>
					</div>
					<div class="sign-up-form__field">
						<label class="visually-hidden" for="last-name">Last Name</label>
						<input
							id="last-name"
							class="sign-up-form__input"
							name="last-name"
							placeholder="Last Name"
							type="text"
						/>
					</div>
					<div class="sign-up-form__field">
						<label class="visually-hidden" for="email-address">Email Address</label>
						<input
							id="email-address"
							class="sign-up-form__input"
							name="email-address"
							placeholder="Email Address"
							type="email"
						/>
					</div>
					<div class="sign-up-form__field">
						<label class="visually-hidden" for="password">Password</label>
						<input
							id="password"
							class="sign-up-form__input"
							name="password"
							placeholder="Password"
							type="password"
						/>
					</div>
					<button class="sign-up-form__button button" type="submit">Claim your free trial</button>
				</div>
				<small class="sign-up-form__agreement"
					>By clicking the button, you are agreeing to our
					<a href="#" target="_blank">Terms and Services</a></small
				>
			</form>
		</section>
	</MainLayout>
</template>

<style scoped>
	.intro-section {
		padding: 8.8rem 2.4rem 6.8rem 2.4rem;

		@media (width >= 1440px) {
			padding: 0 16.5rem 0 16.5rem;
			display: grid;
			grid-template-columns: 52.5rem 54rem;
			grid-template-rows: repeat(2, auto);
			column-gap: 4.5rem;
			align-content: center;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
	}

	.intro-section__text-content {
		margin-bottom: 6.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 2.1rem;
		max-width: 68rem;
		width: 100%;
		margin-left: auto;
		margin-right: auto;

		@media (width >= 1440px) {
			grid-column: 1 / 2;
			grid-row: 1 / -1;
			padding-top: unset;
			margin-bottom: unset;
			row-gap: 2.2rem;
			max-width: unset;
		}
	}

	.intro-section__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 2.8rem;
		line-height: 129%;
		letter-spacing: -0.01em;
		text-align: center;
		color: var(--white);

		@media (width >= 1440px) {
			font-size: 5rem;
			line-height: 110%;
			text-align: left;
		}
	}

	.intro-section__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 1.6rem;
		line-height: 162%;
		text-align: center;
		color: var(--white);

		@media (width >= 1440px) {
			text-align: left;
		}
	}

	.intro-section__banner {
		position: relative;
		margin-bottom: 2.4rem;
		max-width: 52rem;
		margin-left: auto;
		margin-right: auto;

		@media (width >= 1440px) {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
			max-width: unset;
			margin-left: unset;
			margin-right: unset;
		}
	}

	.banner {
		border-radius: 1rem;
		box-shadow: 0 0.8rem 0 0 rgba(0, 0, 0, 0.15);
		background: var(--coronation-blue);
		padding: 1.8rem 6.6rem;

		@media (width >= 1440px) {
			padding: 1.7rem 0;
		}
	}

	.banner__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 173%;
		letter-spacing: 0.02em;
		text-align: center;
		color: var(--white);

		> strong {
			font-weight: 700;
		}
	}

	.intro-section__sign-up-form {
		position: relative;
		max-width: 52rem;
		margin-left: auto;
		margin-right: auto;

		@media (width >= 1440px) {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
			max-width: unset;
			margin-left: unset;
			margin-right: unset;
		}
	}

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

	.sign-up-form__input {
		border: 0.1rem solid var(--kingly-cloud);
		border-radius: 0.5rem;
		width: 100%;
		padding: 1.5rem 4.9rem 1.5rem 1.941rem;
		font-family: var(--font-family), sans-serif;
		font-weight: 600;
		font-size: 1.4rem;
		line-height: 186%;
		letter-spacing: 0.02em;
		color: var(--martinique);

		&::placeholder {
			opacity: 0.75;
		}

		@media (width >= 1440px) {
			padding: 1.5rem 4.9rem 1.5rem 3.2rem;
		}
	}

	.sign-up-form__button {
		position: relative;
	}

	.button {
		width: 100%;
		border-radius: 0.5rem;
		box-shadow: inset 0 -0.4rem 0 0 rgba(0, 0, 0, 0.09);
		background: var(--dark-shamrock);
		padding: 1.5rem 0 1.1rem 0;
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 1.5rem;
		line-height: 173%;
		letter-spacing: 0.07em;
		text-align: center;
		color: var(--white);
		text-transform: uppercase;
		cursor: pointer;
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
