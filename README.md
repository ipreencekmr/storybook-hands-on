# Storybook Hands-On Demo

A comprehensive React 18 Storybook demo project featuring 5 custom UI components with full test coverage, Tailwind CSS styling, and automated GitHub Pages deployment.

## Tech Stack

- **React 18.x** - UI library
- **Node 20** - Runtime environment
- **Vite 8** - Build tool
- **Storybook 10.3.5** - Component documentation and development
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Unit testing framework
- **React Testing Library** - Testing utilities
- **ESLint** - Code quality
- **GitHub Actions** - CI/CD pipeline

## Features

### Components Included

1. **Card** - Flexible content container with elevation levels
   - Multiple shadow elevations (low, medium, high)
   - Optional title, description, and children content
   - Customizable styling

2. **Button** - Interactive button with multiple variants
   - 4 variants: primary, secondary, danger, outline
   - 3 sizes: small, medium, large
   - Loading and disabled states
   - Full keyboard support

3. **AnimatedSidebar** - Collapsible sidebar with smooth animations
   - Smooth transition animations
   - Icon support for menu items
   - Customizable menu items
   - Responsive design

4. **ImageWithAttribution** - Image component with proper credit attribution
   - Photographer and source attribution display
   - License information display
   - Semantic HTML using `<figure>` and `<figcaption>`
   - Customizable sizing

5. **Badge** - Status and label badge component
   - 5 color variants: primary, success, warning, error, info
   - 3 sizes: small, medium, large
   - Flexible styling options
   - Perfect for status indicators

### Documentation

- **Storybook with Docs Addon** - Interactive component documentation
- **MDX Support** - Write documentation alongside stories
- **Controls/Argon** - Interactive prop testing in Storybook
- **Accessibility Panel** - Built-in a11y testing

### Testing

- **100% Component Coverage** - All components have comprehensive test suites
- **React Testing Library** - User-centric testing approach
- **Coverage Reports** - HTML and LCOV formats
- **Vitest Integration** - Fast unit testing with Storybook addon

### Quality Assurance

- **ESLint Configuration** - Code quality standards
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Consistent, maintainable styling

## Getting Started

### Prerequisites

- Node.js 20.x
- npm 10.x

### Installation

```bash
# Install dependencies
npm install

# Install Tailwind CSS dependencies (if not already installed)
npm install -D tailwindcss postcss autoprefixer

# Install testing dependencies (if not already installed)
npm install -D @testing-library/react @testing-library/user-event jsdom
```

### Development

```bash
# Start Storybook dev server
npm run storybook

# Start Vite dev server
npm run dev

# Run tests
npm run test

# Run tests with coverage report
npm run test:coverage

# Run ESLint
npm run lint
```

### Build

```bash
# Build application
npm run build

# Build Storybook for deployment
npm run build-storybook

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Card.tsx
│   ├── Card.stories.tsx
│   ├── Card.test.tsx
│   ├── Button.tsx
│   ├── Button.stories.tsx
│   ├── Button.test.tsx
│   ├── AnimatedSidebar.tsx
│   ├── AnimatedSidebar.stories.tsx
│   ├── AnimatedSidebar.test.tsx
│   ├── ImageWithAttribution.tsx
│   ├── ImageWithAttribution.stories.tsx
│   ├── ImageWithAttribution.test.tsx
│   ├── Badge.tsx
│   ├── Badge.stories.tsx
│   └── Badge.test.tsx
├── index.css (Tailwind imports)
├── App.tsx
└── main.tsx

.storybook/
├── main.ts
└── preview.ts

.github/
└── workflows/
    └── deploy-storybook.yml

Configuration files:
- tailwind.config.js
- postcss.config.js
- vite.config.ts
- vitest.config.ts
- vitest.setup.ts
- tsconfig.json
- eslint.config.js
```

## Storybook Setup

### Available Addons

- **@storybook/addon-docs** - MDX documentation
- **@storybook/addon-vitest** - Run tests in Storybook
- **@storybook/addon-a11y** - Accessibility checks
- **@chromatic-com/storybook** - Cloud integration (optional)

### Running Storybook

```bash
npm run storybook
```

