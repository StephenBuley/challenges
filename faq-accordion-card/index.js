const faqs = Array.from(document.querySelectorAll(".faq"))

faqs.forEach((faq, i) => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("open")) {
            faq.classList.remove("open")
        } else {
            faq.classList.add("open")
        }
    })
})


