# Simon's Sigma Computing Plugins

A collection of custom plugins for Sigma Computing, deployed at [slequar.github.io/simons-sigmacomputing-plugins/](https://slequar.github.io/simons-sigmacomputing-plugins/).

This project showcases example plugins that integrate with the [@sigmacomputing/plugin](https://www.npmjs.com/package/@sigmacomputing/plugin) SDK to extend Sigma Computing's capabilities.

## Available Plugins

- **Clock Plugin** - A timer-based plugin that executes actions at regular intervals with configurable tick rates
- **OnLoad Plugin** - An initialization plugin that triggers actions when loaded with optional delay

Visit the [deployed site](https://slequar.github.io/simons-sigmacomputing-plugins/) to get the plugin URLs for use in Sigma Computing.

## Tech Stack

- **React 19** with TypeScript for type-safe component development
- **Vite** for fast development and optimized builds
- **React Router** for multi-page navigation
- **React Compiler** enabled for automatic performance optimizations
- **ESLint & Prettier** for code quality and formatting
- **Custom Theme System** with centralized color, typography, and spacing configuration

## Project Structure

- `src/plugins/` - Plugin implementations
- `src/pages/` - Landing page and plugin views
- `src/styles/` - Global styles and theme configuration
- `src/types.ts` - TypeScript type definitions

## Getting Started

### Development

```bash
yarn dev
```

Starts the development server with hot module replacement (HMR).

### Build

```bash
yarn build
```

Builds the application for production using TypeScript and Vite.

### Linting & Formatting

```bash
yarn lint      # Run ESLint
yarn format    # Format code with Prettier
```

## Development

This project uses:

- **ESLint** with React-specific rules for code quality
- **TypeScript** for type safety
- **React Compiler** for automatic performance optimizations
- **Prettier** for consistent code formatting
