# Errantry.xyz

A modern, responsive website built with React, TypeScript, and Firebase. This project showcases a clean, accessible design with smooth animations and a focus on user experience.

![Errantry.xyz Screenshot](public/logo192.png)

## 🌟 Features

- **Modern React Architecture**: Built with React 19 and TypeScript for type safety
- **Responsive Design**: Fully responsive layout that works on all devices
- **Firebase Integration**: Backend services powered by Firebase (Authentication, Firestore, Storage)
- **Accessible UI**: WCAG compliant components with proper ARIA attributes
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/errantry.xyz.git
   cd errantry.xyz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id_here
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   REACT_APP_FIREBASE_APP_ID=your_app_id_here
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
errantry.xyz/
├── public/                  # Static files
├── src/                     # Source files
│   ├── assets/              # Images, fonts, and other static assets
│   │   └── backgrounds/     # Background images
│   ├── components/          # React components
│   │   ├── common/          # Reusable UI components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   └── sections/        # Page section components
│   ├── firebase/            # Firebase configuration
│   ├── styles/              # Global styles and CSS variables
│   ├── App.tsx              # Main App component
│   └── index.tsx            # Entry point
├── .env                     # Environment variables
├── firebase.json            # Firebase configuration
├── package.json             # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## 🛠️ Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Firebase](https://firebase.google.com/) - Backend services
- [React Router](https://reactrouter.com/) - Routing
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - Theming and styling

## 📱 Components

### Layout Components
- **Header**: Navigation bar with responsive menu
- **Footer**: Site footer with links and copyright information

### Section Components
- **Hero**: Landing section with main call-to-action
- **About**: Information about the project or company
- **Projects**: Showcase of projects or work
- **Contact**: Contact form with Firebase integration

### Common Components
- **Button**: Reusable button component with multiple variants

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 📦 Deployment

This project is configured for deployment on Firebase Hosting:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## 🔐 Environment Variables

The following environment variables are required:

| Variable | Description |
|----------|-------------|
| REACT_APP_FIREBASE_API_KEY | Firebase API key |
| REACT_APP_FIREBASE_AUTH_DOMAIN | Firebase authentication domain |
| REACT_APP_FIREBASE_PROJECT_ID | Firebase project ID |
| REACT_APP_FIREBASE_STORAGE_BUCKET | Firebase storage bucket |
| REACT_APP_FIREBASE_MESSAGING_SENDER_ID | Firebase messaging sender ID |
| REACT_APP_FIREBASE_APP_ID | Firebase app ID |
| REACT_APP_FIREBASE_MEASUREMENT_ID | Firebase measurement ID |

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [Your GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app) for the initial project setup
- [Firebase](https://firebase.google.com/) for backend services
- [React Router](https://reactrouter.com/) for routing
