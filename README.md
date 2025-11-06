# Eventry - Event Management Platform

A modern event management platform built with React, TypeScript, Vite, and TailwindCSS.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS
- **Shadcn/ui** - Re-usable components
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Axios** - HTTP client
- **Zustand** - State management

## 📁 Project Structure

```
Eventry/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── Navbar.tsx   # Navigation component
│   │   └── ProtectedRoute.tsx  # Route protection
│   ├── layouts/         # Layout components
│   │   └── MainLayout.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Dashboard.tsx
│   ├── store/           # Zustand stores
│   │   └── authStore.ts
│   ├── services/        # API services
│   │   └── api.ts
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.js   # Tailwind config
└── vite.config.ts       # Vite config
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

First, you need to update the `package.json` with additional dependencies for Shadcn/ui:

```bash
npm install
```

Then install the required Shadcn/ui dependencies:

```bash
npm install @radix-ui/react-label @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate
```

### 2. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 🎯 Features

### Routing
- **Public Routes**: Home, Login, Register
- **Protected Routes**: Dashboard (requires authentication)
- **Route Protection**: Automatic redirect to login for unauthenticated users

### Authentication
- Login and Register pages with form validation
- Auth state managed with Zustand
- Persistent auth state (localStorage)
- Protected route wrapper

### UI Components
- **Navbar**: Dynamic navigation based on auth state
  - Public: Home | Events | Login | Register
  - Authenticated: Home | Events | Dashboard | Logout
- **Landing Page**: Hero section with "Explore Events" CTA
- **Forms**: Styled with Shadcn components (Card, Input, Label, Button)

### State Management
- **Zustand Store** (`authStore`):
  - User data
  - Authentication token
  - Login/Logout actions
  - Persistent storage

### API Setup
- Axios client with interceptors
- Automatic token injection
- Global error handling
- 401 redirect to login

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
```

## 🎨 Customization

### Adding More Shadcn Components

```bash
npx shadcn@latest add [component-name]
```

### Modifying Theme

Edit `src/index.css` to change CSS variables for colors and themes.

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navbar if needed

## 🔐 Authentication Flow

1. User submits login/register form
2. Auth store updates with user data and token
3. Token stored in localStorage (persisted)
4. Protected routes check auth state
5. Axios interceptor adds token to requests
6. 401 responses trigger automatic logout

## 📦 Dependencies Update

The current `package.json` is missing some Shadcn dependencies. Run this command:

```bash
npm install @radix-ui/react-label @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate
```

## 🚦 Next Steps

1. Connect to a real backend API
2. Add more pages (Events, Event Details, Profile)
3. Implement actual authentication logic
4. Add form validation with React Hook Form + Zod
5. Add loading states and error handling
6. Implement dark mode toggle
7. Add more Shadcn components as needed

## 📄 License

MIT

---

**Happy Coding! 🎉**
