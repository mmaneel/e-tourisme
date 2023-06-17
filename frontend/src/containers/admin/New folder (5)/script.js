// Get the necessary elements
const openPopupButton = document.getElementById('openPopupButton');
const popup = document.getElementById('popup');
const exitButton = document.querySelector('.exit-button');
const cancelButton = document.querySelector('.cancel');

// Function to open the pop-up
function openPopup() {
  popup.style.display = 'block';
}

// Function to close the pop-up
function closePopup() {
  popup.style.display = 'none';
}

// Add event listeners to open and close the pop-up
openPopupButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
cancelButton.addEventListener('click', closePopup);
