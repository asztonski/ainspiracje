const groupBtn = document.querySelector('.group-btn')
const individualBtn = document.querySelector('.individual-btn')

groupBtn.addEventListener('click', () => {
    const groupBox = document.querySelector('div.group')
    groupBox.classList.add('active')
})

individualBtn.addEventListener('click', () => {
    const individualBox = document.querySelector('div.individual')
    individualBox.classList.add('active')
})


function checkScroll(e) {

    const windowHeight = window.innerHeight    
  
      const answersWrapper = document.querySelector('.answers .wrapper')
      const wrapperTop = Math.round(answersWrapper.getBoundingClientRect().top)
      const wrapperHeight = Math.round(answersWrapper.getBoundingClientRect().height)
  
      if (wrapperTop + (wrapperHeight / 2) < windowHeight) {
          answersWrapper.classList.add('visible')
      }
  
      const footerSvg = document.querySelector('.footer-svg')
      const footerSvgTop = Math.round(footerSvg.getBoundingClientRect().top)
      const footerSvgHeight = Math.round(footerSvg.getBoundingClientRect().height)
  
      if (footerSvgTop + (footerSvgHeight / 2) < windowHeight) {
        setTimeout(() => {
          footerSvg.classList.add('visible')
        }, 500);
      }
  
  }
  
    checkScroll();
    
    // Run function when scroll
    window.addEventListener('scroll', function (e) {
      checkScroll();
    })