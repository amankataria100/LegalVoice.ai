from flask import Blueprint, request, jsonify
import pytesseract
from PIL import Image
import os

ocr_bp = Blueprint('ocr', __name__)

@ocr_bp.route('/upload', methods=['POST'])
def upload_document():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        # Save the file to a temporary location
        temp_file_path = os.path.join('server/static/documents', file.filename)
        file.save(temp_file_path)

        # Perform OCR on the uploaded document
        text = extract_text_from_image(temp_file_path)

        # Optionally, delete the temporary file after processing
        os.remove(temp_file_path)

        return jsonify({'extracted_text': text}), 200

def extract_text_from_image(image_path):
    # Use pytesseract to extract text from the image
    try:
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image)
        return text
    except Exception as e:
        return str(e)