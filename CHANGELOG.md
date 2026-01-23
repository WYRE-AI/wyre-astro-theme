# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-01-23

### Fixed

- Fixed light mode readability - text was white-on-white due to incorrect gray scale mapping
- Added explicit `--sl-color-text` and `--sl-color-text-invert` for both light and dark modes
- Fixed accent color contrast ratios (accent-low/accent-high) for proper Starlight UI rendering
- Consolidated body text color to use Starlight's `--sl-color-text` variable consistently

## [1.0.1] - 2026-01-21

### Fixed

- Fixed CSS import path in preset.js to use correct package name (@wyre-technology/astro-theme)

## [1.0.0] - 2026-01-20

### Added

- Initial release of WYRE Astro theme
- Complete WYRE brand design system
  - Cyan primary accent (#00c9db)
  - Yellow CTA accent (#ede947)
  - Oswald headings (light weight, uppercase)
  - Nunito Sans body text
- Starlight preset with sensible defaults
- Config helper for easy customization
- Full dark mode support
- Responsive design with mobile optimizations
- Accessible focus states and reduced motion support
- Print styles
- Pagefind search styling
