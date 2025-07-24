# VitronTech - AI-Powered Business Solutions Platform

## Overview

VitronTech is a modern full-stack web application built for an AI technology consulting company. The platform serves as a comprehensive business website showcasing AI services, solutions, and enterprise offerings. The application features a responsive design with a retro-futuristic aesthetic, built using React with TypeScript on the frontend and Express.js on the backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router v6 for client-side navigation
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state
- **Theme System**: Custom theme provider with dark/light mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: Hot module replacement with Vite integration

### Build and Deployment
- **Development**: Vite dev server with HMR
- **Production Build**: Vite for frontend, esbuild for backend
- **Asset Handling**: Static file serving with Express
- **TypeScript Compilation**: Incremental compilation with strict mode

## Key Components

### Frontend Components
- **Pages**: Index, About, Services, Technology, Process, Contact, Enterprise, Error pages
- **UI Components**: Comprehensive set of reusable components based on Radix UI
- **Layout Components**: Header with navigation, Footer, Hero section
- **Content Sections**: AboutSection, ServicesSection, AiTechnologies, TailoredAiSolutions, OurApproach, ContactSection
- **Theme System**: ThemeProvider and ThemeToggle for dark/light mode switching

### Backend Components
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Route Registration**: Modular route handling system
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging with performance metrics
- **Development Tools**: Vite integration for SSR and hot reloading

### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Type Safety**: Drizzle-zod integration for runtime validation
- **Migrations**: Automated schema migrations with Drizzle Kit

## Data Flow

### Frontend Data Flow
1. React Query manages all server state and caching
2. Components use custom hooks for data fetching
3. Form submissions trigger API calls through React Query mutations
4. Toast notifications provide user feedback
5. Error boundaries handle unexpected errors gracefully

### Backend Data Flow
1. Express middleware processes incoming requests
2. Route handlers interact with storage layer
3. Storage interface abstracts database operations
4. Responses are formatted as JSON with proper error handling
5. Request logging tracks performance and debugging info

### Database Operations
1. Drizzle ORM provides type-safe database queries
2. Schema changes are managed through migrations
3. Connection pooling handled by Neon Database
4. Sessions stored in PostgreSQL for persistence

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with React DOM
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack React Query for server state
- **Routing**: React Router DOM for navigation
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography
- **Animations**: Class Variance Authority for component variants

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type checking
- **Session Storage**: connect-pg-simple for PostgreSQL sessions
- **Utilities**: Various utility libraries for date handling, etc.

### Development Dependencies
- **Build Tools**: Vite with React plugin
- **TypeScript**: Strict type checking enabled
- **Linting**: ESLint configuration for code quality
- **Development Server**: Vite dev server with HMR

## Deployment Strategy

### Development Environment
- **Hot Reloading**: Vite HMR for instant feedback
- **TypeScript**: Incremental compilation for fast rebuilds
- **Error Overlay**: Runtime error modal for debugging
- **Database**: Neon Database for consistent development environment

### Production Build
- **Frontend**: Vite production build with optimization
- **Backend**: esbuild bundling for Node.js deployment
- **Assets**: Static file serving with proper caching headers
- **Database**: Production Neon Database with connection pooling

### Environment Configuration
- **Database URL**: Required environment variable for database connection
- **Node Environment**: Development/production mode switching
- **Session Management**: Secure session configuration for production

## Recent Changes

- July 06, 2025: Initial setup and migration from Lovable platform
- July 06, 2025: Implemented typewriter animation with character-by-character typing effect
- July 06, 2025: Added AnimatedBeam components with traveling light effects between icons
- July 06, 2025: Created AnimatedIconHub component showing central AI brain connected to service icons
- July 06, 2025: Fixed navigation header overlap by adding consistent pt-32 spacing to all pages
- July 06, 2025: Cleaned up homepage to contain only Hero section, removing duplicate content that appears on dedicated pages
- July 06, 2025: Standardized navigation bar alignment with three-column flex layout for balanced spacing
- July 06, 2025: Standardized fonts across all pages to use font-sans (replaced font-mono text-xl with font-sans)
- July 06, 2025: Implemented BorderBeam animation component across all cards throughout the website (later removed)
- July 06, 2025: Added animated border beam effects to ServicesSection, AboutSection, AiTechnologies, TailoredAiSolutions, and EnterprisePage cards (later removed)
- July 06, 2025: Removed all BorderBeam animations due to implementation issues
- July 06, 2025: Replaced animated SVG buttons with standard Button components in Hero section
- July 06, 2025: Removed all CSS animations including glow effects, pulse animations, and hover transitions
- July 06, 2025: Cleaned up Hero component by removing AnimatedBeam and AnimatedIconHub components
- July 06, 2025: Simplified website to focus on functionality over animations, maintaining clean professional appearance
- July 07, 2025: Re-implemented BorderBeam animated border effects across all major card components (later removed)
- July 07, 2025: Added BorderBeam to ServicesSection, AboutSection, AiTechnologies, TailoredAiSolutions, OurApproach, ContactSection, and EnterprisePage cards (later removed)
- July 07, 2025: Configured varying durations and delays for BorderBeam animations to create dynamic visual effects (later removed)
- July 07, 2025: Enhanced ContactSection with Card components wrapped around form and contact information
- July 07, 2025: Removed all BorderBeam animated border effects due to implementation issues - reverted to clean card design without animations

## Changelog

Changelog:
- July 06, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.