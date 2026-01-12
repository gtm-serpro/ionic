# eProcesso - AI Coding Guidelines

## Project Overview
This is an Ionic Angular mobile application for the Brazilian government's electronic process system (eProcesso). It provides administrative process search functionality with a messaging interface, built using the official Gov.br Design System.

## Architecture
- **Framework**: Angular 20 + Ionic 8 for mobile UI
- **Mobile**: Capacitor 8 for native iOS/Android deployment
- **Styling**: SCSS with Gov.br Design System theme (`src/theme/ds-gov-theme.scss`)
- **Language**: Portuguese (Brazilian)
- **Structure**: Lazy-loaded feature modules under `src/app/`

## Key Components
- **Pages**: `home/`, `components-showcase/`, `view-message/` (lazy loaded)
- **Components**: `message/` (reusable message display component)
- **Services**: `data.service.ts` (mock data provider for messages)
- **Routing**: `app-routing.module.ts` with lazy loading strategy

## Styling Conventions
- **Font**: Rawline font family (imported in `src/global.scss`)
- **Colors**: Gov.br palette mapped to Ionic CSS variables (see `src/theme/ds-gov-theme.scss`)
- **Components**: Use `.br-button` for primary/secondary buttons, `.ds-card` for cards
- **Utilities**: Spacing classes like `.mb-2`, `.p-3` (defined in `src/global.scss`)
- **Accessibility**: Focus outlines and transitions applied globally

## Development Workflow
- **Serve**: `npm start` or `ng serve` (web), `ionic serve` (with live reload)
- **Build**: `ng build` for web, Capacitor commands for mobile
- **Test**: `ng test` (Karma/Jasmine)
- **Lint**: `ng lint` (ESLint with Angular rules)

## Code Patterns
- **Modules**: Feature modules with routing (e.g., `home.module.ts`)
- **Services**: Injectable services with `providedIn: 'root'`
- **Data Models**: Interfaces defined in services (e.g., `Message` interface)
- **Navigation**: Router-based with `router.navigate()` for programmatic navigation
- **Mock Data**: Static arrays in services for development (replace with API calls later)

## Mobile Considerations
- **Capacitor Config**: `capacitor.config.ts` with appId `io.ionic.starter`
- **Plugins**: Core Capacitor plugins (app, haptics, keyboard, status-bar) available
- **Responsive**: Mobile-first design with Ionic components

## File Organization
- `src/global.scss`: Global styles and Gov.br theme imports
- `src/theme/`: Custom theme files (ds-gov-theme.scss, variables.scss)
- `src/environments/`: Environment configurations
- `resources/`: Mobile app icons and splash screens</content>
<parameter name="filePath">/Users/gtm/Desktop/ionic/eprocesso/.github/copilot-instructions.md