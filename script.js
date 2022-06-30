const shareButton = document.querySelector('.social-share-container');
const tooltip = document.querySelector('.content');
const arrow = document.querySelector('.arrow');

shareButton.addEventListener('mouseover', () => {
    tooltip.classList.add('active');
    arrow.classList.add('active');
});

window.addEventListener('click', () => {
    tooltip.classList.remove('active');
    arrow.classList.remove('active');
});