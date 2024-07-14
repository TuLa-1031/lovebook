document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const messageBoard = document.getElementById('message-board');

    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${name}:</strong> ${message}`;
    messageDiv.classList.add('message');
    messageBoard.appendChild(messageDiv);

    // Clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});
