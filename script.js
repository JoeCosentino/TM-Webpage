const toggleButton = document.getElementById('toggle-btn');
const navBarLinks = document.getElementById('navbar-links');
const header = document.getElementById('header');

toggleButton.addEventListener('click', event => {
    navBarLinks.classList.toggle('active');
    header.classList.toggle('active');
    event.preventDefault();
});

// toggleButton.addEventListener('click')