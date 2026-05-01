from flask import Blueprint, request, jsonify
from models.form import Form
from utils.form_validator import validate_form_data

forms_api = Blueprint('forms_api', __name__)

@forms_api.route('/forms', methods=['POST'])
def create_form():
    data = request.json
    validation_errors = validate_form_data(data)
    
    if validation_errors:
        return jsonify({'errors': validation_errors}), 400
    
    new_form = Form(**data)
    new_form.save()
    
    return jsonify({'message': 'Form created successfully', 'form_id': new_form.id}), 201

@forms_api.route('/forms/<int:form_id>', methods=['GET'])
def get_form(form_id):
    form = Form.query.get(form_id)
    
    if not form:
        return jsonify({'error': 'Form not found'}), 404
    
    return jsonify(form.to_dict()), 200

@forms_api.route('/forms', methods=['GET'])
def list_forms():
    forms = Form.query.all()
    return jsonify([form.to_dict() for form in forms]), 200

@forms_api.route('/forms/<int:form_id>', methods=['DELETE'])
def delete_form(form_id):
    form = Form.query.get(form_id)
    
    if not form:
        return jsonify({'error': 'Form not found'}), 404
    
    form.delete()
    return jsonify({'message': 'Form deleted successfully'}), 200