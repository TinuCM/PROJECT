@echo off
echo Starting Backend Server...
echo.
echo Make sure you're in the ai-project\backend directory
echo.
cd /d %~dp0
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
pause

