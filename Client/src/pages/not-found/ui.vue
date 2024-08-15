<script lang="ts" setup>
	import { MainLayout } from "@widgets/layouts/main";
</script>

<template>
	<MainLayout>
		<section class="not-found-section">
			<h1 class="not-found-section__title">Oops! Page Not Found</h1>
			<p class="not-found-section__text">It seems the page you are looking for doesn't exist.</p>
			<p class="not-found-section__text">
				You might have mistyped the address, or the page has moved to a new URL.
			</p>
			<p class="not-found-section__text">
				<a class="not-found-section__link" href="/">Return to Home</a> or try searching for what you
				need.
			</p>
		</section>
	</MainLayout>
</template>

<style scoped>
	.not-found-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.not-found-section__title {
		font-family: var(--font-family), sans-serif;
		font-weight: 700;
		font-size: 2.8rem;
		line-height: 129%;
		letter-spacing: -0.01em;
		text-align: center;
		color: var(--white);
		margin-bottom: 3.2rem;

		@media (width >= 1440px) {
			font-size: 5rem;
			line-height: 110%;
			text-align: left;
		}
	}

	.not-found-section__text {
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 1.6rem;
		line-height: 162%;
		text-align: center;
		color: var(--white);
	}

	.not-found-section__link {
		font-family: var(--font-family), sans-serif;
		font-weight: 500;
		font-size: 1.6rem;
		line-height: 162%;
		text-align: center;
		color: var(--martinique);
	}
</style>
