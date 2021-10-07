window.onload = function() {

const nav = document.getElementById('navbar');

window.addEventListener("scroll", () => {

    let scroll_y = this.scrollY;

    if(scroll_y == 0)
    {
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "background-color 0.5";
    }

    else
    {
        nav.style.backgroundColor = "#141414";
        nav.style.transition = "background-color 0.5"
    }

})

}