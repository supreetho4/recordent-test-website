from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''
              CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              name TEXT NOT NULL,
              email TEXT UNIQUE NOT NULL,
              mobile TEXT,
              password TEXT NOT NULL
              )
            ''')
    conn.commit()
    conn.close()

init_db()

@app.route('/signup', methods=['POST'])
def signup():
    name = request.form.get('name-field')
    email = request.form.get('email-field')
    mobile = request.form.get('mobile-field')
    password = request.form.get('pw-field')

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)', (name, email, mobile, password))
    conn.commit()
    conn.close()

    return "Signup Successful"

if __name__ == '__main__':
    app.run(debug = True)