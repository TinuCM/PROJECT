# AI Shopping Assistant Backend

Production-ready FastAPI backend with JWT authentication and SQLite database.

## Tech Stack

- **FastAPI** - Modern Python web framework
- **SQLite** - Lightweight database
- **SQLAlchemy** - ORM for database operations
- **JWT** - Secure token-based authentication
- **Bcrypt** - Password hashing

## Project Structure

```
app/
├── __init__.py
├── main.py          # FastAPI app and routes
├── config.py        # Configuration settings
├── database.py      # Database connection
├── models.py        # SQLAlchemy models
├── schemas.py       # Pydantic schemas
├── auth.py          # Authentication logic
├── crud.py          # Database operations
└── deps.py          # Dependencies
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/auth/me` - Get current user (protected)

### Admin

- `GET /api/admin/users` - List all users

## How to Run

### 1. Create Virtual Environment (Python 3.11)

```bash
python -m venv venv
```

### 2. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**Linux/Mac:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Server

```bash
uvicorn app.main:app --reload
```

The API will be available at: `http://localhost:8000`

API documentation: `http://localhost:8000/docs`

## Frontend Integration

The backend is configured to accept requests from:
- `http://localhost:3000`
- `http://127.0.0.1:3000`

CORS is properly configured for seamless frontend integration.

## Database

SQLite database (`app.db`) will be automatically created on first run. Tables are created automatically at startup.

## Authentication Flow

1. **Signup**: POST to `/api/auth/signup` with username, email, password
2. **Login**: POST to `/api/auth/login` with email, password → returns JWT token
3. **Protected Routes**: Include `Authorization: Bearer <token>` header

## Security Features

- Password hashing using bcrypt
- JWT token expiration (60 minutes)
- Secure token validation
- CORS protection

