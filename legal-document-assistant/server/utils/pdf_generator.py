from fpdf import FPDF

class PDFGenerator:
    def __init__(self):
        self.pdf = FPDF()
        self.pdf.set_auto_page_break(auto=True, margin=15)
        self.pdf.add_page()
        self.pdf.set_font("Arial", size=12)

    def add_title(self, title):
        self.pdf.set_font("Arial", 'B', 16)
        self.pdf.cell(0, 10, title, ln=True, align='C')
        self.pdf.ln(10)

    def add_paragraph(self, text):
        self.pdf.set_font("Arial", size=12)
        self.pdf.multi_cell(0, 10, text)
        self.pdf.ln()

    def save_pdf(self, filename):
        self.pdf.output(filename)

# Example usage:
# pdf_gen = PDFGenerator()
# pdf_gen.add_title("Legal Document Title")
# pdf_gen.add_paragraph("This is a sample paragraph for the legal document.")
# pdf_gen.save_pdf("legal_document.pdf")