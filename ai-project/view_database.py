import sqlite3
from datetime import datetime

conn = sqlite3.connect('app.db')
cursor = conn.cursor()

print('\n' + '='*70)
print('              DATABASE CONTENTS (app.db)'.center(70))
print('='*70 + '\n')

# Show all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
tables = cursor.fetchall()
print(f"📊 Tables: {[t[0] for t in tables]}\n")

print('='*70)
print('👥 USERS TABLE'.center(70))
print('='*70 + '\n')

# Show all users
cursor.execute('SELECT id, username, email, password_hash, created_at FROM users')
users = cursor.fetchall()

for user in users:
    print(f'🆔 ID:            {user[0]}')
    print(f'👤 Username:      {user[1]}')
    print(f'📧 Email:         {user[2]}')
    print(f'🔒 Password Hash: {user[3][:60]}...')
    print(f'📅 Created At:    {user[4]}')
    print('-'*70)

print(f'\n📈 Total Users: {len(users)}')
print('='*70 + '\n')

conn.close()

