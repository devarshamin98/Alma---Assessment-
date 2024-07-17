
**DesignDocument.md**
```markdown
# Design Document

## Overview

This document outlines the design choices made for the Leads App.

### Technologies Used

- **Next.js**: For server-side rendering and routing.
- **TypeScript**: For type safety and better development experience.
- **Redux**: For state management.
- **JsonForms**: For dynamic form rendering.
- **Material-UI**: For UI components and styling.

### Components

- **LeadForm**: A form for submitting leads.
- **LeadList**: A list view for displaying leads, with the ability to change the lead status.

### API

- **Leads API**: A mock API for handling lead data.

### Authentication

- **Mock Authentication**: A simple login mechanism to protect the internal leads list page.

### Styling

- **CSS Modules**: For scoped styling of components.

### Unit Tests

- **Testing Library**: For writing unit tests for components and Redux state management.

## Conclusion

This design aims to provide a scalable and maintainable structure for the Leads App, leveraging modern technologies and best practices.

# Lead Form Application

## Running Locally

   1. git clone REPO_URL
   2. cd leads-app
   3. npm install (To install dependencies)
   4. npm run 

## URL Summary
Home Page: http://localhost:3000
Internal Lead List Page: http://localhost:3000/leads
