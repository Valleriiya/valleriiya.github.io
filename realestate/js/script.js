const swiper = new Swiper('.slider-main-block', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const tabItems = document.querySelectorAll(".item-tabs");
  const tabButtons = document.querySelectorAll(".tabs-deals__button");
  document.addEventListener("click", function(e){
    const targetElement = e.target;
    let indexTab = 0;
    if(targetElement.closest(".tabs-deals__button")){
      tabButtons.forEach((item, index) => {
        if(item==targetElement){
          indexTab=index;
        }
        if(item.classList.contains("active")){
          item.classList.remove("active");
        }
      });
      
      tabItems.forEach(item=>{
        if(item.classList.contains("active")){
          item.classList.remove("active");
        }
      });
      tabItems[indexTab].classList.add("active");
      this.activeElement.classList.add("active");
    }
  })