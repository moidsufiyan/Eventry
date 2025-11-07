# 🎓 Complete Beginner's Guide to Setting Up Eventry Backend

This guide will walk you through **EVERY STEP** of setting up the backend, even if you've never done it before.

## 📋 Prerequisites Checklist

Before we start, you need to install:

### ✅ 1. Node.js (JavaScript Runtime)

**What is it?** Node.js lets you run JavaScript code on your computer (not just in a browser).

**How to install:**
1. Go to https://nodejs.org/
2. Download the **LTS version** (the green button)
3. Run the installer
4. Click "Next" through all steps (use default settings)
5. Restart your computer

**Verify installation:**
Open PowerShell and type:
```powershell
node --version
npm --version
```
You should see version numbers like `v20.x.x` and `10.x.x`

### ✅ 2. VS Code (Code Editor)

**Already installed!** You're using it now.

### ✅ 3. MongoDB (Database)

**What is it?** MongoDB is a database where we'll store user data, events, etc.

**Choose ONE option:**

#### **Option A: MongoDB Atlas (Cloud - RECOMMENDED FOR BEGINNERS)**

This is easier because MongoDB runs in the cloud, not on your computer.

**Steps:**
1. Go to https://www.mongodb.com/cloud/atlas
2. Click **"Try Free"**
3. Create an account (use Google sign-in for easier setup)
4. Choose **FREE tier** (M0 Sandbox)
5. Cloud Provider: **AWS**
6. Region: **Choose closest to you**
7. Cluster Name: **Cluster0** (default is fine)
8. Click **"Create Cluster"** (takes 2-3 minutes)

**Get Connection String:**
1. Click **"Connect"** button
2. Choose **"Connect your application"**
3. Copy the connection string (looks like: `mongodb+srv://username:...`)
4. Save it - we'll use it soon!

#### **Option B: MongoDB Local (Advanced)**

Only choose this if you want MongoDB on your computer.

1. Download from https://www.mongodb.com/try/download/community
2. Install MongoDB Community Server
3. Use default settings
4. Connection string: `mongodb://localhost:27017/eventry`

---

## 🚀 Step-by-Step Setup

### Step 1: Open Terminal in Server Folder

1. In VS Code, look at the left sidebar (Explorer)
2. Right-click on the **`server`** folder
3. Click **"Open in Integrated Terminal"**

You should see:
```
PS C:\Users\...\Eventry\server>
```

### Step 2: Install All Dependencies

**What are dependencies?** These are pre-built code packages that we need (Express, MongoDB driver, etc.)

In the terminal, type:
```powershell
npm install
```

**What happens:**
- npm (Node Package Manager) reads `package.json`
- Downloads all required packages
- Installs them in `node_modules` folder

**Wait time:** 1-2 minutes

You should see:
```
added 150 packages, and audited 151 packages in 45s
```

### Step 3: Configure Environment Variables

**What is .env?** It's a file that stores secret information (database passwords, API keys).

1. Open the file **`server/.env`** (already created for you!)
2. You'll see:

```env
MONGO_URI=mongodb://localhost:27017/eventry
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=development
```

**What to change:**

**A. MONGO_URI (Database Connection)**

**If using MongoDB Atlas:**
- Replace the entire line with your connection string from MongoDB Atlas
- Example:
  ```env
  MONGO_URI=mongodb+srv://youruser:yourpassword@cluster0.abc123.mongodb.net/eventry?retryWrites=true&w=majority
  ```
- Make sure to replace `<password>` with your actual password

**If using Local MongoDB:**
- Keep it as: `mongodb://localhost:27017/eventry`

