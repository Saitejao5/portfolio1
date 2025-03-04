function switchTab(tabId, element) {
  // Hide all content sections
  document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove("active");
  });

  // Remove active state from all buttons
  document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove("active");
  });

  // Show the selected content & highlight the clicked button
  document.getElementById(tabId).classList.add("active");
  element.classList.add("active");
}

function genai() {
window.open("genai.jpg");
// Tab to edit
}

function tel(){
window.open("tel.jpg");
}

function digi() {
window.open("digi.jpg")
// Tab to edit
}



