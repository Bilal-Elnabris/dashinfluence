# Replit.md

## Overview

This is a full-stack TypeScript application built for DashInfluence, an AI automation platform focused on real estate professionals. The application features a React frontend with a Node.js/Express backend, utilizing a modern tech stack including Drizzle ORM for database operations, TanStack Query for state management, and shadcn/ui components for the user interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite integration

### Database Architecture
- **Database**: PostgreSQL (configured for Neon Database)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Location**: `shared/schema.ts` for shared types
- **Migrations**: Managed through `drizzle-kit`

## Key Components

### Frontend Pages
1. **Home** (`/`) - Landing page with hero section and tool overview
2. **Revenue Calculator** (`/calculator`) - Interactive calculator for revenue loss analysis
3. **Automation Quiz** (`/quiz`) - Assessment tool for automation readiness
4. **Workflow Mapper** (`/mapper`) - Visual workflow analysis tool
5. **Why DashInfluence** (`/why-us`) - Company value proposition and testimonials

### Shared Components
- **Navbar**: Navigation with logo and CTA button
- **Footer**: Company information and quick links
- **UI Components**: Complete shadcn/ui component library

### Backend Structure
- **Routes**: API routes defined in `server/routes.ts`
- **Storage**: Abstracted storage interface with in-memory implementation
- **Vite Integration**: Development server with HMR support

## Data Flow

### Client-Server Communication
- REST API endpoints prefixed with `/api`
- JSON request/response format
- TanStack Query for caching and synchronization
- Error handling with custom error responses

### Database Operations
- Type-safe operations through Drizzle ORM
- Shared schema definitions between client and server
- User management with username/password authentication

### State Management
- Server state managed by TanStack Query
- Local component state with React hooks
- Form state management with React Hook Form

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL-compatible)
- **UI Framework**: Radix UI primitives
- **Styling**: Tailwind CSS with custom configuration
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date utilities

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across the stack
- **Linting**: ESLint configuration
- **Database**: Drizzle Kit for migrations

## Deployment Strategy

### Production Build
- Frontend: Static assets built to `dist/public`
- Backend: Server bundled with esbuild to `dist/index.js`
- Single deployment artifact serving both frontend and API

### Environment Configuration
- `NODE_ENV` for environment detection
- `DATABASE_URL` for database connection
- Development vs production asset serving

### Development Workflow
- `npm run dev` for development server with HMR
- `npm run build` for production build
- `npm run db:push` for database schema updates

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 29, 2025. Initial setup