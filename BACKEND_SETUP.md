# 🎊 Backend Created Successfully!

## ✅ What's Been Created

Your complete Node.js + Express + MongoDB backend is ready!

### 📁 Server Structure

```
server/
├── controllers/
│   └── authController.js       # Login/Register logic
├── middleware/
│   └── authMiddleware.js       # JWT verification
├── models/
│   └── User.js                 # User database schema
├── routes/
│   └── authRoutes.js           # API endpoints
├── utils/
│   └── jwtUtils.js             # JWT helper functions
├── .env                        # Your config (SECRET!)
├── .env.example                # Template for others
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies
├── server.js                   # Main entry point
├── README.md                   # API documentation
└── SETUP_GUIDE.md              # Beginner's guide ⭐

```

## 🚀 Next Steps (Follow These!)

### Step 1: Install Dependencies

Open a **NEW** terminal (not the one running frontend):

**Option A: Using VS Code**
1. Right-click on the `server` folder in Explorer
2. Click "Open in Integrated Terminal"
3. Type:
```powershell
npm install
```

**Option B: Using Command**
```powershell
cd server
npm install
```

**Wait for** `added 150 packages...` message

### Step 2: Setup MongoDB

You need a database! Choose ONE:

**🌟 Option A: MongoDB Atlas (Cloud - EASIEST)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free" → Sign up
3. Create FREE cluster (M0 Sandbox)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Open `server/.env` file
7. Replace MONGO_URI with your string:
```env
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/eventry?retryWrites=true&w=majority
```

**Option B: Local MongoDB (Advanced)**
1. Install MongoDB Community Server
2. Keep the default MONGO_URI in `.env`:
```env
MONGO_URI=mongodb://localhost:27017/eventry
```

### Step 3: Configure JWT Secret

1. Open `server/.env`
2. Change JWT_SECRET to any random string:
```env
JWT_SECRET=myRandomSecret12345!@#xyz
```
**Keep this secret!**

### Step 4: Start the Server

In the server terminal:
```powershell
npm run dev
```

**Success looks like:**
```
✅ MongoDB connected successfully
🚀 Server is running on http://localhost:5000
```

## 🧪 Test Your Backend

### Using Thunder Client (Recommended)

1. Install "Thunder Client" extension in VS Code
2. Click Thunder Client icon (left sidebar)
3. Click "New Request"
4. **Test Registration:**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/register`
   - Body tab → JSON:
   ```json
   {
     "name": "Test User",
     "email": "test@example.com",
     "password": "password123",
     "role": "student"
   }
   ```
   - Click "Send"

**Expected Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": { ... },
    "token": "eyJhbGc..."
  }
}
```

5. **Test Login:**
   - Create new request
   - POST to `http://localhost:5000/api/auth/login`
   - Body:
   ```json
   {
     "email": "test@example.com",
     "password": "password123"
   }
   ```

## 📚 Important Files to Read

1. **`server/SETUP_GUIDE.md`** ⭐
   - **READ THIS FIRST** if you're new!
   - Step-by-step instructions
   - Troubleshooting guide
   - Explains everything in detail

2. **`server/README.md`**
   - API documentation
   - All endpoints explained
   - Testing examples

3. **`server/.env`**
   - Your secrets
   - MongoDB connection
   - JWT secret key

## 🔗 Connect Frontend to Backend

### Update Frontend Environment Variable

1. Go to root folder (not server!)
2. Edit `.env` file
3. Make sure it has:
```env
VITE_API_URL=http://localhost:5000/api
```
4. Restart frontend (`npm run dev`)

### Update Login/Register Pages

Your frontend is using dummy data. To connect to real backend:

**In `src/pages/Login.tsx`**, replace the `handleSubmit` function with:

```typescript
import apiClient from '@/services/api'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)

  try {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    })

    login(
      response.data.data.user,
      response.data.data.token
    )
    navigate('/dashboard')
  } catch (error: any) {
    alert(error.response?.data?.message || 'Login failed')
  } finally {
    setIsLoading(false)
  }
}
```

**Same for `src/pages/Register.tsx`:**

```typescript
import apiClient from '@/services/api'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (password !== confirmPassword) {
    alert('Passwords do not match!')
    return
  }

  setIsLoading(true)

  try {
    const response = await apiClient.post('/auth/register', {
      name,
      email,
      password,
      role: 'student'
    })

    login(
      response.data.data.user,
      response.data.data.token
    )
    navigate('/dashboard')
  } catch (error: any) {
    alert(error.response?.data?.message || 'Registration failed')
  } finally {
    setIsLoading(false)
  }
}
```

## 🐛 Common Issues

### "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### "MongoDB connection failed"
**Solution:** 
- Check MONGO_URI in `.env`
- If using Atlas, whitelist your IP
- If using local, start MongoDB service

### "Port 5000 already in use"
**Solution:** Change PORT in `.env`:
```env
PORT=5001
```

### "Module not found"
**Solution:**
```powershell
cd server
rm -rf node_modules package-lock.json
npm install
```

## ✅ Checklist

- [ ] Node.js installed
- [ ] MongoDB setup (Atlas or Local)
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file configured
- [ ] Server starts successfully
- [ ] Can register a user
- [ ] Can login
- [ ] Frontend connected to backend

## 🎯 What You've Built

### API Endpoints
- ✅ `POST /api/auth/register` - Register new user
- ✅ `POST /api/auth/login` - Login user
- ✅ `GET /api/auth/me` - Get current user (protected)

### Security Features
- ✅ Password hashing with bcrypt
- ✅ JWT authentication
- ✅ Protected routes
- ✅ Email uniqueness validation
- ✅ CORS enabled

### Database
- ✅ User model with name, email, password, role
- ✅ MongoDB connection
- ✅ Mongoose schemas

## 📖 Learning Resources

- **SETUP_GUIDE.md** - Detailed beginner's guide
- **README.md** - API documentation
- Node.js Docs: https://nodejs.org/docs/
- Express Docs: https://expressjs.com/
- MongoDB Docs: https://docs.mongodb.com/
- JWT Explained: https://jwt.io/introduction

## 🚀 You're Almost There!

1. ✅ Frontend is running (port 5173)
2. 🔄 Install backend dependencies
3. 🔄 Configure MongoDB
4. 🔄 Start backend server (port 5000)
5. 🔄 Test with Thunder Client
6. 🔄 Connect frontend to backend

---

**Read `server/SETUP_GUIDE.md` for detailed instructions!**

**Happy Coding! 🎉**
