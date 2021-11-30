
from flask import Flask, jsonify, render_template, request
app = Flask(__name__)


@app.route('/_autocomplete')
def autocomplete():
    """Add two numbers server side, ridiculous but well..."""
    artists = ["Abba", "Bob Dylan", "Bobby McFerren", "Billy Joel", "Billie Holiday"]
    q = request.args.get('q', "")

    matches = list()
    for a in artists:
        if a.lower().startswith(q.lower()):
            matches.append(a)

    return jsonify(result=matches)


@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=5003)