# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-08-27

### Changed

- **Renamed to `@wyre-ai/astro-theme` and moved to the `WYRE-AI` org.** The repo
  transferred from `wyre-technology/wyre-astro-theme` to
  `WYRE-AI/wyre-astro-theme`, and the package scope followed, because a GitHub
  Packages scope is tied to the owning org and cannot be published across one.
  This was the last piece of the WYRE-AI migration still living in the old org,
  and it was actively breaking consumers: a workflow's `GITHUB_TOKEN` can only
  read packages owned by its own org, so `WYRE-AI/conduit`'s docs build started
  failing with `403 permission_denied: read_package` the moment conduit moved.
  Both consumers (`WYRE-AI/conduit`, `WYRE-AI/wyre-ai`) now resolve the theme
  with the stock `GITHUB_TOKEN` and no cross-org PAT.

  **Migrating:** change the dependency name and the `.npmrc` scope line from
  `@wyre-technology` to `@wyre-ai`. Nothing else changes — exports, preset, and
  styles are byte-identical to 1.1.0.

## [1.0.4] - 2026-01-23

### Fixed

- Fixed active sidebar link text color being unreadable in light mode

## [1.0.3] - 2026-01-23

### Fixed

- Rewrote color system to match Starlight's semantic color architecture
- Dark mode colors now in `:root` (Starlight's default), light mode in `:root[data-theme='light']`
- Properly inverted semantic names: "white" = text/foreground, "black" = background in both modes
- Fixed unlayered CSS overriding Starlight's `@layer` color inversions for light mode

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
