import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    integrations: [icon(), sitemap()],
    output: "static",
    site: "https://wheelercodingclub.github.io",
    trailingSlash: "ignore",
    redirects: {
        // Redirect for legacy reasons.
        "/wheeler-coding-club/": "/",
    },
});
