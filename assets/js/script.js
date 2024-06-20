const homeCntText = document.querySelector('.home-content-text');
const navbar = document.querySelector('.navigation-menu');
const header = document.querySelector('header');

// scroll efek
var lastScrollTop = 0;
document.addEventListener('scroll', function () {
    let value = window.scrollY
    if (value <= 500) {
        homeCntText.style.marginTop = value * 1 + 'px'
    } else {
        homeCntText.style.marginTop = value * 1 - 'px'
    }

    if (value > lastScrollTop) {
        navbar.style.background = '#231f20';
        navbar.style.transition = '0.5s ease';
    } else {
        navbar.style.background = 'none';
        navbar.style.transition = '0.5s ease';
    }
})


// content page
// document.addEventListener('DOMContentLoaded', () => {
//     const navLinks = document.querySelectorAll('nav a');
//     const mainContent = document.getElementById('main-content');

//     const loadContent = (url) => {
//         fetch(url)
//             .then(response => response.text())
//             .then(data => {
//                 mainContent.innerHTML = data;
//             })
//             .catch(error => console.error('Error loading content:', error));
//     };

//     navLinks.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             const targetUrl = link.getAttribute('data-target');
//             loadContent(targetUrl);
//         });
//     });

//     // Load default content
//     loadContent('home.html');
// });
