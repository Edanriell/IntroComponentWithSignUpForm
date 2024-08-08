import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), vueDevTools()],
	resolve: {
		alias: {
			"@app": fileURLToPath(new URL("./src/app", import.meta.url)),
			"@entities": fileURLToPath(new URL("./src/entities", import.meta.url)),
			"@features": fileURLToPath(new URL("./src/features", import.meta.url)),
			"@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
			"@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
			"@widgets": fileURLToPath(new URL("./src/widgets", import.meta.url))
		}
	}
});
