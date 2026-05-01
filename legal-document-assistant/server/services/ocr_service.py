import pytesseract
from PIL import Image
from pdf2image import convert_from_path
import os

pytesseract.pytesseract.tesseract_cmd = "/usr/bin/tesseract"

def process_ocr(file_path):
    try:
        ext = file_path.split('.')[-1].lower()

        # 🔥 If PDF → convert to image
        if ext == "pdf":
            images = convert_from_path(file_path)
            text = ""

            for img in images:
                text += pytesseract.image_to_string(img)

            return text

        # 🔥 If image → normal OCR
        else:
            image = Image.open(file_path)
            text = pytesseract.image_to_string(image)
            return text

    except Exception as e:
        return f"OCR failed: {str(e)}"