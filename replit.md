# SuryaFree - Solar Energy Landing Page

## Overview

SuryaFree is a modern, responsive single-page website for a solar energy company that specializes in solar panel installations and solar water heaters. The application features a clean, professional design with a green and yellow color palette that reflects the company's focus on renewable energy and sustainability. The site includes sections for hero presentation, company information, services showcase, project gallery, and contact form with quote request functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based development
- **Styling**: Tailwind CSS with a custom design system based on green/yellow color palette for solar energy branding
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **Routing**: Wouter for lightweight client-side routing with support for main landing page, admin dashboard, and test routes
- **State Management**: React Query (TanStack Query) for server state management and API data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints for quote request management with JSON responses
- **Data Validation**: Zod schemas for runtime type checking and validation of API inputs
- **Storage Layer**: Abstracted storage interface with in-memory implementation (ready for database integration)
- **Error Handling**: Centralized error handling with proper HTTP status codes and user-friendly messages

### Data Storage Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Development Storage**: In-memory storage implementation for development and testing
- **Production Ready**: Database configuration prepared for PostgreSQL deployment

### Component Architecture
- **Design System**: Comprehensive UI component library with consistent styling and behavior
- **Section-Based Layout**: Modular page sections (Hero, About, Services, Gallery, Contact, Footer) for maintainable code organization
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints for optimal viewing across devices
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support throughout

### Form Handling & Validation
- **Quote Requests**: Contact form with client-side validation and server-side processing
- **Data Flow**: Form submission → validation → storage → user feedback via toast notifications
- **Field Validation**: Required fields for name and email, optional phone and message fields

## External Dependencies

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Lucide React**: Icon library providing consistent iconography
- **Google Fonts**: Custom typography using Inter font family

### Development Tools
- **Vite**: Build tool with hot module replacement and optimized bundling
- **TypeScript**: Static type checking for improved developer experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Database & Validation
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL for production database hosting
- **Zod**: Runtime type validation for API endpoints and form data

### State Management & HTTP
- **TanStack React Query**: Server state management with caching and synchronization
- **Wouter**: Lightweight routing library for single-page application navigation

### Development Environment
- **Replit Integration**: Development environment with live preview and collaboration features
- **Error Overlay**: Runtime error display for improved debugging experience