**B. JWT_SECRET (Security Key)**
- Change this to ANY random string (it's used to encrypt passwords)
- Example: `JWT_SECRET=myRandomSecret123!@#XYZ`
- **Never share this with anyone!**

**C. PORT (Server Port)**
- Keep as `5000` (or change if that port is busy)

**D. NODE_ENV**
- Keep as `development`

**Save the file** (Ctrl + S)

### Step 4: Start the Server

In the terminal (still in `server` folder), type:

```powershell
npm run dev
```

**What happens:**
- `nodemon` starts the server
- Connects to MongoDB
- Listens for API requests on port 5000

**Success looks like:**
```
[nodemon] starting `node server.js`
✅ MongoDB connected successfully
🚀 Server is running on http://localhost:5000
📝 API Documentation: http://localhost:5000/
```

**If you see errors, check the [Troubleshooting](#troubleshooting) section below.**

---

## 🧪 Test Your API

Now let's make sure everything works!

### Method 1: Using Thunder Client (Easiest)

**Install Thunder Client:**
1. Click Extensions icon in VS Code (left sidebar, 4 squares)
2. Search for "Thunder Client"
3. Click Install

**Test Registration:**
1. Click Thunder Client icon in left sidebar
2. Click **"New Request"**
3. Set method to **POST**
4. URL: `http://localhost:5000/api/auth/register`
5. Click **"Body"** tab
6. Select **"JSON"**
7. Paste this:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123",
  "role": "student"
}
```
8. Click **"Send"**

**Expected Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "...",
      "name": "Test User",
      "email": "test@example.com",
      "role": "student"
    },
    "token": "eyJhbGc..."
  }
}
```

**Test Login:**
1. Create another request
2. POST to `http://localhost:5000/api/auth/login`
3. Body:
```json
{
  "email": "test@example.com",
  "password": "password123"
}
```
4. Click Send

**Copy the token from the response** - you'll need it!

**Test Protected Route:**
1. Create another request
2. GET to `http://localhost:5000/api/auth/me`
3. Click **"Headers"** tab
4. Add header:
   - Key: `Authorization`
   - Value: `Bearer YOUR_TOKEN_HERE` (paste the token you copied)
5. Click Send

### Method 2: Using Browser

Open your browser and go to:
```
http://localhost:5000/
```

You should see:
```json
{
  "success": true,
  "message": "Eventry API is running!",
  "data": {
    "version": "1.0.0",
    "endpoints": {
      "register": "POST /api/auth/register",
      "login": "POST /api/auth/login"
    }
  }
}
```

---

## 🔌 Connect Frontend to Backend

Now let's make your React frontend talk to the backend!

### Update Frontend Environment Variable

1. Go to your **frontend folder** (not server!)
2. Open or create **`.env`** file in the root
3. Add:
```env
VITE_API_URL=http://localhost:5000/api
```
4. Save

### Update API Service

The frontend API is already configured! It's in:
```
src/services/api.ts
```

It will automatically use the `VITE_API_URL` from `.env`.

### Update Auth Functions

Let's update the Login and Register pages to use real API:

**This is already done for you**, but the login/register currently use dummy data. To connect to real backend, you'll need to:

1. Import axios in Login.tsx
2. Replace the setTimeout with actual API call
3. Same for Register.tsx

**Example for Login.tsx:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)

  try {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    })

    login(response.data.data.user, response.data.data.token)
    navigate('/dashboard')
  } catch (error: any) {
    alert(error.response?.data?.message || 'Login failed')
  } finally {
    setIsLoading(false)
  }
}
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module 'express'"

**Problem:** Dependencies not installed

**Solution:**
```powershell
cd server
npm install
```

### Error: "MongooseServerSelectionError"

**Problem:** Can't connect to MongoDB

**Solutions:**
1. Check if `MONGO_URI` in `.env` is correct
2. If using Atlas:
   - Check username/password in connection string
   - Whitelist your IP in MongoDB Atlas (Network Access)
   - Make sure cluster is running
3. If using local:
   - Start MongoDB service
   - Check if MongoDB is installed

### Error: "Port 5000 is already in use"

**Problem:** Another app is using port 5000

**Solution:**
Change port in `.env`:
```env
PORT=5001
```

