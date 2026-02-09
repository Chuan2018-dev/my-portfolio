// Home icon scrolls to top
function goHome() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Popup confirmation
function showPopup() {
  alert("Thank you! Your recommendation has been added.");
}

// Add new recommendation
document.getElementById("recommendation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("recommendation-input");
  const text = input.value.trim();

  if (text !== "") {
    const newRec = document.createElement("div");
    newRec.className = "recommendation";
    newRec.textContent = text;

    document.getElementById("recommendation-list").appendChild(newRec);
    input.value = "";

    showPopup();
  }
});
