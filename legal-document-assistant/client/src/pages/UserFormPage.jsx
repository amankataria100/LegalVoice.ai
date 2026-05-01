import React, { useState } from 'react';
import FormField from '../components/FormField';
import './UserFormPage.css';

const UserFormPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dob: '',
        address: '',
        email: '',
        phone: '',
        legalPurpose: '',
        urgency: '',
        legalDetails: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="user-form-page">
            <h1>User Details Form</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="Full Legal Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Legal Address"
                    name="address"
                    component="textarea"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Purpose of Legal Form"
                    name="legalPurpose"
                    component="select"
                    value={formData.legalPurpose}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Select Purpose --</option>
                    <option value="contract">Contract Review</option>
                    <option value="willTrust">Will or Trust</option>
                    <option value="powerOfAttorney">Power of Attorney</option>
                    <option value="realEstate">Real Estate Transaction</option>
                    <option value="business">Business Formation</option>
                    <option value="other">Other Legal Matter</option>
                </FormField>
                <FormField
                    label="Urgency Level"
                    name="urgency"
                    component="select"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Select Urgency --</option>
                    <option value="immediate">Immediate (within 24 hours)</option>
                    <option value="urgent">Urgent (within 3 days)</option>
                    <option value="standard">Standard (within 1 week)</option>
                    <option value="flexible">Flexible (within 1 month)</option>
                </FormField>
                <FormField
                    label="Additional Details"
                    name="legalDetails"
                    component="textarea"
                    value={formData.legalDetails}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserFormPage;