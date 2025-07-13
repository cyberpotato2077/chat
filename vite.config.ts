/// <reference types="vitest" />

import path from "node:path";
import { fileURLToPath } from "node:url";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [TanStackRouterVite({ autoCodeSplitting: true }), viteReact()],
	test: {
		globals: true,
		environment: "jsdom",
	},
	resolve: {
		alias: {
			"@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
		},
	},
});
