grummer.ourworks = {
  init()
  {
    this.nav = $('.ourworks__nav')
    this.title = $('.ourworks__title')
    this.text = $('.ourworks__text')

    this.initSlides()
    this.initSlider()
    this.changeSlide(0)
    this.initNavs()
  },
  initSlides()
  {
    const template = $.trim( $('#ourworks__slider-temp').html() )

    const html = grummer.ourWorks.reduce((acc, item) => {
      return acc += template.replace(/{{img}}/ig, item.img)
    }, '')
    $('.ourworks__slider').html(html)
  },
  initSlider()
  {
    $('.ourworks__slider').slick({
      mobileFirst: true,
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // prevArrow: '<div class="prev-arrow slider-arrow"><img src="img/arrow.svg"/></div>',
      // nextArrow: '<div class="next-arrow slider-arrow"><img src="img/arrow.svg"/></div>',
      prevArrow: `<div class="prev-arrow slider-arrow">${arrow}</div>`,
      nextArrow: `<div class="next-arrow slider-arrow">${arrow}</div>`,
    }).on('afterChange', (slick, currentSlide) => {
      this.changeSlide(currentSlide.currentSlide)
    })
  },
  initNavs()
  {
    $('.ourworks .prev-arrow').appendTo(this.nav)
    $('.ourworks .slick-dots').appendTo(this.nav)
    $('.ourworks .next-arrow').appendTo(this.nav)
  },
  changeSlide(i)
  {
    this.title.text(grummer.ourWorks[i].title)
    this.text.text(grummer.ourWorks[i].text)
  }
}
