document.addEventListener('DOMContentLoaded', function() {

    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadStatus = document.getElementById('uploadStatus');
    const uploadProgress = document.getElementById('uploadProgress');
    const uploadStatusText = document.getElementById('uploadStatusText');
    const documentAnalysis = document.getElementById('documentAnalysis');
    const summaryContent = document.getElementById('summaryContent');
    const keyInfoGrid = document.getElementById('keyInfoGrid');
    const extractedText = document.getElementById('extractedTextContent');

    let currentDocumentData = null;

    // =========================
    // Drag & Drop Setup
    // =========================
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => uploadArea.classList.add('highlight'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        uploadArea.addEventListener(eventName, () => uploadArea.classList.remove('highlight'), false);
    });

    uploadArea.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files.length > 0) handleFiles(files);
    });

    uploadArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) handleFiles(this.files);
    });

    // =========================
    // Handle Files
    // =========================
    function handleFiles(files) {
        const file = files[0];

        const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            showError("Only PDF, JPG, JPEG, PNG allowed.");
            return;
        }

        uploadToBackend(file);
    }

    // =========================
    // 🔥 REAL API CALL
    // =========================
    async function uploadToBackend(file) {
        try {
            const API_URL = "https://legalvoiceai-production.up.railway.app/api/ocr/upload";

            const formData = new FormData();
            formData.append("file", file);

            uploadStatus.style.display = 'block';
            uploadProgress.style.width = '20%';
            uploadStatusText.textContent = "Uploading...";

            const response = await fetch(API_URL, {
                method: "POST",
                body: formData
            });

            uploadProgress.style.width = '70%';
            uploadStatusText.textContent = "Processing OCR...";

            const data = await response.json();

            uploadProgress.style.width = '100%';
            uploadStatusText.textContent = "Completed ✅";

            // =========================
            // Show Results
            // =========================
            currentDocumentData = {
                summary: "OCR extraction completed successfully.",
                keyInfo: [
                    { label: "File Name", value: file.name },
                    { label: "Status", value: "Processed" }
                ],
                extractedText: data.text || data.error || "No text extracted"
            };

            displayDocumentAnalysis();

        } catch (error) {
            console.error(error);
            showError("Failed to connect to backend.");
        }
    }

    // =========================
    // Display Results
    // =========================
    function displayDocumentAnalysis() {

        summaryContent.textContent = currentDocumentData.summary;

        keyInfoGrid.innerHTML = '';
        currentDocumentData.keyInfo.forEach(item => {
            const div = document.createElement('div');
            div.className = 'key-info-item';
            div.innerHTML = `
                <div class="key-info-label">${item.label}</div>
                <div class="key-info-value">${item.value}</div>
            `;
            keyInfoGrid.appendChild(div);
        });

        extractedText.textContent = currentDocumentData.extractedText;

        documentAnalysis.style.display = 'block';
    }

    // =========================
    // Error Handling
    // =========================
    function showError(message) {
        alert(message);
    }

});document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function () {

        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

        this.classList.add('active');

        const tab = this.getAttribute('data-tab');
        document.getElementById(tab).classList.add('active');
    });
});