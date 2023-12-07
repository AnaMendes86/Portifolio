const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const menu = document.querySelector('.burguer');
const firstLink = mobileNavbar.querySelector('.first-link');
const icon = document.querySelector('.fa-solid');

menu.addEventListener('click', ()=>{
    mobileNavbar.classList.toggle('active');
    icon.classList.remove('fa-bars');

});

window.addEventListener('scroll', ()=>{
   if (window.pageYOffset > 0) {
    mobileNavbar.classList.remove('active');

  
   
   } 
   else{
    navbar.classList.remove('active');
   }
})

firstLink.addEventListener('click', () => {

    if (window.pageYOffset === 0) {
        mobileNavbar.classList.remove('active');    

    } else {
        
    }
});

