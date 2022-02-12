grummer.feedbacks = {
  init()
  {
    this.initSlides()
    this.initSlider()
  },
  initSlides()
  {
    const template = $.trim( $('#feedbacks__slider-temp').html() )

    const html = grummer.feedbacksList.reduce((acc, item) => {
      return acc += template
      .replace(/{{img}}/ig, item.img)
      .replace(/{{text}}/ig, item.text)
    }, '')
    $('.feedbacks__slider').html(html)
  },
  initSlider()
  {
    $('.feedbacks__slider').slick({
      mobileFirst: true,
      infinite: false,
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="prev-arrow"><img src="img/arrow.svg"/></div>',
            nextArrow: '<div class="next-arrow"><img src="img/arrow.svg"/></div>'
          }
        },
      ]
    })
  }
}
