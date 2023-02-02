
const form = document.getElementById('form');

const email = document.getElementById('email');
const password = document.getElementById('password');



  

form.addEventListener('click', (e) => {
  //let messages = []
  if (email.value === '' || password.value === null) {
    window.alert("Information Missing");

   
  }
  
})
