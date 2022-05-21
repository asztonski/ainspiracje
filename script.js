// Global nav //

window.addEventListener('scroll', () => {
    const globalNav = document.querySelector('.global-nav.desktop')
    const mobileNav = document.querySelector('nav.mobile')
    const mobileNavLogo = document.getElementById('logo')
    if (window.innerWidth > 1025) {
        if (window.scrollY > 40) {
          globalNav.classList.add('on')
      } else {
          globalNav.classList.remove('on')
      }
    }
    
    if (window.innerWidth < 1025) {
        if (window.scrollY > 40) {
          mobileNav.classList.add('on')
          mobileNavLogo.src = 'assets/images/color-logo.png'
      } else {
          mobileNav.classList.remove('on')
          mobileNavLogo.src = 'assets/images/white-logo.png'
      }
    }
})

// Sound Btn

const soundBtns = document.querySelectorAll('button.sound')

soundBtns.forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('sound').play();
  })
});

// Gallery

let sortBtn = document.querySelector('.categories .button-box').children;
let sortItem = document.querySelector('.gallery').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}


// Svg animation

// const svg = document.querySelector('.footer-path');
// const lengthSvg = svg.getTotalLength();
// // const svgTopMobile = document.getElementById('bgTopMobile');
// // const lengthSvgTopMobile = svgTop.getTotalLength();


// window.addEventListener('scroll', function() {
//     const scrollpercent =
//       (document.body.scrollTop + document.documentElement.scrollTop) /
//       (document.documentElement.scrollHeight -
//         document.documentElement.clientHeight);

//     const draw = lengthSvg * scrollpercent;
//     if (window.innerWidth > 1300) {
//       svg.style.strokeDasharray = (lengthSvg - 10000) + (draw);
//     } else svg.style.strokeDasharray = (lengthSvg - 10000) + (draw);
//     // const drawMobile = lengthSvgTopMobile * scrollpercent * 6.25;
//     // svgTopMobile.style.strokeDashoffset = (lengthSvgTopMobile + 530) - (drawMobile * 1.125);
//   });


// function checkScroll(e) {

//       const answersWrapper = document.querySelector('.answers .wrapper')
//       const top = Math.round(answersWrapper.getBoundingClientRect().top)
//       const height = Math.round(answersWrapper.getBoundingClientRect().height)
//       const windowHeight = window.innerHeight
  
//       if (top + (height / 2) < windowHeight) {
//           setTimeout(() => {
//             answersWrapper.classList.add('visible')
//           }, 300);
//   }
// }

function checkScroll(e) {

  const windowHeight = window.innerHeight    


    const offerWrapper = document.querySelector('.offer .right')
    const offerWrapperTop = Math.round(offerWrapper.getBoundingClientRect().top)
    const offerWrapperHeight = Math.round(offerWrapper.getBoundingClientRect().height)
  
    if (window.innerWidth > 1025) {
      if (offerWrapperTop + (offerWrapperHeight / 2) < windowHeight) {
        setTimeout(() => {
          offerWrapper.classList.add('visible')
        }, 300);
      }
    }

    const secondSign = document.querySelector('.about-sign')
    const signTop = Math.round(secondSign.getBoundingClientRect().top)
    const signHeight = Math.round(secondSign.getBoundingClientRect().height)

    if (signTop + (signHeight / 2) < windowHeight) {
      setTimeout(() => {
        secondSign.classList.add('visible')
      }, 300);
    }

    const secondSignMobile = document.querySelector('.about-sign.mobile')
    const signMobileTop = Math.round(secondSignMobile.getBoundingClientRect().top)
    const signMobileHeight = Math.round(secondSignMobile.getBoundingClientRect().height)

    if (signMobileTop + (signMobileHeight / 2) < windowHeight) {
      setTimeout(() => {
        secondSignMobile.classList.add('visible')
      }, 300);
    }


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