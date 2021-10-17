const email = document.querySelector('#email');
const fname = document.querySelector('#firstname');
const lname = document.querySelector('#lastname');
const purpose=document.querySelector('#purpose');
const form = document.querySelector('#contact');
const checkFname = () => {
    let valid = false;
    const fnm = fname.value.trim();
    if (!isRequired(fnm)) {
        showError(fname, 'First name cannot be blank.');
    } else {
        showSuccess(fname);
        valid = true;
    }
    return valid;
};
const checkLname = () => {
    let valid = false;
    const lnm = lname.value.trim();
    if (!isRequired(lnm)) {
        showError(lname, 'Last name cannot be blank.');
    } else {
        showSuccess(lname);
        valid = true;
    }
    return valid;
};
const checkPurpose = () => {
    let valid = false;
    const pur = purpose.value.trim();
    if (!isRequired(pur)) {
        showError(purpose, 'Purpose cannot be blank.');
    } else {
        showSuccess(purpose);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const mail = email.value.trim();
    if (!isRequired(mail)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(mail)) {
        showError(email, 'Email is not valid.')
    } else {
        showSuccess(email);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
        let isFirstnameValid=checkFname(),isLastnameValid=checkLname(),isEmailValid=checkEmail(), isPurposeValid=checkPurpose();
    let isFormValid = isFirstnameValid && isLastnameValid && isEmailValid && isPurposeValid;
    if (isFormValid) {
        console.log('showing alert');
alert('Successfully submitted');
    }
});
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};
form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'firstname':
            checkFname();
            break;
        case 'lastname':
            checkLname();
            break;
        case 'email':
            checkEmail();
            break;
        case 'purpose':
            checkPurpose();
            break;
    }
}));