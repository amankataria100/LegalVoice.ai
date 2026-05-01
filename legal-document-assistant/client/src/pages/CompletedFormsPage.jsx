import React, { useEffect, useState } from 'react';
import DocumentCard from '../components/DocumentCard';
import { fetchCompletedForms } from '../services/documentService';
import './CompletedFormsPage.css';

const CompletedFormsPage = () => {
    const [completedForms, setCompletedForms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCompletedForms = async () => {
            try {
                const forms = await fetchCompletedForms();
                setCompletedForms(forms);
            } catch (err) {
                setError('Failed to fetch completed forms.');
            } finally {
                setLoading(false);
            }
        };

        getCompletedForms();
    }, []);

    if (loading) {
        return <div className="loading-spinner">Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="completed-forms-page">
            <h1>Completed Forms</h1>
            <div className="forms-list">
                {completedForms.length > 0 ? (
                    completedForms.map(form => (
                        <DocumentCard key={form.id} document={form} />
                    ))
                ) : (
                    <p>No completed forms available.</p>
                )}
            </div>
        </div>
    );
};

export default CompletedFormsPage;