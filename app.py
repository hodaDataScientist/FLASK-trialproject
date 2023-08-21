from flask import Flask , render_template

app= Flask(__name__)

#@app.route('/')

#def index():
 #   return render_template('index.html')

#if __name__ == "__maine__":
    #app.run(debug=True)
    
    
@app.route('/user/<name>')

def user(name):
    return render_template('user.html',user_name=name)