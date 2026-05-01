from pdf_generator import generate_pdf
from ocr_service import process_ocr
from models.document import Document
from models.form import Form

class DocumentProcessor:
    def __init__(self):
        pass

    def process_document(self, file):
        # Process the uploaded document
        document = Document(file=file)
        document.save()
        return document

    def generate_document(self, form_data):
        # Generate a PDF document from the form data
        pdf = generate_pdf(form_data)
        return pdf

    def upload_ocr_document(self, file):
        # Process the document for OCR
        ocr_result = process_ocr(file)
        return ocr_result

    def save_form_data(self, form_data):
        # Save the form data to the database
        form = Form(**form_data)
        form.save()
        return form