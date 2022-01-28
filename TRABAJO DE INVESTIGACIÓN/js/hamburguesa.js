
const menu = document.querySelector(".mainMenu");

const openMenuBtn = document.querySelector(".openMenu");
const closeMenuBtn = document.querySelector(".closeMenu");

function toggleMenu() {

  menu.classList.toggle("menuOpened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll('.mainMenu a[href^="#"]')

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
       const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.mainMenu a[href="#${id}"]`);
        
        if(entry.isIntersecting){
            document.querySelector(".mainMenu a.seleccion").classList.remove("seleccion");
            menuLink.classList.add("seleccion");
           }
    })
    
},{rooMargin:"-30% 0px -70% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("menuOpened");
    })
    
    const hash = menuLink.getAttribute("href");
    const targe = document.querySelector(hash);
    
    if(targe){
        observer.observe(targe);
    }
    
})