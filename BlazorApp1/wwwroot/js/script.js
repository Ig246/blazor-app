window.initNavLinks = function () {

    var slides = document.querySelectorAll('.slide')
    var dots = document.querySelectorAll('.dot')

    var manualNav = function(manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })

        dots.forEach((dot) => {
            dot.classList.remove('active')
        })

        slides[manual].classList.add('active')
        dots[manual].classList.add('active')
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            manualNav(i)
            currentSlide = i
        })
    })

    var repeat = function(activeClass) {
        let active = document.getElementsByClassName('active')
        let i = 1

        var repeater = () => {
            setTimeout(function() {
                slides.forEach((slide) => slide.classList.remove('active'))
                dots.forEach((dot) => dot.classList.remove('active'))

                slides[i].classList.add('active')
                dots[i].classList.add('active')
                i++

                if(slides.length == i) {
                    i = 0
                }
                if (i >= slides.length) {
                    return
                }
                repeater()
            }, 5000)
        }
        repeater()
    }
    repeat()
    // SLIDER
    // let slides = document.querySelectorAll('.slide')
    // let prevButton = document.querySelector('.prev')
    // let nextButton = document.querySelector('.next')
    // let slideIndex = 0
    // let slideLength = slides.length


    // nextButton.addEventListener('click', () => {
        // slideIndex++
        // slides.forEach(item => {
        //     item.classList.remove('active')
        // })

        // if (slideIndex == slideLength) {
        //     slideIndex = 0
        // }

        // slides.forEach((item, index) => {
        //     if (index == slideIndex) {
        //         item.classList.add('active')
        //     }
        // })
    // })

    // prevButton.addEventListener('click', () => {
    //     slideIndex--
    //     slides.forEach(item => {
    //         item.classList.remove('active')
    //     })

    //     if(slideIndex < 0) {
    //         slideIndex = slideLength - 1
    //     }

    //     slides.forEach((item, index) => {
    //         if (index == slideIndex) {
    //             item.classList.add('active')
    //         }
    //     })
    // })

    // NAVBAR DROPDOWN

    const dropBtns = document.querySelectorAll('.d-clickable')
    const dropMenu = document.querySelector('.d-menu')
    const dropIcon = document.querySelector('.dropdown-icon')

    dropBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dropMenu.classList.toggle('active')

            dropIcon.classList.toggle('active')
        })
    })

    // MODAL

    const modals = document.querySelectorAll('.modalw')
    const links = document.querySelectorAll('.ww-link')
    const closes = document.querySelectorAll('.close')
    const overlay = document.querySelector('.overlay')

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            var t = e.target.dataset.modal

            modals.forEach(modal => {
                if (modal.classList.contains(t)) {
                    modal.classList.add('active')
                    overlay.classList.add('active')
                    document.body.style.overflow = 'hidden'
                }
            })
        })
    })
    closes.forEach(close => {
        close.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.classList.remove('active')
                overlay.classList.remove('active')
                document.body.classList.remove('no-scroll')
                document.body.style.overflow = ''
            })
        })
    })

    overlay.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.classList.remove('active')
            overlay.classList.remove('active')
            document.body.classList.remove('no-scroll')
            document.body.style.overflow = ''
        })
    })

    //BURGER MENU

    const burgerBtn = document.querySelector('.burger-logo')
    const burgerMenu = document.querySelector('.burger-menu')

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
        burgerBtn.classList.toggle('active')
    })

    // BURGER DROPDOWNS

    const bLinks = document.querySelectorAll('.burger-ww-link')
    const bdMenus = document.querySelectorAll('.burger-nav-dropdown')

    bLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const t = e.target.dataset.drop

            bdMenus.forEach(menu => {
                const isTarget = menu.classList.contains(t);

                if (isTarget) {
                    menu.classList.toggle('active');
                } else {
                    menu.classList.remove('active');
                }
            })
        })
    })
};