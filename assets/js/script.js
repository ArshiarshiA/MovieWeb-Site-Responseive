// NAV BAR //
let navBar = document.querySelector('header');
let mainHeader = document.querySelector('.main-header-container');

window.addEventListener('scroll' , ()=>{
    this.scrollY >= 10 ? navBar.classList.add('active') || mainHeader.classList.add('active') : navBar.classList.remove('active') || mainHeader.classList.remove('active');
    // ****
    // **** 
    // if(this.scrollY >= 10){
    //     navBar.classList.add('active');
    //     mainHeader.classList.add('active');
    // }else{
    //     navBar.classList.remove('active'); 
    //     mainHeader.classList.remove('active');
    // }
})

// SCROLL TO TOP //
let GtButton = document.querySelector('.go-top');
window.addEventListener('scroll' , ()=> this.scrollY >= 700 ? GtButton.classList.add('Gt-active') : GtButton.classList.remove('Gt-active'))