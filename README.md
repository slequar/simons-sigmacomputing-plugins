# Simon's Sigma Computing Plugins

A React + TypeScript + Vite application for building and managing custom plugins for Sigma Computing.

This project provides a plugin development framework that integrates with the [@sigmacomputing/plugin](https://www.npmjs.com/package/@sigmacomputing/plugin) SDK to create custom extensions for the Sigma Computing platform.

## Features

- **React 19** with TypeScript for type-safe component development
- **Vite** for fast development and optimized builds
- **React Router** for multi-page plugin navigation
- **React Compiler** enabled for automatic performance optimizations
- **ESLint & Prettier** for code quality and formatting
- **Custom Theme System** with centralized color, typography, and spacing configuration

## Project Structure

- `src/plugins/` - Custom plugin implementations
- `src/pages/` - Application pages and views
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
