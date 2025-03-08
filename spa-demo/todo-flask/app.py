from flask import Flask, render_template, request, redirect

app = Flask(__name__)

todos = [
    'Do yoga',
    'Read books',
    'Walk on land',
    'Solve exercise 4.1',
    'Eat lunch'
]


@app.route('/')
def home():
  return render_template('index.html', todos=todos)


@app.route('/add-todo', methods=['POST'])
def add_todo():
  todo = request.form.get('todo')
  todos.append(todo)
  return redirect('/')


app.run(debug=True)
