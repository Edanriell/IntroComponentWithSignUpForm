<script lang="ts" setup>
	import { CreateUserForm } from "@features/create-user";
	import { MainLayout } from "@widgets/layouts/main";
	import { Banner } from "@shared/ui/banner";
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
			<Banner
				classes="intro-section__banner"
				highlighted-text="Try it free 7 days"
				text=" then $20/mo. thereafter"
			/>
			<CreateUserForm class="intro-section__sign-up-form" />
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
</style>
