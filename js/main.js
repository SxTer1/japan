const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const dropMenu = document.querySelector(".header_nav");
const menuCloseButton = document.querySelector(".header_nav-close")
const hiddenElements = document.querySelectorAll('.hidden')


window.onscroll = () => {
    if(window.scrollY > 50){
        header.classList.add('header_active');
    } else{
        header.classList.remove('header_active');
    }
}
const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
  })
  hiddenElements.forEach((el) => observer.observe(el));

burger.addEventListener("click", () => {
    dropMenu.classList.add('header_nav-active');
})

menuCloseButton.addEventListener("click", () => {
    dropMenu.classList.remove('header_nav-active');
})
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    dropMenu.classList.remove('header_nav-active');
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 200;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
