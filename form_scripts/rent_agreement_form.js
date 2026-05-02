document.addEventListener("DOMContentLoaded", function () {

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    document.getElementById("microphoneBtn").onclick = () => recognition.start();

    recognition.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript.toLowerCase();

        if (text.includes("tenant")) {
            document.getElementById("tenantName").value = text.replace("tenant", "");
        }

        else if (text.includes("owner")) {
            document.getElementById("ownerName").value = text.replace("owner", "");
        }

        else if (text.includes("rent")) {
            document.getElementById("rentAmount").value = text.replace("rent", "");
        }

        else if (text.includes("address")) {
            document.getElementById("propertyAddress").value = text.replace("address", "");
        }
    };
});document.getElementById("clearFormBtn")?.addEventListener("click", () => {
    document.getElementById("legalForm").reset();
});

document.getElementById("saveFormBtn")?.addEventListener("click", () => {
    alert("Form saved successfully!");
});

document.getElementById("downloadFormBtn")?.addEventListener("click", () => {
    const data = new FormData(document.getElementById("legalForm"));
    console.log(Object.fromEntries(data));
});