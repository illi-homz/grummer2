'use strict';

grummer.services = {
  init() {
    this.breed = ''
    this.setCategories(grummer.categories)

    this.sliderList = $('.services__slider')
    this.sliderTemplate = $.trim( $('#services__slider-temp').html() )

    this.setSlides(
      grummer.servicesList,
      this.sliderList,
      this.sliderTemplate
    )
    this.initSlider()
  },
  setCategories(arr)
  {
    const list = $('.services__categories .g-select__items')
    const template = $.trim( $('.services__categories .services__filter-temp').html() )
    let frag = ''
    arr.forEach(item => {
      frag += template
        .replace( /{{title}}/ig, item.title )
        .replace( /{{value}}/ig, item.value )
        .replace( /{{icon}}/ig, item.icon )
    });
    list.append(frag)
  },
  initSlider()
  {
    $('.services__slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      prevArrow: '<div class="prev-arrow"><img src="img/arrow.svg"/></div>',
      nextArrow: '<div class="next-arrow"><img src="img/arrow.svg"/></div>',
      responsive: [
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          }
        }
      ]
    });
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


  setBreed(val) { this.breed = val },


  filter(list)
  {
    this.setSlides(
      list,
      this.sliderList,
      this.sliderTemplate
    )
    this.sliderList.removeClass('slick-initialized slick-slider')
    this.initSlider()
  },

  filterServices(val, type)
  {
    return grummer.servicesList.filter(service => {
      return service[type] === val
    })
  },
  filterServicesByBreed(el, animal=null)
  {
    const $el = $(el)
    if ($el.hasClass('active')) return

    $el.parent().children('div').removeClass('active')

    $el.addClass('active')

    const dogsMenu = $('.services__info-for-dogs')

    grummer.animal = animal

    animal === 'dog' ? dogsMenu.slideDown(300) : dogsMenu.slideUp(300)

    animal
      ? this.filter(this.filterServices(animal, 'animal'))
      : this.filter(grummer.servicesList)
  },
  filterServicesByCategory(val)
  {
    this.filter(this.filterServices(val, 'category'))
    this.showCleaner()
  },
  cleanFilter()
  {
    this.filter(grummer.servicesList)
    this.removeCleaner()

    const $categories = $('.services__categories')
    $categories.find('._selected-text').html('Любая')

    $categories.find('._option').removeClass('active')
  },


  showCleaner()
  {
    $('.services__filters-cleaner').addClass('active')
  },
  removeCleaner()
  {
    $('.services__filters-cleaner').removeClass('active')
  },

  openPopup(title)
  {
    const service = grummer.servicesList.find(obj => {
      return obj.title === title
    })
    const breed = grummer.breeds.find(obj => {
      return obj.value === this.breed
    })

    grummer.currentServices = [service]
    if (breed) grummer.currentBreed = breed.title

    grummer.popupMain.open()
  }
}
