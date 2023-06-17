// Get the elements
const openButton = document.getElementById('openPopupButton');
const popup = document.getElementById('popup');
const exitButton = document.querySelector('.exit-button');
const cancelButton = document.querySelector('.cancel');
const saveButton = document.querySelector('.save');

// Open the popup
openButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Close the popup when clicking the exit button
exitButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close the popup when clicking the cancel button
cancelButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Save the content when clicking the save button
saveButton.addEventListener('click', () => {
  // Get the input values
  const photoText = document.getElementById('photo-text').value;
  const actText = document.getElementById('Act-text').value;
  const descpText = document.getElementById('descp-text').value;

  // Perform the save operation here using the input values
  // For demonstration purposes, let's log the values to the console
  console.log('Photo:', photoText);
  console.log('Title:', actText);
  console.log('Description:', descpText);

  // Close the popup
  popup.style.display = 'none';
});
