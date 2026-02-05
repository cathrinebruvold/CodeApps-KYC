# BetterApps - KYC Questionnaire Application

A Power Apps Code App built with React + TypeScript + Vite for managing Know Your Customer (KYC) questionnaires with dynamic input handling.

## Overview

This is a comprehensive KYC (Know Your Customer) application designed for compliance and risk assessment. It provides an interactive questionnaire system that adapts based on user configuration, featuring multi-language support, dynamic form validation, and comprehensive data management.

## Features

- **Dynamic Questionnaires**: Configurable questionnaires with conditional logic based on risk levels, customer types, and control types
- **Multi-Language Support**: English and Norwegian language support with easy internationalization
- **Input Types**: Multiple input types including text, yes/no, dropdowns, multiselect, and date pickers
- **Step-Based Navigation**: Guided questionnaire flow with configuration, category-based questions, and summary review
- **Admin Panel**: Manage questions, categories, and filters (risk levels, customer types, control types)
- **Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Local Storage**: Persistent data storage for questionnaire progress
- **Summary Review**: Comprehensive summary view with bullet-pointed multiselect answers

## KYC Categories

The application covers five main KYC compliance categories:

1. **Kundelitikk (KYC)** - Customer Due Diligence
2. **Transaksjonsovervåking** - Transaction Monitoring
3. **Risikovurdering** - Risk Assessment
4. **Politisk eksponerte personer (PEP)** - Politically Exposed Persons
5. **Sanksjoner** - Sanctions Screening

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables for theming
- **State Management**: React Context API
- **Power Apps Integration**: Microsoft Power Apps Code Apps
- **Package Manager**: npm

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Power Apps CLI (pac)

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # React components
│   ├── AdminPage/       # Admin interface
│   ├── Stepper/         # Step navigation
│   ├── QuestionRenderer # Question display
│   ├── inputs/          # Form input components
│   └── ...
├── context/             # React Context providers
├── hooks/               # Custom React hooks
├── i18n/                # Internationalization
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── data/                # Question data
└── App.tsx              # Main app component
```

## Deployment

### To Power Apps

```bash
npm run build
pac code push
```

The app will be pushed to the configured Power Apps solution (BetterApps).

### Git

Push to GitHub repository:

```bash
git push origin main
```

## Configuration

The `power.config.json` file contains Power Apps specific configuration:

- `appId`: The Power Apps application ID
- `environmentId`: The Dynamics 365 environment ID
- `solutionUniqueName`: Target solution name (BetterApps)
- `buildPath`: Build output directory

## Internationalization

Language strings are stored in:
- `src/i18n/en.ts` - English
- `src/i18n/nb.ts` - Norwegian

## Contributing

This is a private project. For contributions, please contact the development team.

## License

Proprietary - All rights reserved

---

**Built with** ❤️ **for compliance and usability**
