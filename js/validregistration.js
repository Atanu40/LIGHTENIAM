const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

let users = [];

form.addEventListener('click', (e) => {
    //let messages = []
    if (email.value === '' || password.value === null || firstname.value === null
        || lastname.value === null) {
        window.alert("Information Missing");


    }

});





