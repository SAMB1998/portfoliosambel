/*============toggle style switcher=====*/
const styleSwitcherToggle =document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click" , () => {
    document.querySelector(".style-switcher").classList.toggle("open");

})
//hide style - switcher on scroll
window.addEventListener("scroll" ,() => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
 {
    document.querySelector(".style-switcher").classList.remove("open");
 }        
})
/*=======================theme colors============ */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setAcctiveStyle(color)
 {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}
/*=======================theme light and dark mode============ */


const dayNight = document.querySelector(".day-night");

function toggleThemeIcon() {
    const icon = dayNight.querySelector("i");
    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

dayNight.addEventListener("click", () => {
    document.body.classList.toggle("dark"); // Toggle the 'dark' class on the body
    toggleThemeIcon(); // Update the icon based on the new theme state
});

window.addEventListener("load", toggleThemeIcon); // Set the correct icon when the page loads


  