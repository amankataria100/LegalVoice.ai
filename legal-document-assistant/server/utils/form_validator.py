def validate_user_form(data):
    errors = {}
    
    if not data.get('fullName'):
        errors['fullName'] = 'Full legal name is required.'
    
    if not data.get('dob'):
        errors['dob'] = 'Date of birth is required.'
    else:
        # Additional date validation can be added here
        pass
    
    if not data.get('address'):
        errors['address'] = 'Legal address is required.'
    
    if not data.get('email'):
        errors['email'] = 'Email address is required.'
    elif '@' not in data['email']:
        errors['email'] = 'Invalid email address format.'
    
    if not data.get('phone'):
        errors['phone'] = 'Phone number is required.'
    elif not re.match(r'^\d{3}-\d{3}-\d{4}$', data['phone']):
        errors['phone'] = 'Phone number must be in the format: 123-456-7890.'
    
    if not data.get('legalPurpose'):
        errors['legalPurpose'] = 'Purpose of legal form is required.'
    
    if not data.get('urgency'):
        errors['urgency'] = 'Urgency level is required.'
    
    return errors

def validate_document_upload(file):
    errors = {}
    
    if not file:
        errors['file'] = 'File upload is required.'
    elif not file.filename.endswith(('.pdf', '.docx', '.txt')):
        errors['file'] = 'Unsupported file type. Please upload a PDF, DOCX, or TXT file.'
    
    return errors