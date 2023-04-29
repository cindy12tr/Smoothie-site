/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('navMenu')
const navToggle=document.getElementById('navToggle')
const navClose=document.getElementById('navClose')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav-link')
const linkAction=()=>{
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY>=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scrollUp')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const themeButton=document.getElementById('themeButton')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

