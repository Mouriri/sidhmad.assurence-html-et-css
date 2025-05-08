
// pour le menu mobil (hamburger)

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.menu a');

burger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Fermer le menu quand on clique sur un lien
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});



// Script pour les accordéons dans la section Services
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            // Fermer tous les panneaux sauf celui cliqué
            accordions.forEach((acc) => {
                if (acc !== this) {
                    acc.classList.remove("active");
                    acc.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle le panneau cliqué
            this.classList.toggle("active");

            const panel = this.nextElementSibling;
            if (this.classList.contains("active")) {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                panel.style.maxHeight = null;
            }
        });
    });

    // Formulaire de contact : simple alerte de confirmation
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // empêche l'envoi réel du formulaire
            alert("Merci pour votre message ! Nous vous contacterons bientôt.");
            this.reset(); // réinitialise le formulaire
        });
    }
});
