<script lang="ts" setup>
	import gsap from "gsap";

	type Props = {
		classes?: string;
		type?: "button" | "submit" | "reset";
	};

	const props = withDefaults(defineProps<Props>(), {
		classes: "",
		type: "button"
	});

	const handleButtonMouseUp = (event: MouseEvent) => {
		gsap.to(event.target, {
			scale: 1.025,
			boxShadow: "inset 0 -0.4rem 0 0 rgba(0, 0, 0, 0.09)",
			backgroundColor: "hsl(154, 65%, 68%)",
			duration: 0.25,
			ease: "power2.out"
		});
	};

	const handleButtonMouseDown = (event: MouseEvent) => {
		gsap.to(event.target, {
			scale: 0.975,
			boxShadow: "inset 0 0rem 0 0 rgba(0, 0, 0, 0.09)",
			backgroundColor: "hsl(154, 65%, 48%)",
			duration: 0.25,
			ease: "power2.out"
		});
	};

	const handleButtonMouseEnter = (event: MouseEvent) => {
		gsap.to(event.target, {
			scale: 1.025,
			backgroundColor: "hsl(154, 65%, 68%)",
			duration: 0.25,
			ease: "power2.out"
		});
	};

	const handleButtonMouseLeave = (event: MouseEvent) => {
		gsap.to(event.target, {
			scale: 1,
			boxShadow: "inset 0 -0.4rem 0 0 rgba(0, 0, 0, 0.09)",
			backgroundColor: "hsl(154, 59%, 51%)",
			duration: 0.25,
			ease: "power2.out"
		});
	};

	const handleButtonTouchStart = (event: TouchEvent) => {
		gsap.to(event.target, {
			scale: 0.975,
			boxShadow: "inset 0 0rem 0 0 rgba(0, 0, 0, 0.09)",
			backgroundColor: "hsl(154, 65%, 48%)",
			duration: 0.25,
			ease: "power2.out"
		});
	};

	const handleButtonTouchEnd = (event: TouchEvent) => {
		gsap.to(event.target, {
			scale: 1,
			boxShadow: "inset 0 -0.4rem 0 0 rgba(0, 0, 0, 0.09)",
			backgroundColor: "hsl(154, 59%, 51%)",
			duration: 0.25,
			ease: "power2.out"
		});
	};
</script>

<template>
	<button
		:class="props.classes + ' button'"
		:type="props.type"
		@mousedown="handleButtonMouseDown"
		@mouseenter="handleButtonMouseEnter"
		@mouseleave="handleButtonMouseLeave"
		@mouseup="handleButtonMouseUp"
		@touchend="handleButtonTouchEnd"
		@touchstart="handleButtonTouchStart"
	>
		<slot />
	</button>
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
