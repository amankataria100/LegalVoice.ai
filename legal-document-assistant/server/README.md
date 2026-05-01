# Legal Document Assistant Server

This is the backend server for the Legal Document Assistant application. It is built using Python and provides APIs for managing legal documents, user details, and OCR processing.

## Project Structure

- **api/**: Contains the API endpoints for handling documents, forms, OCR, and speech recognition.
- **config/**: Configuration settings for the server.
- **models/**: Defines the data models used in the application.
- **services/**: Contains business logic for document processing, NLP, and OCR services.
- **static/**: Stores static files such as uploaded documents and templates.
- **templates/**: Contains templates for generating documents.
- **utils/**: Utility functions for form validation and PDF generation.
- **app.py**: The main entry point for the server application.
- **requirements.txt**: Lists the dependencies required for the server.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd legal-document-assistant/server
   ```

2. Create a virtual environment:
   ```
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```
     source venv/bin/activate
     ```

4. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

## Running the Server

To start the server, run the following command:
```
python app.py
```

The server will start on `http://localhost:5000` by default.

## API Endpoints

- **/api/documents**: Manage documents (GET, POST, DELETE).
- **/api/forms**: Manage forms (GET, POST).
- **/api/ocr**: Handle OCR processing (POST).
- **/api/speech**: Handle speech recognition (POST).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.