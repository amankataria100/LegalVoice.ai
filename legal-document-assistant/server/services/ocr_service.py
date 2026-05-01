import pytesseract
from PIL import Image

def process_ocr(file_path):
    try:
        image = Image.open(file_path)
        text = pytesseract.image_to_string(image)
        return text
    except Exception as e:
        return f"OCR failed: {str(e)}"