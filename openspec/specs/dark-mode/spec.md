# dark-mode Specification

## Purpose
This capability allows visitors to use a comfortable dark theme for the portfolio and keeps their preference consistent across repeated visits.

## Requirements

### Requirement: Theme can be switched
The system SHALL provide a user-controlled toggle that changes the app between light and dark presentation modes.

#### Scenario: Toggle to dark mode
- **WHEN** the user activates the theme toggle
- **THEN** the app displays dark-mode colors and updated contrast across the main content and controls

#### Scenario: Toggle back to light mode
- **WHEN** the user reactivates the theme toggle
- **THEN** the app returns to the default light presentation without visual defects

### Requirement: Theme preference persists
The system SHALL remember the selected theme across page reloads for the same browser.

#### Scenario: Persist selected mode
- **WHEN** the user selects dark mode and reloads the page
- **THEN** the app restores dark mode automatically on the next load

#### Scenario: Respect browser default
- **WHEN** no explicit theme preference is stored and the browser reports a dark preference
- **THEN** the app uses dark mode by default until the user overrides it
