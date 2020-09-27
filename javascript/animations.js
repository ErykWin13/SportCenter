// STICKY HEADER FUNCTION 

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})


// NAVIGATION FUNCTIONS 

const buttonClose = document.querySelector('.wrapper nav.small-devices-nav span');
const button = document.querySelector('.wrapper header .hamburger span');
const nav = document.querySelector('.wrapper nav.small-devices-nav');
const links = document.querySelectorAll('.wrapper nav.small-devices-nav a');


button.addEventListener('click', function () {
    nav.classList.add('active');
})

buttonClose.addEventListener('click', function () {
    nav.classList.remove('active');
})

links.forEach((link) => {
    link.addEventListener('click', function () {
        nav.classList.remove('active')
    })
})


// MAIL ICON FUNCTION 

const mailIcon = document.querySelector('.mail span')


mailIcon.addEventListener('click', function () {
    document.querySelector('.mail').classList.toggle('active')
})

const mailFunction = setInterval(function () {
    mailIcon.classList.toggle('active')
}, 2000)



window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})