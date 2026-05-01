import React from 'react';
import PropTypes from 'prop-types';
import './FormField.css';

const FormField = ({ label, type, value, onChange, required, error }) => {
    return (
        <div className="form-field">
            <label className="form-field__label">
                {label}
                {required && <span className="form-field__required">*</span>}
            </label>
            <input
                className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
            />
            {error && <span className="form-field__error-message">{error}</span>}
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    error: PropTypes.string,
};

FormField.defaultProps = {
    required: false,
    error: '',
};

export default FormField;