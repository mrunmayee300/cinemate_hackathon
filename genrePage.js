document.addEventListener('DOMContentLoaded', function() {
    const nextPageLink = document.getElementById('nextPageLink');
    const radioRows = document.querySelectorAll('.radio-row');
    const caseForm = document.getElementById('caseform');

    nextPageLink.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Check if all radio buttons are selected
        let allSelected = true;
        radioRows.forEach(row => {
            const checkedRadio = row.querySelector('input[type="radio"]:checked');
            if (!checkedRadio) {
                allSelected = false;
            }
        });

        if (allSelected) {
            // Get the values of selected radio buttons
            const formData = new FormData(caseForm);
            const caseValues = [];
            for (let [name, value] of formData) {
                caseValues.push(value);
            }

            // Create a query string from the selected values
            const queryString = caseValues.map((val, index) => `row${index + 1}=${val}`).join('&');

            // Redirect to the next page with the query string
            window.location.href = `randomMovie.html?${queryString}`;
        } else {
            alert('Please select one option from each row.');
        }
    });
});
