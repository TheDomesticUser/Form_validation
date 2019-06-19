// Add the event listeners
document.getElementById('name').addEventListener('blur', verifyName);
document.getElementById('zip').addEventListener('blur', verifyZip);
document.getElementById('email').addEventListener('blur', verifyEmail);
document.getElementById('phone').addEventListener('blur', verifyPhone);

function verifyName(e) {
    // Get the name value
    const name = e.target.value;

    const re = /^[a-z]+ [a-z]+( [a-z]+)?$/ig;
    if (!re.test(name)) {
        e.target.classList.add('is-invalid');
    } else {
        e.target.classList.remove('is-invalid');
    }
}

function verifyZip(e) {
    // Get the zip value
    const zip = e.target.value;

    const re = /^\d{5,16}$/g;
    if (!re.test(zip)) {
        e.target.classList.add('is-invalid');
    } else {
        e.target.classList.remove('is-invalid');
    }
}

function verifyEmail(e) {
    // Get the email value
    const email = e.target.value;

    const re = /^[a-z0-9]+(?:_[a-z0-9]+)?@[a-z]+\.[a-z]+$/ig;
    if (!re.test(email)) {
        e.target.classList.add('is-invalid');
    } else {
        e.target.classList.remove('is-invalid');
    }
}

function verifyPhone(e) {
    // Get the name value
    const phoneNumber = e.target.value;

    const re = /^(?:\d+-)?(?:\d{3}-){2}\d{4}$/ig;
    if (!re.test(phoneNumber)) {
        e.target.classList.add('is-invalid');
    } else {
        e.target.classList.remove('is-invalid');
    }
}