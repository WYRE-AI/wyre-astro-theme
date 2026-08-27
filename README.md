# @wyre-ai/astro-theme

WYRE Technology brand theme for Astro Starlight documentation sites.

## Installation

First, configure npm to use GitHub Packages for the `@wyre-ai` scope. Create or update `.npmrc` in your project:

```
@wyre-ai:registry=https://npm.pkg.github.com
```

Then install:

```bash
npm install @wyre-ai/astro-theme
```

## Usage

### Option 1: Using the Preset (Recommended)

The preset includes the theme CSS plus sensible defaults for WYRE sites:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { wyreStarlightPreset } from '@wyre-ai/astro-theme/preset';

export default defineConfig({
  integrations: [
    starlight({
      ...wyreStarlightPreset,
      title: 'Your Site Title',
      sidebar: [
        // your sidebar config
      ],
    }),
  ],
});
```

### Option 2: Using the Config Helper

For more control, use the config helper which merges your settings:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { wyreStarlightConfig } from '@wyre-ai/astro-theme/preset';

export default defineConfig({
  integrations: [
    starlight(wyreStarlightConfig({
      title: 'Your Site Title',
      sidebar: [...],
      // Your custom CSS will be added AFTER the WYRE theme
      customCss: ['./src/styles/my-overrides.css'],
    })),
  ],
});
```

### Option 3: CSS Only

If you just want the styles without the preset:

```js
// astro.config.mjs
export default defineConfig({
  integrations: [
    starlight({
      title: 'Your Site Title',
      customCss: ['@wyre-ai/astro-theme/styles/theme.css'],
    }),
  ],
});
```

## Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--sl-color-accent` | `#00c9db` | Primary cyan - links, focus states |
| `--wyre-yellow` | `#ede947` | CTA buttons, positive callouts |
| `--wyre-text` | `#3a3a3a` | Body text |

## Typography

- **Headings**: Oswald (weight 200-400, uppercase)
- **Body**: Nunito Sans (weight 400-600)

Fonts are **self-hosted** (v1.1.0+): variable-weight woff2 files (latin +
latin-ext subsets, SIL OFL 1.1 — see `src/fonts/OFL-NOTICE.txt`) ship inside
the package and are bundled by Astro/Vite when `theme.css` is imported. No
request ever goes to Google Fonts.

## CSS Custom Properties

The theme exposes these custom properties for additional customization:

```css
/* Spacing (4px grid) */
--wyre-space-1: 4px;
--wyre-space-2: 8px;
--wyre-space-3: 12px;
--wyre-space-4: 16px;
--wyre-space-6: 24px;
--wyre-space-8: 32px;

/* Border Radius */
--wyre-radius-sm: 4px;
--wyre-radius-md: 8px;
--wyre-radius-lg: 12px;
--wyre-radius-full: 30px;

/* Transitions */
--wyre-transition-fast: 150ms cubic-bezier(0.25, 1, 0.5, 1);
--wyre-transition-base: 200ms cubic-bezier(0.25, 1, 0.5, 1);
```

## Dark Mode

The theme fully supports Starlight's dark mode toggle. Colors are automatically adjusted for dark backgrounds.

## License

MIT
