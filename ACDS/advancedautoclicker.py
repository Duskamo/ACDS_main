from flask import Flask, render_template

app = Flask(__name__, 
            template_folder="app/templates",
            static_url_path="",
            static_folder="app/static")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download')
def download():
    return render_template('download.html')

if __name__ == '__main__':
    app.run()
