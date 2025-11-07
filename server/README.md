# Eventry Backend API

Backend server for the Eventry event management platform.

## 🚀 Tech Stack

- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
server/
├── controllers/          # Request handlers
│   └── authController.js
├── middleware/          # Custom middleware
│   └── authMiddleware.js
├── models/              # Database models
│   └── User.js
├── routes/              # API routes
│   └── authRoutes.js
├── utils/               # Utility functions
│   └── jwtUtils.js
├── .env                 # Environment variables (not in git)
├── .env.example         # Environment template
├── .gitignore
├── package.json
├── README.md
└── server.js            # Entry point
```

## 🛠️ Setup Instructions

### Step 1: Install Node.js

1. Download Node.js from https://nodejs.org/
2. Install the LTS version (Long Term Support)
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Dependencies

Open terminal in the `server` folder and run:

```bash
npm install
```

This will install:
- express
- mongoose
- cors
- bcrypt
- jsonwebtoken
- dotenv
- nodemon (dev dependency)

### Step 3: Setup MongoDB

**Option A: MongoDB Atlas (Cloud - Recommended for beginners)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Try Free" and create an account
3. Create a free cluster (M0 Sandbox)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Paste it in `.env` file as `MONGO_URI`

Example:
```
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/eventry?retryWrites=true&w=majority
```

**Option B: MongoDB Local (Advanced)**

1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Install MongoDB
3. Use this connection string in `.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/eventry
   ```

### Step 4: Configure Environment Variables

1. The `.env` file is already created
2. Update `MONGO_URI` with your MongoDB connection string
3. Change `JWT_SECRET` to a random strong string (keep it secret!)

```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-random-super-secret-key-12345
PORT=5000
NODE_ENV=development
```

### Step 5: Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

You should see:
```
✅ MongoDB connected successfully
🚀 Server is running on http://localhost:5000
```

## 📝 API Endpoints

### Base URL
```
http://localhost:5000
```

### Authentication Routes

#### 1. Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### 2. Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### 3. Get Current User (Protected)
```http
GET /api/auth/me
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response:**
```json
{
  "success": true,
  "message": "User profile retrieved successfully",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

## 🧪 Testing the API

### Method 1: Using Thunder Client (VS Code Extension)

1. Install Thunder Client extension in VS Code
2. Create a new request
3. Set method to POST
4. URL: `http://localhost:5000/api/auth/register`
5. Go to "Body" tab → Select "JSON"
6. Paste the request body
7. Click "Send"

### Method 2: Using Postman

1. Download Postman from https://www.postman.com/downloads/
2. Create a new request
3. Follow same steps as Thunder Client

### Method 3: Using curl (Terminal)

**Register:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"password\":\"password123\",\"role\":\"student\"}"
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"john@example.com\",\"password\":\"password123\"}"
```

**Get User (with token):**
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔐 Authentication Flow

1. **Register**: User provides name, email, password, role
   - Password is hashed with bcrypt
   - User saved to MongoDB
   - JWT token generated and returned

2. **Login**: User provides email and password
   - Email lookup in database
   - Password verified with bcrypt
   - JWT token generated and returned

3. **Protected Routes**: User sends JWT in Authorization header
   - Middleware verifies token
   - User info added to `req.user`
   - Request proceeds to route handler

## 🔒 Security Features

- ✅ Password hashing with bcrypt (salt rounds: 10)
- ✅ JWT authentication with expiration (7 days)
- ✅ Email uniqueness validation
- ✅ Password hidden from API responses
- ✅ CORS enabled for frontend communication
- ✅ Input validation
- ✅ Error handling

## 🐛 Troubleshooting

### MongoDB Connection Failed
- Check if MongoDB is running (for local setup)
- Verify MONGO_URI in .env file
- Check network access in MongoDB Atlas
- Whitelist your IP in MongoDB Atlas

### Port Already in Use
```bash
# Change PORT in .env file
PORT=5001
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### JWT Error
- Check if JWT_SECRET is set in .env
- Verify token format: "Bearer YOUR_TOKEN"
- Token might be expired (login again)

## 📚 Next Steps

1. ✅ Test all endpoints with Thunder Client/Postman
2. 🔄 Connect frontend to backend
3. ➕ Add more models (Event, Ticket, etc.)
4. ➕ Add event CRUD operations
5. ➕ Add image upload
6. ➕ Add email verification
7. ➕ Add password reset

## 📞 Need Help?

- Check console logs for errors
- Read error messages carefully
- Use `console.log()` for debugging
- Check MongoDB connection
- Verify .env file exists and has correct values

---

**Happy Coding! 🚀**
