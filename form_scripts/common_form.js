document.getElementById("clearFormBtn")?.addEventListener("click", () => {
    document.getElementById("legalForm").reset();
});

document.getElementById("downloadFormBtn")?.addEventListener("click", () => {
    alert("Document generated successfully!");
});