WORKDIR /app

COPY legal-document-assistant/ .

WORKDIR /app/server

RUN pip install -r requirements.txt

CMD ["python", "app.py"]