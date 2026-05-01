import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a_default_secret_key'
    DEBUG = os.environ.get('DEBUG', 'False').lower() in ['true', '1']
    DATABASE_URI = os.environ.get('DATABASE_URI') or 'sqlite:///site.db'
    UPLOAD_FOLDER = os.environ.get('UPLOAD_FOLDER') or 'server/static/documents'
    ALLOWED_EXTENSIONS = {'pdf', 'docx', 'txt'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS