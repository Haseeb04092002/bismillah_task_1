// ------- Tooltip javascript -------//
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// ------- Loading Spinner javascript -------//
const spinner = document.getElementById('Spinner');
window.addEventListener('load', function(){
    spinner.style.opacity=0;
    setTimeout(()=>{
      spinner.style.display='none';
    },2000);
})



// Get the button
let mybutton = document.getElementById("TopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// ------- Form validation javascript -------//

const form = document.getElementById('MyForm');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const Errors = document.getElementById('Errors');
const Success = document.getElementById('Success');

window.onload = function(e){ 
  //console.log("window.onload"); 
  Errors.style.display='none';
  Success.style.display='none';
}

form.addEventListener('submit', (e) => {
  // Clear previous errors
  Errors.textContent = '';
  
  let messages = [];
  
  // Check if FirstName is empty
  if (FirstName.value === '' || FirstName.value === null) {
    messages.push('FirstName cannot be empty');
  }
  
  // Check if LastName is empty
  if (LastName.value === '' || LastName.value === null) {
    messages.push('LastName cannot be empty');
  }
  
  // Check if Email is empty
  if (Email.value === '' || Email.value === null) {
    messages.push('Email cannot be empty');
  }

  // Check if Password is empty
  if (Password.value === '' || Password.value === null) {
    messages.push('Password cannot be empty');
  }

  // If there are any error messages, show them and prevent form submission
  if (messages.length > 0) {
    Errors.style.display='block';
    Errors.innerHTML = messages.join('<br>');
    e.preventDefault(); // Prevent the form from submitting
  }
  else{
    Success.style.display='block';
    Success.innerHTML = 'Good! Form has been submitted successfully';
    e.preventDefault(); // Prevent the form from submitting
  }
});
