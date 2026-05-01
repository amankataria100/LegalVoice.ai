from flask import Flask
from flask_cors import CORS
from api.documents import documents_bp
from api.forms import forms_bp
from api.ocr import ocr_bp
from api.speech import speech_bp
import os

app = Flask(__name__)
CORS(app)

# Register blueprints
app.register_blueprint(documents_bp, url_prefix='/api/documents')
app.register_blueprint(forms_bp, url_prefix='/api/forms')
app.register_blueprint(ocr_bp, url_prefix='/api/ocr')
app.register_blueprint(speech_bp, url_prefix='/api/speech')

@app.route('/')
def home():
    return "Welcome to the Legal Document Assistant API!"

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)