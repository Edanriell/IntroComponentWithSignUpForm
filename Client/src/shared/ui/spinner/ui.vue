<script lang="ts" setup></script>

<template>
	<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
		<g stroke="white">
			<circle cx="12" cy="12" fill="none" r="9.5" stroke-linecap="round" stroke-width="3">
				<animate
					attributeName="stroke-dasharray"
					calcMode="spline"
					dur="1.125s"
					keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
					keyTimes="0;0.475;0.95;1"
					repeatCount="indefinite"
					values="0 150;42 150;42 150;42 150"
				/>
				<animate
					attributeName="stroke-dashoffset"
					calcMode="spline"
					dur="1.125s"
					keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
					keyTimes="0;0.475;0.95;1"
					repeatCount="indefinite"
					values="0;-16;-59;-59"
				/>
			</circle>
			<animateTransform
				attributeName="transform"
				dur="1.5s"
				repeatCount="indefinite"
				type="rotate"
				values="0 12 12;360 12 12"
			/>
		</g>
	</svg>
</template>

<style scoped></style>
