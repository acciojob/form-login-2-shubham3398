//your JS code here. If required.
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission, we just want to show the alert

    const firstName = document.querySelector('input[name="First Name"]').value;
    const lastName = document.querySelector('input[name="Last Name"]').value;
    const phoneNumber = document.querySelector('input[name="Phone Number"]').value;
    const emailID = document.querySelector('input[name="Email ID"]').value;

    const result = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Phone Number: ${phoneNumber}
        Email ID: ${emailID}
    `;

    alert(result);
});
