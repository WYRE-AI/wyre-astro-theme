/**
 * WYRE Starlight Preset
 *
 * Pre-configured Starlight options with WYRE branding.
 * Spread this into your starlight() config and override as needed.
 */

/**
 * Full WYRE Starlight configuration preset
 * Use this as a base and override specific options
 *
 * @example
 * starlight({
 *   ...wyreStarlightPreset,
 *   title: 'My WYRE Site',
 *   sidebar: [...],
 * })
 */
export const wyreStarlightPreset = {
  // Custom CSS - import the theme
  customCss: [
    '@wyre-technology/astro-theme/styles/theme.css',
  ],

  // Default head elements
  head: [
    {
      tag: 'meta',
      attrs: {
        name: 'theme-color',
        content: '#00c9db',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
    },
  ],

  // Table of contents defaults
  tableOfContents: {
    minHeadingLevel: 2,
    maxHeadingLevel: 3
  },

  // Enable last updated
  lastUpdated: true,
};

/**
 * WYRE Starlight config helper
 * Merges your config with WYRE defaults, allowing overrides
 *
 * @param {object} userConfig - Your Starlight configuration
 * @returns {object} Merged configuration
 *
 * @example
 * starlight(wyreStarlightConfig({
 *   title: 'My Site',
 *   sidebar: [...],
 *   customCss: ['./src/my-custom.css'], // Will be appended to WYRE styles
 * }))
 */
export function wyreStarlightConfig(userConfig = {}) {
  const { customCss: userCss = [], head: userHead = [], ...rest } = userConfig;

  return {
    ...wyreStarlightPreset,
    ...rest,
    // Merge custom CSS (WYRE first, then user)
    customCss: [
      ...wyreStarlightPreset.customCss,
      ...userCss,
    ],
    // Merge head elements
    head: [
      ...wyreStarlightPreset.head,
      ...userHead,
    ],
  };
}
