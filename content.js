document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    const span = document.createElement("span");
    span.style.backgroundColor = "yellow";
    span.textContent = selectedText;

    const range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    range.insertNode(span);
  }
});
