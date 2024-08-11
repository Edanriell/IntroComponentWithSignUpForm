<script lang="ts" setup>
	type Props = {
		classes?: string;
		name: string;
		description: string;
		placeholder: string;
		type?: "text" | "password" | "email";
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: "",
		type: "text"
	});
</script>

<template>
	<div :class="props.classes">
		<label :for="props.name" class="visually-hidden">{{ props.description }}</label>
		<input
			:id="props.name"
			:name="props.name"
			:placeholder="props.placeholder"
			:type="props.type"
			class="input"
		/>
		<slot />
	</div>
</template>

<style scoped>
	.input {
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
</style>
