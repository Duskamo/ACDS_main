from flask import Flask, render_template, send_file, request, send_from_directory

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

@app.route('/sitemap.xml')
@app.route('/robots.txt')
def static_from_root():
    return send_from_directory(app.static_folder,request.path[1:])

@app.route('/download_exe')
def download_exe():
    path = "AutoClicker.exe"
    return send_file(path, as_attachment=True)

if __name__ == '__main__':
    app.run()
