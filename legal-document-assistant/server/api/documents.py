from flask import Blueprint, request, jsonify
from server.models.document import Document
from server.services.document_processor import process_document

documents_bp = Blueprint('documents', __name__)

@documents_bp.route('/api/documents', methods=['GET'])
def get_documents():
    documents = Document.query.all()
    return jsonify([doc.to_dict() for doc in documents]), 200

@documents_bp.route('/api/documents', methods=['POST'])
def upload_document():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    document = process_document(file)
    return jsonify(document.to_dict()), 201

@documents_bp.route('/api/documents/<int:document_id>', methods=['DELETE'])
def delete_document(document_id):
    document = Document.query.get(document_id)
    if not document:
        return jsonify({'error': 'Document not found'}), 404

    document.delete()
    return jsonify({'message': 'Document deleted successfully'}), 200