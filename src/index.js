/**
 * WYRE Astro Theme
 *
 * A Starlight theme for WYRE Technology documentation sites.
 *
 * @example
 * // In astro.config.mjs
 * import { wyreStarlightPreset } from '@wyre/astro-theme/preset';
 *
 * export default defineConfig({
 *   integrations: [
 *     starlight({
 *       ...wyreStarlightPreset,
 *       title: 'Your Site Title',
 *       // ... other options
 *     }),
 *   ],
 * });
 */

export { wyreStarlightPreset, wyreStarlightConfig } from './preset.js';

// Re-export CSS path for manual imports
export const themeCssPath = new URL('./styles/theme.css', import.meta.url).pathname;
