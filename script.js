document.getElementById('code-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const codeInput = document.getElementById('code-input').value.trim().toLowerCase();
    const errorMessage = document.getElementById('error-message');

    if (codeInput === 'earth') {
        window.location.href = 'success.html';
    } else {
        errorMessage.textContent = '명함을 잘 보세요';
    }
});
