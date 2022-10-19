const menuToggle = document.querySelector('.main')
const menu = document.querySelector('.menu');
const sectionLinks = document.querySelector('.section-links');
const nav = document.querySelector('.nav')
const lists = [...document.querySelectorAll('.list')];

window.addEventListener('resize', () => {
    removeActive(nav, menuToggle, menu)
    if(window.innerWidth <= 600){
        sectionLinks.style.display = 'none'
    }else{
        sectionLinks.style.display = 'flex';
        sectionLinks.classList.remove('hide');
    }
})

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        addActive(...lists, nav, menuToggle)
        sectionLinks.classList.add('hide')
        setTimeout(() =>{
            sectionLinks.style.display = 'none'
        }, 150)
    }else{
        removeActive(...lists, nav, menuToggle)
        if(window.innerWidth > 600){
            sectionLinks.style.display = 'flex' 
        }
        sectionLinks.classList.remove('hide')
    }
})

function removeActive(...args){
    args.forEach(arg => {
        arg.classList.remove('active');
    })
}

function addActive(...args){
    args.forEach(arg => {
        arg.classList.add('active');
    })
}