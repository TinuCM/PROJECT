# 🚀 How to Start Your Full-Stack Application

## Complete Startup Guide

---

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ Python 3.11+ installed
- ✅ Node.js installed
- ✅ Virtual environment created (`venv` folder exists)
- ✅ Dependencies installed (both Python and Node)

---

## 🎯 Quick Start (2 Steps)

### Step 1: Start the Backend (FastAPI)

**Open Terminal 1** (PowerShell in project root):

```powershell
# Navigate to project root
cd "C:\Users\TinuCMathew(G10XIND)\OneDrive - G10X Technology Private Limited\Desktop\new"

# Activate virtual environment
.\venv\Scripts\activate

# Start FastAPI server
uvicorn app.main:app --reload
```

**Expected Output:**
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

✅ Backend is now running on: **http://localhost:8000**

---

### Step 2: Start the Frontend (React)

**Open Terminal 2** (PowerShell, new terminal):

```powershell
# Navigate to React project
cd "C:\Users\TinuCMathew(G10XIND)\OneDrive - G10X Technology Private Limited\Desktop\new\ai-project\prj"

# Start React development server
npm run dev
```

**Expected Output:**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

✅ Frontend is now running on: **http://localhost:3000**

---

## ✅ Verify Everything is Running

Open your browser and check:

1. **Backend API**: http://localhost:8000
   - Should show: `{"message":"AI Shopping Assistant API is running"}`

2. **Backend Docs**: http://localhost:8000/docs
   - Should show Swagger UI with all API endpoints

3. **Frontend App**: http://localhost:3000
   - Should show your React application

---

## 🎮 Using the Application

### 1. Create an Account
1. Go to http://localhost:3000
2. Click **"Sign Up"** or **"Get Started"**
3. Fill in the form:
   - Full Name: `Your Name`
   - Email: `you@example.com`
   - Password: `yourpassword`
   - Confirm password
   - ✅ Agree to terms
4. Click **"Create Account"**
5. You'll see success message and be redirected to login

### 2. Login
1. Enter your email and password
2. Click **"Sign In"**
3. You're now logged in! 🎉

### 3. Use the App
- Access your dashboard
- Manage inventory
- Plan meals
- Create shopping lists

---

## 🛑 How to Stop the Application

### Stop Backend:
- In Terminal 1, press: **CTRL + C**

### Stop Frontend:
- In Terminal 2, press: **CTRL + C**

---

## 🔄 Restart the Application

Just run the same commands again:

**Terminal 1 (Backend):**
```powershell
.\venv\Scripts\activate
uvicorn app.main:app --reload
```

**Terminal 2 (Frontend):**
```powershell
npm run dev
```

Your data persists in `app.db` - all users and data will still be there!

---

## 📊 Architecture Overview

```
┌─────────────────────────────────────────┐
│         Browser (localhost:3000)        │
│              React Frontend             │
└────────────────┬────────────────────────┘
                 │ API Calls (fetch)
                 ↓
┌─────────────────────────────────────────┐
│         Backend (localhost:8000)        │
│          FastAPI + Uvicorn              │
└────────────────┬────────────────────────┘
                 │ SQL Queries
                 ↓
┌─────────────────────────────────────────┐
│          Database (app.db)              │
│          SQLite Database                │
└─────────────────────────────────────────┘
```

---

## 🐛 Troubleshooting

### Backend won't start

**Error: "No module named 'fastapi'"**
```powershell
# Install dependencies
.\venv\Scripts\activate
pip install -r requirements.txt
```

**Error: "Port 8000 already in use"**
```powershell
# Stop any running Python processes
Stop-Process -Name "python" -Force
# Then start again
uvicorn app.main:app --reload
```

### Frontend won't start

**Error: "command not found: npm"**
- Install Node.js from: https://nodejs.org/

**Error: "Cannot find module"**
```powershell
# Install dependencies
cd ai-project/prj
npm install
```

**Error: "Port 3000 already in use"**
```powershell
# Change port in vite.config.js or stop existing process
# Then start again
npm run dev
```

### Frontend can't connect to backend

**Check:**
1. Backend is running on port 8000
2. Frontend is running on port 3000
3. No CORS errors in browser console (F12)
4. Check `AuthContext.jsx` has `API_BASE_URL = 'http://localhost:8000'`

---

## 📁 Project Structure

```
new/
├── app/                          # Backend (FastAPI)
│   ├── __init__.py
│   ├── main.py                   # FastAPI app
│   ├── auth.py                   # JWT authentication
│   ├── models.py                 # Database models
│   ├── schemas.py                # Pydantic schemas
│   ├── crud.py                   # Database operations
│   ├── config.py                 # Configuration
│   ├── database.py               # DB connection
│   └── deps.py                   # Dependencies
│
├── ai-project/prj/               # Frontend (React)
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── context/              # Context API
│   │   │   └── AuthContext.jsx   # Authentication logic
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── venv/                         # Python virtual environment
├── app.db                        # SQLite database
├── requirements.txt              # Python dependencies
└── view_database.py              # Database viewer script
```

---

## 🎯 Development Workflow

### Daily Startup:
1. Open 2 terminals
2. Terminal 1: Start backend
3. Terminal 2: Start frontend
4. Open http://localhost:3000

### Making Changes:

**Backend Changes (Python):**
- Edit files in `app/` folder
- Server auto-reloads (thanks to `--reload` flag)
- Check terminal for errors

**Frontend Changes (React):**
- Edit files in `ai-project/prj/src/`
- Browser auto-refreshes (Vite Hot Module Replacement)
- Check browser console for errors

### View Database:
```powershell
python view_database.py
```

---

## 📦 Installation Commands (First Time Setup)

If you need to set up on a new machine:

### Backend Setup:
```powershell
# Create virtual environment
python -m venv venv

# Activate it
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Frontend Setup:
```powershell
# Navigate to frontend
cd ai-project/prj

# Install dependencies
npm install
```

---

## ✅ Checklist

Before running the app, make sure:

- [ ] Virtual environment exists (`venv` folder)
- [ ] Python packages installed (`pip install -r requirements.txt`)
- [ ] Node modules installed (`npm install` in ai-project/prj)
- [ ] Two terminals ready
- [ ] Backend starts successfully (Terminal 1)
- [ ] Frontend starts successfully (Terminal 2)
- [ ] http://localhost:8000 accessible
- [ ] http://localhost:3000 accessible
- [ ] Can signup and login

---

## 🎊 You're Ready!

Your full-stack AI Shopping Assistant application is now running!

**Happy Coding! 🚀**

