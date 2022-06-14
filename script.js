const header = document.querySelector("#header");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

links.forEach(item => {
    item.addEventListener("click", ()=>{
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior: "smooth"});
        console.log(item.getAttribute("data-link"));
    })
})

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 140);

    let current = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if(window.scrollY > sectionTop - 440){
            current = section.getAttribute("id");
        }
    })
    links.forEach(item => {
        item.classList.remove("chosen");
        if(item.getAttribute("data-link") === current){
            item.classList.add("chosen");
        }
    })
})