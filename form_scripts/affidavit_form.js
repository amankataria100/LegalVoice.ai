document.addEventListener("DOMContentLoaded", function () {

    const micBtn = document.getElementById("microphoneBtn");
    const status = document.getElementById("statusMessage");
    const transcriptText = document.getElementById("transcriptText");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech Recognition not supported in this browser. Use Chrome.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    let isListening = false;

    // 🎤 BUTTON CLICK
    micBtn.addEventListener("click", () => {
        if (!isListening) {
            recognition.start();
            status.textContent = "Listening...";
            micBtn.textContent = "Stop Listening";
            isListening = true;
        } else {
            recognition.stop();
            status.textContent = "Stopped";
            micBtn.textContent = "Start Voice Recognition";
            isListening = false;
        }
    });

    // 🧠 RESULT HANDLER
    recognition.onresult = function (event) {
        const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();

        document.getElementById("recognizedText").style.display = "block";
        transcriptText.innerText = transcript;

        handleVoiceCommand(transcript);
    };

    recognition.onerror = function (event) {
        status.textContent = "Error: " + event.error;
    };

    // 🔥 COMMAND LOGIC
    function handleVoiceCommand(text) {

        if (text.includes("full name")) {
            document.getElementById("fullName").value =
                text.replace("full name", "").trim();
        }

        else if (text.includes("father")) {
            document.getElementById("fatherName").value =
                text.replace("father name", "").trim();
        }

        else if (text.includes("age")) {
            document.getElementById("age").value =
                text.replace("age", "").trim();
        }

        else if (text.includes("address")) {
            document.getElementById("address").value =
                text.replace("address", "").trim();
        }

        else if (text.includes("purpose")) {
            document.getElementById("affidavitPurpose").value = "other";
        }

        else if (text.includes("statement")) {
            document.getElementById("statement").value =
                text.replace("statement", "").trim();
        }

        else if (text.includes("place")) {
            document.getElementById("place").value =
                text.replace("place", "").trim();
        }

        else if (text.includes("clear")) {
            document.getElementById("legalForm").reset();
        }

        else if (text.includes("submit")) {
            alert("Form submitted successfully!");
        }
    }

});