def validate_form_data(data):
    errors = []

    if not data:
        return ["No data provided"]

    # Example validation rules
    if "name" not in data or not data["name"]:
        errors.append("Name is required")

    if "email" not in data or not data["email"]:
        errors.append("Email is required")

    # You can extend this later

    return errors