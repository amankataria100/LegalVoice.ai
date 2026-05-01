document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".document-option-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {

            const type = this.getAttribute("data-doc-type");

            navigateToForm(type);
        });
    });

    function navigateToForm(type) {

        const routes = {
            challan: "forms/traffic_challan.html",
            affidavit: "forms/affidavit.html",
            poa: "forms/power_of_attorney.html",
            rent: "forms/rent_agreement.html",
            income: "forms/income_declaration.html",
            will: "forms/will.html"
        };

        const path = routes[type];

        if (path) {
            window.location.href = path;
        } else {
            alert("Document not found!");
        }
    }

});