document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".document-option-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {

            const type = this.dataset.docType;

            const routes = {
    challan: "forms/traffic_challan_form.html",
    affidavit: "forms/affidavit_form.html",
    poa: "forms/power_of_attorney_form.html",
    rent: "forms/rent_agreement_form.html",
    income: "forms/income_declaration_form.html",
    will: "forms/will_form.html"
};

            const path = routes[type];

            if (path) {
                window.location.href = path;
            } else {
                alert("Form not found");
            }
        });
    });

});