// Selection of elements
const menuBtn = document.getElementById('icon-btn');
const closeBtn = document.getElementById('close-btn');
const navBar = document.getElementById('header');

console.log(menuBtn);
console.log(navBar);

// Checking window size at initialization


/**
 * Show sidebar
 * -> click on button
 */

menuBtn.addEventListener('click', function() {
    navBar.classList.toggle('show-sidebar');
    menuBtn.classList.add('d-none');
});

closeBtn.addEventListener('click', function() {
    navBar.classList.toggle('show-sidebar');
    setTimeout(() => {
        menuBtn.classList.remove('d-none');  
    }, 100);
});