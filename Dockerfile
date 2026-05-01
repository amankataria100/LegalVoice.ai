FROM python:3.9

RUN apt-get update && apt-get install -y tesseract-ocr

WORKDIR /app

# Copy ONLY backend folder
COPY legal-document-assistant/server/ .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "app.py"]