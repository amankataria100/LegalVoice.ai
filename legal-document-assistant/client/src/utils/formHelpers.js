// This file contains helper functions for form management.

export const validateFormFields = (fields) => {
    const errors = {};
    for (const [key, value] of Object.entries(fields)) {
        if (!value) {
            errors[key] = `${key} is required.`;
        }
    }
    return errors;
};

export const formatFormData = (data) => {
    return {
        ...data,
        fullName: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.replace(/\D/g, ''), // Remove non-numeric characters
    };
};

export const resetFormFields = (form) => {
    Object.keys(form).forEach(key => {
        form[key] = '';
    });
    return form;
};