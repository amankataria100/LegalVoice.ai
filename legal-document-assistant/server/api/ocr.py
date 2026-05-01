from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from services.ocr_service import process_ocr

ocr_bp = Blueprint('ocr', __name__)

UPLOAD_FOLDER = 'static/documents'

# Ensure it's a directory
if os.path.exists(UPLOAD_FOLDER) and not os.path.isdir(UPLOAD_FOLDER):
    os.remove(UPLOAD_FOLDER)

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@ocr_bp.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400

        file = request.files['file']
        filename = secure_filename(file.filename)

        file_path = os.path.join(UPLOAD_FOLDER, filename)
        file.save(file_path)

        text = process_ocr(file_path)

        return jsonify({'text': text}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500