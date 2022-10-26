// GALLERY SLIDE

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// EMAIL JS

const validate = () => {
  let name = document.querySelector('#nama')
  let email = document.querySelector('#email')
  let message = document.querySelector('#pesan')
  let submit = document.querySelector('#submit')
  let form = document.querySelector('#form-email')

  submit.addEventListener('click', (e) => {
    e.preventDefault();

    if ( name.value == '' || email.value == '' || message.value == '' ) {
      InputEmpty();
    } else {
      sendMail(name.value, email.value, message.value);
      success();
    }

    form.reset()
  })
}

const sendMail = (name, email, message) => {
  emailjs.send('service_ujka9bx', 'template_9oyt4zo',
  {
    from_name : name,
    to_name : email,
    message : message
  })
}

const success = () => {
  swal({
    title : 'Good job!',
    text : 'Successfully sent message !',
    icon : 'success',
    button : 'OK!'
  })
}

const error = () => {
  swal({
    title: 'Oops..!',
    text: 'Something went wrong, message could not be sent!',
    icon: 'error',
    button: 'OK!'
  })
}

const InputEmpty = () => {
  swal({
    title: 'Oops..!',
    text: 'Input fields are required!',
    icon: 'error',
    button: 'OK!'
  })
}