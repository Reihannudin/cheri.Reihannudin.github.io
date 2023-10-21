const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const menu = document.querySelector("#nav-menu-little");

// open nav menu
// menu ke close button
menuBtn.addEventListener('click' , ()=>{
    menu.style.display = 'block';
    closeBtn.style.display ='inline-block';
    menuBtn.style.display = 'none';
})

// close ke menu button
const closeNav = () =>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);