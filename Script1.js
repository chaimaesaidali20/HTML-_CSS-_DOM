// Sélectionner tous les boutons "Voir détails"
const buttons = document.querySelectorAll(".details-btn");

// Vérifier qu'il y a bien des boutons avant de boucler
if (buttons.length > 0) {
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {

            // Vérifier que l'élément suivant existe
            const details = btn.nextElementSibling;

            if (!details) {
                console.error("Aucun élément 'details' trouvé pour ce bouton.");
                return;
            }

            // Basculer la classe hidden
            details.classList.toggle("hidden");

            // Mettre à jour le texte du bouton
            btn.textContent = details.classList.contains("hidden")
                ? "Voir détails"
                : "Masquer";
        });
    });
} else {
    console.warn("Aucun bouton '.details-btn' trouvé dans le DOM.");
}
