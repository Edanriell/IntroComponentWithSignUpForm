<script lang="ts" setup>
	type Props = {
		classes?: string;
		iconType?: string;
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: "",
		iconType: "error"
	});
</script>

<template>
	<div v-if="props.iconType === 'error'" :class="props.classes + ' error-icon'">
		<span class="visually-hidden">Error</span>
		<img alt="" height="13" src="/images/vector/icons/exclamation-mark.svg" width="2" />
	</div>
</template>

<style scoped>
	.error-icon {
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 50%;
		background-color: var(--pink-glamour);
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
