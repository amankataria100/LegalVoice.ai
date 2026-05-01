from transformers import pipeline

class NLPService:
    def __init__(self):
        self.nlp_pipeline = pipeline("question-answering")

    def answer_question(self, question, context):
        result = self.nlp_pipeline(question=question, context=context)
        return result['answer']

    def summarize_text(self, text):
        summarizer = pipeline("summarization")
        summary = summarizer(text, max_length=130, min_length=30, do_sample=False)
        return summary[0]['summary_text']

    def extract_entities(self, text):
        ner_pipeline = pipeline("ner", aggregation_strategy="simple")
        entities = ner_pipeline(text)
        return entities

    def classify_text(self, text, labels):
        classifier = pipeline("zero-shot-classification")
        result = classifier(text, candidate_labels=labels)
        return result['labels'][0], result['scores'][0]  # return the top label and its score