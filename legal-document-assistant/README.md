# Legal Document Assistant

This project is a Legal Document Assistant that provides users with a seamless experience for managing legal documents. It includes a React frontend and a Python backend, allowing users to interact with various features such as voice commands, document uploads, and form submissions.

## Project Structure

The project is divided into two main parts: the client (frontend) and the server (backend).

### Client

The client is built using React and includes the following features:

- **Home Page**: The landing page of the application.
- **Voice Interface**: A page that allows users to select documents using voice commands.
- **User Form Page**: A form for users to input their details.
- **OCR Upload Page**: A page for users to upload documents for Optical Character Recognition (OCR) processing.
- **Document Explanation Page**: A page that provides explanations for supported documents.
- **Completed Forms Page**: A page that showcases completed forms.

### Server

The server is built using Python and includes the following components:

- **API Endpoints**: For managing documents, forms, OCR processing, and speech recognition.
- **Models**: Definitions for documents, forms, and users.
- **Services**: Logic for processing documents, natural language processing, and OCR.
- **Utilities**: Helper functions for form validation and PDF generation.

## Getting Started

### Prerequisites

- Node.js and npm for the client
- Python and pip for the server

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd legal-document-assistant
   ```

2. Install client dependencies:
   ```
   cd client
   npm install
   ```

3. Install server dependencies:
   ```
   cd server
   pip install -r requirements.txt
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   python app.py
   ```

2. Start the client:
   ```
   cd client
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.