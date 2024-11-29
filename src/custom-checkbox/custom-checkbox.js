const nativeCheckbox = document.getElementById("native-checkbox");
const customCheckbox = document.getElementById("custom-checkbox-entangled");

nativeCheckbox.addEventListener("change", function () {
  customCheckbox.checked = nativeCheckbox.checked;
});

customCheckbox.addEventListener("change", function () {
  nativeCheckbox.checked = customCheckbox.checked;
});
