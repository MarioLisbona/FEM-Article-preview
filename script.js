const shareButton = document.querySelector('.social-share-container');
const content = document.querySelector('.tooltip-content');
const arrow = document.querySelector('.arrow');
const tooltip = document.querySelector('.tooltip');

//window eventlisters to call the contentPosition function after all teh DOM elements have been loaded
//and call it every time the window is resized
window.addEventListener('DOMContentLoaded', contenPosition);
window.addEventListener('resize', contenPosition);


//eventlistener on share button to add the active class to display the tooltip content and arrow
shareButton.addEventListener('mouseover', () => {
    content.classList.add('active');
    arrow.classList.add('active');
});

//eventlistener that removes the active class from the tooltip content and arrow on any click in the window
window.addEventListener('click', () => {
    content.classList.remove('active');
    arrow.classList.remove('active');
});

//function to set the position of the tooltip and arrow elements
function contenPosition () {
    const shareButton = tooltip.querySelector('.social-share-container')
    const ttContent = tooltip.querySelector('.tooltip-content')
    const arrow = tooltip.querySelector('.arrow');

    ttContent.style.left = shareButton.offsetLeft - ttContent.offsetWidth / 2 + 'px';
    ttContent.style.top = shareButton.offsetTop + -80 + 'px';
    arrow.style.left = shareButton.offsetLeft - ttContent.offsetLeft + shareButton.offsetWidth/2 + 'px';
};