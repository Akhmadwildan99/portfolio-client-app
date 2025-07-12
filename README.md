# Portfolio Client App

A modern portfolio website built with React, Vite, and Tailwind CSS showcasing professional experience, skills, and articles.

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Article System** - Dynamic article routing and content display
- **Interactive Components** - Hero section with CV download, smooth navigation
- **Work Experience** - Professional timeline with company logos
- **Skills Showcase** - Technology stack visualization
- **Client-side Routing** - React Router for seamless navigation

## Tech Stack

- **React 19** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vitest** - Unit testing framework
- **Testing Library** - React component testing

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-client-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm test         # Run unit tests
npm run test:ui  # Run tests with UI
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Articles.jsx     # Articles listing
│   ├── Hero.jsx         # Hero section with CV download
│   ├── Navbar.jsx       # Navigation component
│   ├── Experiences.jsx  # Work experience timeline
│   └── Skills.jsx       # Skills grid
├── pages/              # Page components
│   ├── Home.jsx        # Main landing page
│   └── ArticleDetail.jsx # Individual article page
├── data-*.js           # Static data files
└── test/               # Test utilities
```

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. The `_redirects` file handles client-side routing

### Other Platforms

For other static hosting platforms, ensure:
- Build output is in `dist/` folder
- Configure redirects for SPA routing: `/* /index.html 200`

## Testing

The project includes comprehensive unit tests for all components:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request