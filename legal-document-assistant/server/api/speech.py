from flask import Blueprint, request, jsonify
import speech_recognition as sr

speech_bp = Blueprint('speech', __name__)

@speech_bp.route('/api/speech/recognize', methods=['POST'])
def recognize_speech():
    audio_file = request.files.get('audio')
    if not audio_file:
        return jsonify({'error': 'No audio file provided'}), 400

    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_file) as source:
        audio_data = recognizer.record(source)

    try:
        text = recognizer.recognize_google(audio_data)
        return jsonify({'transcript': text}), 200
    except sr.UnknownValueError:
        return jsonify({'error': 'Could not understand audio'}), 400
    except sr.RequestError as e:
        return jsonify({'error': f'Could not request results from Google Speech Recognition service; {e}'}), 500