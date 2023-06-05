
document.querySelector(".button").addEventListener("click", doUp);

function doUp() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
}

window.addEventListener("scroll", () => {
    if (window.scrollY < 1100) {
        document.querySelector(".button").style.display = "none"
    } else {
        document.querySelector(".button").style.display = "block"
    }
})