$(function () {
  $(".slider").slick({
    // $('.slider') так обращаемся к слайдеру
    // slick -метод
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="../images/next.svg" alt="next arrow"></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="../images/prev.svg" alt="prev arrow"></button>',
    fade: true,
    // fade для мигающего переключения между слайдерами
    responsive: [
      {
        breakpoint: 441,
        settings: {
          arrows: false
        //   скрываем стрелки при ширине экране 440px
        }
      }
    ]
  });
});
