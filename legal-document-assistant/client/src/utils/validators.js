export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validatePhoneNumber = (phone) => {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(String(phone));
};

export const validateRequiredField = (value) => {
    return value.trim() !== '';
};

export const validateDate = (dateString) => {
    const re = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    return re.test(dateString);
};