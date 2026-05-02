document.addEventListener("DOMContentLoaded", function () {

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const micBtn = document.getElementById("microphoneBtn");
    const status = document.getElementById("statusMessage");
    const transcriptText = document.getElementById("transcriptText");

    recognition.continuous = true;

    micBtn.onclick = () => {
        recognition.start();
        status.innerText = "Listening...";
    };

    recognition.onresult = (event) => {
        const text = event.results[event.results.length - 1][0].transcript.toLowerCase();
        transcriptText.innerText = text;

        if (text.includes("vehicle")) {
            document.getElementById("vehicleNumber").value = text.replace("vehicle", "");
        }

        else if (text.includes("owner")) {
            document.getElementById("ownerName").value = text.replace("owner", "");
        }

        else if (text.includes("violation")) {
            document.getElementById("violation").value = text.replace("violation", "");
        }

        else if (text.includes("fine")) {
            document.getElementById("fineAmount").value = text.replace("fine", "");
        }

        else if (text.includes("date")) {
            document.getElementById("date").value = new Date().toISOString().split("T")[0];
        }

        else if (text.includes("clear")) {
            document.getElementById("legalForm").reset();
        }
    };
});