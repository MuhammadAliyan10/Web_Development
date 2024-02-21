from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

user_data = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    print(username,password)
    user_data.append({'username': username, 'password': password})
    return jsonify({'message': 'success', 'username': username}), 200

@app.route('/data')
def get_user_data():
    return jsonify(user_data)

if __name__ == '__main__':
    app.run(debug=True)


