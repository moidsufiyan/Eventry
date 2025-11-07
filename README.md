# 🎉 Eventry - Full-Stack Event Management Platform

A modern, full-stack event management platform built with React, TypeScript, Node.js, and MongoDB.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS
- **Shadcn/ui** - Re-usable components
- **React Router** - Client-side routing
- **React Query** - Data fetching
- **Axios** - HTTP client
- **Zustand** - State management

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Eventry/
├── src/                    # Frontend React app
│   ├── components/
│   │   ├── ui/            # Shadcn UI components
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   ├── layouts/
│   ├── pages/
│   ├── store/
│   ├── services/
│   └── ...
├── server/                 # Backend Node.js API
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── public/
└── package.json
```

## 🛠️ Quick Start

### Prerequisites
1. **Node.js** (v18+) - [Download here](https://nodejs.org/)
2. **MongoDB** - Choose one:
   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Cloud - Recommended)
   - [MongoDB Community](https://www.mongodb.com/try/download/community) (Local)

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs on: **http://localhost:5173**

### Backend Setup

```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Configure environment variables
# Edit server/.env with your MongoDB URI and JWT secret

# Start server
npm run dev
```

Backend runs on: **http://localhost:5000**

## 📚 Detailed Setup Guides

### For Beginners (MUST READ!)
If you're new to development, follow these guides:

1. **Frontend Setup**: Read `PROJECT_SETUP.md`
2. **Backend Setup**: Read `server/SETUP_GUIDE.md` ⭐ (Very detailed!)
3. **API Documentation**: Read `server/README.md`

## 🎯 Features

### ✅ Implemented
- User registration and login
- JWT authentication
- Protected routes
- Password hashing
- Responsive navbar
- Landing page
- Dashboard

### 🔄 Coming Soon
- Event creation
- Event browsing
- Ticket booking
- User profiles

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
