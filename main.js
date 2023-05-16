const dropdown = document.querySelectorAll(" .ausklappen");
dropdown.forEach((element) => {
  element.parentElement.addEventListener("click", () => {
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
