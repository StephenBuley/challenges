const images = [...document.querySelectorAll('img')]
const portfolioImage = document.querySelector('.portfolio')
const links = [...document.querySelectorAll('li')]

links.forEach((link) => {
  link.addEventListener('mouseenter', (e) =>
    displayImage(e.target.dataset.name),
  )
  link.addEventListener('mouseleave', () => {
    displayImage('portfolio')
  })
  link.addEventListener('focusin', (e) => {
    displayImage(e.target.dataset.name)
  })
  link.addEventListener('focusout', () => {
    displayImage('portfolio')
  })
})

function displayImage(name) {
  resetImages()
  images.forEach((image) => {
    if (image.classList.contains(name)) {
      image.classList.add('active')
    }
  })
}

function resetImages() {
  images.forEach((image) => {
    image.classList.remove('active')
  })
}
