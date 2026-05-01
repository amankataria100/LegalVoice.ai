from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from services.ocr_service import process_ocr

ocr_bp = Blueprint('ocr', __name__)

UPLOAD_FOLDER = 'static/documents'
ALLOWED_EXTENSIONS = {'pdf', 'jpg', 'jpeg', 'png'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@ocr_bp.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)
        text = process_ocr(file_path)
        return jsonify({'text': text}), 200
    return jsonify({'error': 'File type not allowed'}), 400