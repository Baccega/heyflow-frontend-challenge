const nativeCheckbox = document.getElementById("native-checkbox");
const customCheckbox = document.getElementById("custom-checkbox-entangled");

nativeCheckbox.addEventListener("change", function () {
  customCheckbox.checked = nativeCheckbox.checked;
});

customCheckbox.addEventListener("change", function () {
  nativeCheckbox.checked = customCheckbox.checked;
});

nativeCheckbox.addEventListener("focusin", function () {
  // Fallback for Firefox
  customCheckbox.style.outlineColor = "blue";
  customCheckbox.style.outlineColor = "-webkit-focus-ring-color";
  customCheckbox.style.outlineStyle = "solid";
  customCheckbox.style.outlineWidth = "2px";
  customCheckbox.style.outlineOffset = "2px";
});
nativeCheckbox.addEventListener("focusout", function () {
  customCheckbox.style.outline = "none";
});
