<script lang="ts" setup></script>

<template>
	<main class="main">
		<slot />
	</main>
</template>

<style scoped>
	.main {
		background: center / cover no-repeat url("/images/raster/background-mobile-1x.jpg");
	}

	@supports (background-image: url("data:image/webp;")) {
		.main {
			background: center / cover no-repeat url("/images/raster/background-mobile-1x.webp");
		}
	}

	@media (-webkit-min-device-pixel-ratio: 2),
	(min-resolution: 192dpi) {
		.main {
			background: center / cover no-repeat url("/images/raster/background-mobile-2x.jpg");
		}

		@supports (background-image: url("data:image/webp;")) {
			.main {
				background: center / cover no-repeat url("/images/raster/background-mobile-2x.webp");
			}
		}
	}

	@media (min-width: 768px) {
		.main {
			background: center / cover no-repeat url("/images/raster/background-desktop-1x.jpg");
		}

		@supports (background-image: url("data:image/webp;")) {
			.main {
				background: center / cover no-repeat url("/images/raster/background-desktop-1x.webp");
			}
		}
	}

	@media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
	(min-width: 768px) and (min-resolution: 192dpi) {
		.main {
			background: center / cover no-repeat url("/images/raster/background-desktop-2x.jpg");
		}

		@supports (background-image: url("data:image/webp;")) {
			.main {
				background: center / cover no-repeat url("/images/raster/background-desktop-2x.webp");
			}
		}
	}
</style>
