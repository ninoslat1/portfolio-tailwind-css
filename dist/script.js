//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}

//Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//Textarea Tracker
document.addEventListener('DOMContentLoaded', () => {
    const inputMaxLengthOnLoad = document.getElementById('message').maxLength;
    document.getElementById('show').innerText = inputMaxLengthOnLoad;
    
    document.getElementById('message').addEventListener('input', function () {
    const jumlahKarakterDiketik = document.getElementById('message').value.length;
    const jumlahKarakterMaksimal = document.getElementById('message').maxLength;
    
    const showUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById('show').innerText = showUpdate.toString();
    });
});

//Form Sender Google Spreadsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwRKxjXsapu_ApnVfFCIoYVuyrJ0yJnk2MLDAmEZUC4uso22RBXbbPsz6Ocx6G55h3D/exec'
const form = document.forms['submit-to-google-sheet']  
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            if(nameInput.value === ""|| nameInput.value == null){
                Swal.fire({
                    icon: 'warning',
                    text: 'Name is required',
                })
            }
            else if(emailInput.value === ""|| emailInput.value == null){
                Swal.fire({
                    icon: 'warning',
                    text: 'E-mail is required',
                })
            }
            else if(messageInput.value === ""|| messageInput.value == null){
                Swal.fire({
                    icon: 'warning',
                    text: 'Message is required',
                })
            }
            else {
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
            if(screen.width <= 1000){
                Swal.fire({
                    width: '16em',
                    position: 'center',
                    icon: 'success',
                    title: 'Thank you for sending your message ❤',
                    footer: 'Have a nice day',
                    showConfirmButton: false,
                    timer: 1250
                  })
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Thank you for sending your message ❤',
                    footer: 'Have a nice day',
                    showConfirmButton: false,
                    timer: 1250
                  })
            }
            form.reset();
            }
        });


