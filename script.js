document.getElementById('caseForm').addEventListener('submit', function(event) {
    const selectedCases = document.querySelectorAll('input[type="radio"]:checked').length;
    if (selectedCases !== 3) {
        event.preventDefault();
        alert('Please select exactly 3 cases before proceeding.');
    }
});