from utils.pdf_generator import generate_pdf
from services.ocr_service import process_ocr

def process_document(file):
    try:
        # Save file temporarily
        file_path = f"temp_{file.filename}"
        file.save(file_path)

        # Extract text using OCR
        text = process_ocr(file_path)

        # Generate PDF (optional step)
        pdf_path = generate_pdf({"content": text})

        # Return mock document object
        return {
            "filename": file.filename,
            "text": text,
            "pdf": pdf_path
        }

    except Exception as e:
        return {
            "error": str(e)
        }