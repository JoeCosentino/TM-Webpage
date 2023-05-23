const toggleButton = document.getElementById('toggle-btn');
const navBarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
});