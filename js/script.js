function initTab () {
    const animalList = document.querySelectorAll('.js-animal-list li')
    const animalContent = document.querySelectorAll('.js-animal-content section')

    if (animalList.length && animalContent.length) {
        animalContent[0].classList.add('active')
        
        function showText (index) {
            animalContent.forEach((animal) => {
                animal.classList.remove('active')
            })
            animalContent[index].classList.add('active')
        }
        
        animalList.forEach((animal, index) => {
            animal.addEventListener('click', () => {
                showText(index)
            })
        })
    }
}

initTab()

// ========================================================

function accordionList () {
    
    const faqListDt = document.querySelectorAll('.js-faq-list dt')

    faqListDt[0].classList.add('active')
    faqListDt[0].nextElementSibling.classList.add('active')

    if (faqListDt.length) {
        faqListDt.forEach((item) => {
            item.addEventListener('click', () => {
                item.classList.toggle('active')
                item.nextElementSibling.classList.toggle('active')
            })
        })

    }
    
}

accordionList()


// ================================================================

const sections = document.querySelectorAll('.js-scroll')
const activeScreenHeight = window.innerHeight * 0.7

sections[0].classList.add('active')

function animeScroll () {
    sections.forEach((section) => {
        if (section.getBoundingClientRect().top < activeScreenHeight) {
            section.classList.add('active')
        } else {
            section.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', animeScroll)

//  ================================================================

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"')
    
    function smoothScrolling (event) {
        event.preventDefault()
        const href = this.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', smoothScrolling)
    })