from flask import Flask, jsonify
from random import randint
from flask_cors import CORS

cat_facts = [
    'cats are small and big.',
    'cats are soft.',
    'cats can climb trees',
    'cats are always angry.',
    'cats are wild as well.'
]

app = Flask(__name__)
CORS(app)


@app.route('/fact')
def fact():
  fact = cat_facts[randint(0, len(cat_facts)-1)]
  return jsonify({
      'fact': fact,
      'length': len(fact)
  })


if __name__ == '__main__':
  app.run(debug=True)
