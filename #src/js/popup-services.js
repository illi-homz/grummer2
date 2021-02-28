grummer.popupServices = {
  init()
  {
    this.setCategories(grummer.categories)

    this.sliderList = $('.popup-services__slider-services')
    this.sliderListAdd = $('.popup-services__slider-add-services')

    this.sliderTemplate = $.trim( $('#popup-services__slider-temp').html() )
    this.sliderTemplateAdd = $.trim( $('#popup-services__slider-add-temp').html() )

    this.setSlides(
      grummer.servicesList.filter(el => el.category !== 'add-services'),
      this.sliderList,
      this.sliderTemplate
    )

    this.setSlides(
      grummer.servicesList.filter(el => el.category === 'add-services'),
      this.sliderListAdd,
      this.sliderTemplateAdd
    )

    this.initSlider('.popup-services__slider-services')
    this.initSlider('.popup-services__slider-add-services')
  },
  setCategories(arr)
  {
    const list = $('.popup-services .g-select__items')
    const template = $.trim( $('.popup-services .popup-services__filter-temp').html() )

    list.append(arr.reduce((acc, item) => {
      return acc += template
        .replace( /{{title}}/ig, item.title )
        .replace( /{{value}}/ig, item.value )
        .replace( /{{icon}}/ig, item.icon )
    }, ''))
  },
  filter(arr)
  {
    this.setSlides(
      arr,
      this.sliderList,
      this.sliderTemplate
    )
    this.sliderList.removeClass('slick-initialized slick-slider')
    this.initSlider('.popup-services__slider-services')
  },
  filterServices(val, type)
  {
    return grummer.servicesList.filter(service => {
      return service[type] === val
    })
  },
  filterServicesByCategory(val){
    !val
      ? this.filter(
          grummer.servicesList.filter(el => el.category !== 'add-services')
        )
      : this.filter(this.filterServices(val, 'category'))
  },
  setSlides(slides, list, template)
  {
    list.html('')
    let frag = ''
    slides.forEach(slide => {
      frag += template
        .replace( /{{title}}/ig, slide.title )
        .replace( /{{text}}/ig, slide.text )
        .replace( /{{price}}/ig, slide.price )
        .replace( /{{time}}/ig, slide.time )
        .replace( /{{img}}/ig, slide.img )
    });
    list.append(frag)
  },
  initSlider(selector)
  {
    $(selector).slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<div class="prev-arrow"><img src="img/arrow.svg"/></div>',
      nextArrow: '<div class="next-arrow"><img src="img/arrow.svg"/></div>'
    });
  },
  addService(title)
  {
    console.log(title);
  }
}
