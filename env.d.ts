/// <reference path="../.astro/types.d.ts" />

// NOTE: Should probably be using wrangler here
// https://docs.astro.build/en/guides/integrations-guide/cloudflare/
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;
