const shareButton = document.querySelector('.social-share-container');
const content = document.querySelector('.tooltip-content');
const arrow = document.querySelector('.arrow');
const tooltip = document.querySelector('.tooltip');

window.addEventListener('DOMContentLoaded', contenPosition);
window.addEventListener('resize', contenPosition);

shareButton.addEventListener('mouseover', () => {
    content.classList.add('active');
    arrow.classList.add('active');
});

window.addEventListener('click', () => {
    content.classList.remove('active');
    arrow.classList.remove('active');
});

function contenPosition () {
    const shareButton = tooltip.querySelector('.social-share-container')
    const ttContent = tooltip.querySelector('.tooltip-content')
    const arrow = tooltip.querySelector('.arrow');

    // ttContent.style.left = shareButton.offsetLeft + -80 + 'px';
    ttContent.style.left = shareButton.offsetLeft - ttContent.offsetWidth / 2 + 'px';
    ttContent.style.top = shareButton.offsetTop + -80 + 'px';
    arrow.style.left = shareButton.offsetLeft - ttContent.offsetLeft + shareButton.offsetWidth/2 + 'px';
};