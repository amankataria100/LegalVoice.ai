document.addEventListener("DOMContentLoaded", function () {

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    document.getElementById("microphoneBtn").onclick = () => recognition.start();

    recognition.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript.toLowerCase();

        if (text.includes("name")) {
            document.getElementById("testator").value = text.replace("name", "");
        }

        else if (text.includes("beneficiary")) {
            document.getElementById("beneficiary").value = text.replace("beneficiary", "");
        }

        else if (text.includes("assets")) {
            document.getElementById("assets").value = text.replace("assets", "");
        }
    };
});