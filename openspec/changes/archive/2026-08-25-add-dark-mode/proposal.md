## Why

The portfolio currently has a single light presentation, which makes the page harder to read in low-light settings and does not align with the modern expectations for accessible personal sites. Adding a dark mode option improves readability while preserving a comfortable default experience.

## What Changes

- Add a theme toggle for the CV landing page so visitors can switch between light and dark presentation modes.
- Default the app to the user’s browser preference when no explicit choice is stored.
- Persist the selected mode in the browser so the choice remains stable across reloads.
- Update the shared surface colors and focus/contrast treatment to maintain accessibility in both themes.

## Capabilities

### New Capabilities
- `dark-mode`: user-controlled theme switching and persistence for the portfolio interface.

### Modified Capabilities
- None.

## Impact

- App presentation and styling in the Angular UI layer.
- Browser-local persisted preference handling.
- No backend, API, or data model changes are required.
