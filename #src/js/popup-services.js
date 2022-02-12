grummer.popupServices = {
  init()
  {
    grummer.animal
      ? this.servicesList = grummer.servicesList.filter(el => {
        return el.animal === grummer.animal || el.animal == ''
      })
      : this.servicesList = grummer.servicesList

    this.setCategories(grummer.categories)

    this.sliderList = $(
      '.popup-services__slider-services'
    ).removeClass('slick-initialized slick-slider').html('')
    this.sliderListAdd = $(
      '.popup-services__slider-add-services'
    ).removeClass('slick-initialized slick-slider').html('')

    // templates
    this.sliderTemplate = $.trim( $('#popup-services__slider-temp').html() )
    this.sliderTemplateAdd = $.trim( $('#popup-services__slider-add-temp').html() )
    this.mobileListTemplate = $.trim( $('#popup-services__mobile-list-temp').html() )

    this.setSlides(
      this.servicesList.filter(el => el.category !== 'add-services'),
      this.sliderList,
      this.sliderTemplate
    )

    this.setSlides(
      this.servicesList.filter(el => el.category === 'add-services'),
      this.sliderListAdd,
      this.sliderTemplateAdd
    )

    this.initSlider(this.sliderList)
    this.initSlider(this.sliderListAdd)
  },
  open()
  {
    this.counter = 1
    this.slidesOnPage = 6
    this.mobilefilter = ''
    this.mobileList = $('.popup-services__mobile-list')

    this.init()

    this.setMobileSlides(
      this.slidesOnPage,
      this.servicesList,
      this.mobilefilter
    )

    grummer.popup.open('_popup-services')
  },
  setCategories(arr)
  {
    const list = $('.popup-services .g-select__items')
    const template = $.trim( $('.popup-services .popup-services__filter-temp').html() )
    const lastLi = $.trim( $('.popup-services .popup-services__filter-last-temp').html() )

    list.html(
      lastLi + arr.reduce((acc, item) => {
        return acc += template
          .replace( /{{title}}/ig, item.title )
          .replace( /{{value}}/ig, item.value )
          .replace( /{{icon}}/ig, item.icon )
      }, '')
    )
  },
  filter(arr)
  {
    this.setSlides(
      arr,
      this.sliderList,
      this.sliderTemplate
    )
    this.sliderList.removeClass('slick-initialized slick-slider')
    this.initSlider(this.sliderList)
  },
  filterServices(val, type)
  {
    return this.servicesList.filter(service => {
      return service[type] === val
    })
  },
  filterServicesByCategory(val)
  {
    this.mobilefilter = val
    this.counter = 1
    this.setMobileSlides(
      this.counter * this.slidesOnPage,
      this.servicesList,
      this.mobilefilter
    )

    !val
      ? this.filter(
          this.servicesList.filter(el => el.category !== 'add-services')
        )
      : this.filter(this.filterServices(val, 'category'))
  },
  createHtmlList(arr, template)
  {
    return arr.reduce((acc, slide) => {
      return acc += template
        .replace( /{{title}}/ig, slide.title )
        .replace( /{{text}}/ig, slide.text )
        .replace( /{{price}}/ig, slide.price )
        .replace( /{{time}}/ig, slide.time )
        .replace( /{{img}}/ig, slide.img )
    }, '');
  },
  setSlides(slides, list, template)
  {
    list.html('')
    list.append(this.createHtmlList(slides, template))
  },
  initSlider($el)
  {
    $el.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<div class="prev-arrow"><img src="img/arrow.svg"/></div>',
      nextArrow: '<div class="next-arrow"><img src="img/arrow.svg"/></div>'
    });
  },
  addService(title, text)
  {
    const service = this.servicesList.find(obj => {
      return obj.title === title && obj.text === text
    })

    if (!grummer.currentServices.includes(service))
    {
      grummer.currentServices.push(service)
    }

    grummer.popupMain.open()
  },
  setMobileSlides(slidesCounter, arr, filter)
  {
    this.setSlides(
      arr.filter(el => {
        return el.category === filter || filter === ''
      }).slice(0, slidesCounter),
      this.mobileList,
      this.mobileListTemplate
    )
  },
  addMore()
  {
    this.counter += 1
    this.setMobileSlides(
      this.counter * this.slidesOnPage,
      this.servicesList,
      this.mobilefilter
    )
  }
}
