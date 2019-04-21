const $name = document.getElementById('inputName');
const $phone = document.getElementById('inputPhone');
const $email = document.getElementById('inputEmail');
const $message = document.getElementById('inputMessage');
const $sentBtn = document.getElementById('sentBtn');

const errorName = { 
    place: document.getElementById('errorName'), 
    text: 'Имя содержит только буквы' 
};

const errorPhone = {
    place: document.getElementById('errorPhone'), 
    text: 'Телефон подчиняется шаблону 1234567890'
};

const errorEmail = {
    place: document.getElementById('errorEmail'), 
    text: 'E-mail выглядит как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
};

const errorMessage ={
    place: document.getElementById('errorMessage'), 
    text: 'Напишите сообщение'
};

function isValidName(text) {
    let checkName = /^[a-zа-яё \s \-]+$/i;
    return checkName.test(text);
}

function isValidPhone(phoneNumber) {
    let phoneNumberExp = /(\d{1})(\d{3})(\d{3})(\d{4})/;
    return phoneNumberExp.test(phoneNumber);
}

function isValidateFormattedPhone(phoneNumber) {
    let phoneNumberExp = /+(\d{1})((\d{3}))(\d{3})-(\d{4})/;
    return phoneNumberExp.test(phoneNumber);
}

function formatPhone(phoneNumber) {
    return phoneNumber.replace(/[^\d]+/g, '')
                      .replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1($2)$3-$4');
}

function isValidEmail(email) {
    let checkEmail = /^[\w._-]+@\w+\.[a-z]{2,4}$/i;
    return checkEmail.test(email);
}

function isValidMessage(message) {
    return message.length != 0;
}

$sentBtn.addEventListener('click', event => {
    event.preventDefault();
    
    const isNameValid = checkValidation(isValidName, $name, errorName);
    const isEmailValid = checkValidation(isValidEmail, $email, errorEmail);
    const isPhoneValid = checkValidation(isValidPhone, $phone, errorPhone);
    const isMessageValid = checkValidation(isValidMessage, $message, errorMessage);

    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
        sendData();
    }
})

function sendData() {
    console.log('Send data to the server...');
    console.log(`\tName: ${$name.value}`)
    console.log(`\tEmail: ${$email.value}`)
    console.log(`\tPhone: ${formatPhone($phone.value)}`)
    console.log(`\tMessage: ${$message.value}`)
    cleanForm();
}

function cleanForm() {
    $name.value = '';
    $phone.value = '';
    $email.value = '';
    $message.value = '';
}

// this function working only with inputs
function checkValidation(checkerFunction, input, errorInfo) {
    if(!checkerFunction(input.value)) {
        errorInfo.place.textContent = errorInfo.text;
        input.className = 'error';
        return false;
    } else {
        input.className ='correct';
        errorInfo.place.textContent = '';
        return true;
    }
}
