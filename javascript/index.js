document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");

  // Cargar estado guardado de cada checkbox
  checkboxes.forEach(checkbox => {
      const id = checkbox.getAttribute("data-id");
      const isChecked = localStorage.getItem(id) === "true";
      checkbox.checked = isChecked;

      // Guardar cambios en localStorage cuando se marque/desmarque
      checkbox.addEventListener("change", function () {
          localStorage.setItem(id, this.checked);
      });
  });
});