import pytesseract
from PIL import Image
pytesseract.pytesseract.tesseract_cmd = "/usr/bin/tesseract"
def process_ocr(file_path):
    try:
        image = Image.open(file_path)
        text = pytesseract.image_to_string(image)
        return text
    except Exception as e:
        return f"OCR failed: {str(e)}"