### Error: "JWT must be provided"

**Problem:** Token missing or incorrect format

**Solution:**
- Make sure you're sending: `Authorization: Bearer YOUR_TOKEN`
- Space between "Bearer" and token
- No extra quotes

### Server starts but can't register user

**Problem:** MongoDB connection issue or validation error

**Solution:**
1. Check server console for error messages
2. Verify MongoDB is connected (✅ symbol)
3. Check if email is already registered
4. Verify all required fields are sent

### TypeError: Cannot read property...

**Problem:** Missing data or wrong data type

**Solution:**
- Check request body matches expected format
- All required fields present (name, email, password)
- JSON is valid (use JSON validator)

---

## 📚 Understanding the Code

### What is Express?
Express is a framework that makes it easy to build web servers in Node.js.

### What is Mongoose?
Mongoose is a library that makes it easy to work with MongoDB databases.

### What is JWT?
JSON Web Token - a secure way to identify users. When you login, you get a token. You send this token with every request to prove who you are.

### What is bcrypt?
A library that encrypts passwords. We never store plain passwords - always encrypted!

### What is CORS?
Cross-Origin Resource Sharing - allows your frontend (port 5173) to talk to backend (port 5000).

### How does authentication work?

1. **Register:**
   - User sends: name, email, password
   - Server: hashes password, saves to DB
   - Server: creates JWT token
   - Server: returns user info + token

2. **Login:**
   - User sends: email, password
   - Server: finds user, checks password
   - Server: creates JWT token
   - Server: returns user info + token

3. **Protected Routes:**
   - User sends: request + JWT token in header
   - Server: verifies token
   - Server: processes request if valid

---

## 🎯 What You've Built

### ✅ RESTful API with:
- User registration
- User login
- JWT authentication
- Password hashing
- Protected routes
- Error handling
- MongoDB database

### ✅ Project Structure:
- **server.js** - Main entry point
- **models/** - Database schemas
- **controllers/** - Business logic
- **routes/** - API endpoints
- **middleware/** - Authentication checks
- **utils/** - Helper functions

### ✅ Security Features:
- Passwords hashed (can't be decoded)
- JWT tokens for authentication
- Protected routes require authentication
- Email uniqueness validation

---

## 🚀 Next Steps

1. ✅ **Test all endpoints** thoroughly
2. 🔄 **Connect React frontend** to backend
3. ➕ **Add Event model** (for creating events)
4. ➕ **Add Ticket model** (for event tickets)
5. ➕ **Add event CRUD operations**
6. 📧 **Add email verification**
7. 🔒 **Add password reset**
8. 📷 **Add image upload** (profile pics, event images)

---

## 💡 Tips for Learning

1. **Read error messages carefully** - they tell you what's wrong
2. **Use console.log()** - print variables to understand what's happening
3. **Test one thing at a time** - don't change multiple things at once
4. **Check documentation** - Express docs, Mongoose docs, etc.
5. **Ask for help** - it's okay to not know everything!

---

## 📞 Common Questions

**Q: Do I need to restart the server after making changes?**
A: No! `nodemon` automatically restarts when you save files.

**Q: Can I use a different port?**
A: Yes! Change `PORT` in `.env` file.

**Q: How do I stop the server?**
A: Press `Ctrl + C` in the terminal.

**Q: Can I see what's in my database?**
A: Yes! Use MongoDB Compass (GUI tool) or MongoDB Atlas web interface.

**Q: What if I forget my MongoDB password?**
A: In MongoDB Atlas, go to Database Access and reset the password.

**Q: How do I deploy this?**
A: We'll cover deployment later. For now, focus on local development.

---

**You're doing great! Don't worry if things don't work perfectly the first time. That's normal in development. Keep trying and you'll get it! 💪**

**Need help? Check the error message, read it carefully, and try to understand what it's telling you.**

---

**Happy Learning! 🎓**