Access Storybook at: `http://localhost:6006`

## Testing

### Run All Tests

```bash
npm run test
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

Coverage reports are generated in:
- `coverage/index.html` - HTML report
- `coverage/lcov.info` - LCOV format for CI/CD

### Test Coverage Goal

✅ **100% coverage** for all component files

## GitHub Actions Deployment

### Manual Deployment to GitHub Pages

The project includes a GitHub Actions workflow for manual Storybook deployment:

1. Go to your repository on GitHub
2. Navigate to **Actions** tab
3. Select **Deploy Storybook to GitHub Pages** workflow
4. Click **Run workflow**
5. Choose environment (production/staging)
6. Click **Run workflow**

The workflow will:
- Build the project
- Run tests (fail if any test fails)
- Run linter
- Build Storybook
- Deploy to GitHub Pages

## Configuration Files

### tailwind.config.js
Tailwind CSS configuration with content purging for src directory.

### postcss.config.js
PostCSS configuration with Tailwind and Autoprefixer plugins.

### vite.config.ts
Vite configuration with React plugin and Storybook integration.

### vitest.config.ts
Vitest configuration with:
- JSDOM environment for DOM testing
- Coverage provider (v8)
- Component file patterns
- Story and test file exclusions

### eslint.config.js
ESLint configuration for code quality standards.

## Storybook Stories Features

Each component story includes:

- **Default story** - Basic component usage
- **Variants** - Different prop combinations
- **Size variations** - All available sizes
- **States** - Enabled, disabled, loading states
- **Interactive controls** - Adjust props in Storybook UI
- **Documentation** - Component descriptions and prop details
- **Accessibility** - a11y addon integration

## ESLint

Run linter:

```bash
npm run lint
```

The project includes configuration for:
- React hooks best practices
- React Refresh plugin
- Storybook plugin support

## Tailwind CSS Customization

Tailwind CSS is configured to:
- Process JSX files in `src` directory
- Support Storybook stories
- Include CSS in component tests

Customize in `tailwind.config.js`:
- Theme colors
- Typography
- Spacing
- Animations
- Breakpoints

## Component Development Workflow

1. Create component file (e.g., `Component.tsx`)
2. Create stories file (e.g., `Component.stories.tsx`)
3. Add component to Storybook with controls
4. Create test file (e.g., `Component.test.tsx`)
5. Achieve 100% test coverage
6. Run tests: `npm run test:coverage`
7. View in Storybook: `npm run storybook`

## Type Safety

All components are:
- Written in TypeScript
- Fully typed with React interfaces
- Exported with proper TypeScript exports
- Documented with prop descriptions

## Accessibility

Components include:
- Semantic HTML where appropriate
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast colors
- Built-in a11y testing in Storybook

## Performance

- **Tree-shaking** via ES modules
- **Code splitting** with Vite
- **Fast refresh** with Vite HMR
- **Optimized builds** with production minification
- **Lazy loading** stories in Storybook

## Best Practices

- ✅ 100% test coverage
- ✅ TypeScript for type safety
- ✅ Semantic HTML
- ✅ Accessible components
- ✅ Comprehensive documentation
- ✅ ESLint for code quality
- ✅ Tailwind CSS for consistent styling
- ✅ Git workflow with GitHub Actions

## Troubleshooting

### Storybook not starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run storybook
```

### Tests failing
```bash
# Run tests in watch mode for debugging
npm run test -- --watch

# Check coverage
npm run test:coverage
```

### Node/npm path issues
Ensure Node 20.x is in your PATH:
```bash
node --version  # should be v20.x.x
npm --version   # should be 10.x.x or higher
```

## Contributing

1. Create new components in `src/components/`
2. Add stories for documentation
3. Write tests achieving 100% coverage
4. Run `npm run test:coverage` to verify
5. Commit and push changes

## License

This project is open source and available under the MIT License.

## Resources

- [React Documentation](https://react.dev)
- [Storybook Documentation](https://storybook.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vitest Documentation](https://vitest.dev)
- [Testing Library Documentation](https://testing-library.com/react)

## Support

For issues or questions:
1. Check GitHub Issues
2. Review Storybook documentation
3. Check component test files for usage examples
