document.addEventListener("DOMContentLoaded", function () {

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    document.getElementById("microphoneBtn").onclick = () => recognition.start();

    recognition.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript.toLowerCase();

        if (text.includes("grantor")) {
            document.getElementById("grantor").value = text.replace("grantor", "");
        }

        else if (text.includes("agent")) {
            document.getElementById("agent").value = text.replace("agent", "");
        }

        else if (text.includes("power")) {
            document.getElementById("powers").value = text.replace("power", "");
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