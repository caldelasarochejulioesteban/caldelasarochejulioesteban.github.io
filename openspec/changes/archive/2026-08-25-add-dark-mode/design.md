## Context

The application is a small Angular portfolio page with a single shared stylesheet. It currently uses a fixed light palette and does not define a theme system or persistence strategy.

## Goals / Non-Goals

**Goals:**
- Add a user-accessible dark mode toggle.
- Honor system preference when no explicit choice exists.
- Keep the interface readable and accessible in both modes.

**Non-Goals:**
- Synchronizing theme state to a backend or user account.
- Reworking the broader app architecture beyond the UI surface.
- Adding additional themes beyond light and dark.

## Decisions

- Use a CSS variable-based theme model so the app can switch presentation without duplicating component structure.
- Store the selected theme in `localStorage` to preserve the user’s choice across reloads while keeping the implementation lightweight.
- Prefer `prefers-color-scheme: dark` as the default only when no stored preference exists, preventing a surprising first-load experience.
- Keep the toggle and state logic at the app component level to minimize scope and avoid introducing broader state management.

### Alternatives considered

- Inline color overrides on individual elements: rejected because it would multiply styling changes and make maintenance harder.
- A server-side preference store: rejected because the app is static and does not have a backend or user session model.

## Risks / Trade-offs

- [Theme flash on first load] → Initialize the theme as early as possible in the app lifecycle and apply the stored or system preference before the main UI is painted.
- [Contrast drift] → Validate the shared variables against accessible foreground/background ratios and adjust the palette before release.

## Migration Plan

1. Add a small theme state model in the Angular app and initialize it from storage or the browser preference.
2. Replace the fixed color tokens with theme-aware CSS variables and update the main layout surfaces.
3. Add the toggle control and persist the selected mode to `localStorage`.
4. Verify the app renders correctly in both modes and that reloading preserves the user choice.

## Open Questions

None at this stage; the design decision is small and contained to the existing portfolio UI.
