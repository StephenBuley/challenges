const faqs = Array.from(document.querySelectorAll(".faq"))
const questions = Array.from(document.querySelectorAll(".question"))
const downArrows = Array.from(document.querySelectorAll(".down-arrow"))
const answers = Array.from(document.querySelectorAll(".answer"))

faqs.forEach((faq, i) => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("open")) {
            faq.classList.remove("open")
            questions[i].classList.remove("open")
            downArrows[i].classList.remove("open")
            answers[i].classList.remove("open")
        } else {
            faq.classList.add("open")
            questions[i].classList.add("open")
            downArrows[i].classList.add("open")
            answers[i].classList.add("open")
        }
    })
})


