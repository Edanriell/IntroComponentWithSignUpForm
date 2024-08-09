<script lang="ts" setup>
	type Props = {
		classes?: string;
		highlightedText?: string;
		text: string;
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: "",
		highlightedText: ""
	});
</script>

<template>
	<div :class="props.classes + ' banner'">
		<p class="banner__text">
			<strong>{{ props.highlightedText }}</strong
			>{{ props.text }}
		</p>
	</div>
</template>

<style scoped>
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
</style>
