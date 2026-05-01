from fpdf import FPDF

def generate_pdf(data):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)

    # Simple content
    for key, value in data.items():
        pdf.cell(200, 10, txt=f"{key}: {value}", ln=True)

    file_path = "output.pdf"
    pdf.output(file_path)

    return file_path