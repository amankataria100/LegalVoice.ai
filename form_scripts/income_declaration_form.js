document.addEventListener("DOMContentLoaded", function () {

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    document.getElementById("microphoneBtn").onclick = () => recognition.start();

    recognition.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript.toLowerCase();

        if (text.includes("name")) {
            document.getElementById("name").value = text.replace("name", "");
        }

        else if (text.includes("income")) {
            document.getElementById("income").value = text.replace("income", "");
        }

        else if (text.includes("occupation")) {
            document.getElementById("occupation").value = text.replace("occupation", "");
        }
    };
});