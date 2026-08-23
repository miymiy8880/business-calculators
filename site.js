const searchInput = document.getElementById("calculatorSearch");
const cards = document.querySelectorAll(".calculator-card");
const noResults = document.getElementById("noResults");

if (searchInput) {
  searchInput.addEventListener("input", function () {

    const query = this.value.toLowerCase().trim();
    let visible = 0;

    cards.forEach(card => {

      const text = card.textContent.toLowerCase();

      if (text.includes(query)) {
        card.style.display = "";
        visible++;
      } else {
        card.style.display = "none";
      }

    });

    if (noResults) {
      noResults.style.display = visible === 0 ? "block" : "none";
    }

  });
}
