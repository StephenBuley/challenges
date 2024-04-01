const toggle = document.querySelector("input")
const slider = document.querySelector(".slider")
const body = document.querySelector("body")


function darkModeToggle() {
    if (toggle.checked) {
        makeLight()
    } else {
        makeDark()
    }
}

function makeLight() {
    body.classList.remove("dark")
}

function makeDark() {
    body.classList.add("dark")
}

toggle.addEventListener("click", darkModeToggle)
slider.addEventListener("keypress", () => {
    toggle.checked = !toggle.checked
    darkModeToggle()
})