import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    integrations: [sitemap()],
    output: "static",
    site: "https://wheelercodingclub.github.io",
    trailingSlash: "always",
    redirects: {
        // Redirect for legacy reasons.
        "/wheeler-coding-club/": "/",
    },
});
