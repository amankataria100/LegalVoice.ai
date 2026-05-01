document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".document-option-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {

            const type = this.dataset.docType;
            console.log("Clicked:", type);

            // 🔥 For now, all go to same form
            window.location.href = "forms/affidavit_form.html";
        });
    });

});