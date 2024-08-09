<script lang="ts" setup>
	type Props = {
		classes?: string;
		type?: "button" | "submit" | "reset";
		text: string;
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: "",
		type: "button"
	});
</script>

<template>
	<button :class="props.classes + ' button'" :type="props.type">{{ props.text }}</button>
</template>

<style scoped>
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
</style>
