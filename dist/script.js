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

document.addEventListener('DOMContentLoaded', function () {
    const inputMaxLengthOnLoad = document.getElementById('message').maxLength;
    document.getElementById('show').innerText = inputMaxLengthOnLoad;
    
    document.getElementById('message').addEventListener('input', function () {
    const jumlahKarakterDiketik = document.getElementById('message').value.length;
    const jumlahKarakterMaksimal = document.getElementById('message').maxLength;
    
    const showUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById('show').innerText = showUpdate.toString();
    });
});
