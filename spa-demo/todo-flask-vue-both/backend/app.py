from flask import Flask, jsonify, redirect, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = {
    0: {'text': 'Eat food', 'is_done': False, 'is_star': False},
    1: {'text': 'Drink juice', 'is_done': True, 'is_star': False},
    2: {'text': 'Have dinner', 'is_done': False, 'is_star': True},
}


@app.route('/')
def index():
  return 'Hello from flask server'


@app.route('/api/get-todos')
def get_todos():
  return jsonify(todos)


@app.route('/api/toggle-done/<int:id>')
def toggle_done(id):
  todos[id]['is_done'] = not todos[id]['is_done']
  return jsonify(todos)


@app.route('/api/toggle-star/<int:id>')
def toggle_star(id):
  todos[id]['is_star'] = not todos[id]['is_star']
  return jsonify(todos)


@app.route('/api/delete/<int:id>')
def delete(id):
  del todos[id]
  return jsonify(todos)


app.run(debug=True)
