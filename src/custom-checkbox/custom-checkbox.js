const nativeCheckbox = document.getElementById("native-checkbox");
const customCheckbox = document.getElementById("custom-checkbox-entangled");

nativeCheckbox.addEventListener("change", function () {
  customCheckbox.checked = nativeCheckbox.checked;
});

customCheckbox.addEventListener("change", function () {
  nativeCheckbox.checked = customCheckbox.checked;
});

nativeCheckbox.addEventListener("focusin", function () {
  customCheckbox.style.outline = "2px solid -webkit-focus-ring-color";
  customCheckbox.style.outlineOffset = "2px";
});
nativeCheckbox.addEventListener("focusout", function () {
  customCheckbox.style.outline = "none";
});
