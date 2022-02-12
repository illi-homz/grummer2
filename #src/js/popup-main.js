grummer.popupMain = {
  init()
  {
    const svg = path => `
      <svg
        width="6"
        height="12"
        viewBox="0 0 8 14"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="${path}"
          stroke="#ECEFEF"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    `
    $('#datepicker')
      .datepicker({
        dateFormat: 'd MM',
        position: 'bottom right',
        offset: 8,
        autoClose: true,
        prevHtml: svg('M7.04199 12.8713L1.04199 6.87134L7.04199 0.871338'),
        nextHtml:  svg('M1 12.8713L7 6.87134L1 0.871338'),
        navTitles: {
          days: 'MM yyyy',
        },
        timepicker: true
      })
      .data('datepicker')
      .selectDate(new Date())
  },

  open()
  {
    this.init()

    this.$popupMain = $('._popup-main')
    this.$services = this.$popupMain.find('.popup-main__form-services')
    this.$servicesUl = this.$popupMain.find('.popup-main__form-services-ul')
    this.$lastLi = this.$servicesUl.find('li').last()[0]

    // const breed = grummer.currentBreed

    const html = this.createServicesListHtml()

    this.$servicesUl.html(html).append(this.$lastLi)

    grummer.currentServices.length > 1
      ? this.$services.removeClass('one')
      : this.$services.addClass('one')

    // if (breed)
    // {
    //   const b = $('._breed')
    //   b.find('input[name="breed"]').val(breed)
    //   b.find('._selected-text').text(breed)
    // }

    this.setFinalPrice(this.calculateFinalPrice())

    grummer.popup.open(this.$popupMain)
  },
  createServicesListHtml()
  {
    const template = $.trim( $('#popup-main__form-services').html() )

    return grummer.currentServices.reduce((acc, service) => {
      return acc += template
                      .replace( /{{title}}/ig, service.title )
                      .replace( /{{price}}/ig, service.price )
    }, '')
  },
  calculateFinalPrice()
  {
    return grummer.currentServices.reduce((acc, el) => {
      return el.price.includes('-')
        ? acc += +el.price.split('-')[0]
        : el.price.includes('от')
            ? acc += +el.price.replace('от', '')
            : acc += +el.price
    }, 0)
  },
  setFinalPrice(price)
  {
    this.$popupMain
      .find('._final-price')
      .html(price)
    this.$popupMain
      .find('input#_final-price')
      .val(price)
  },
  removeService(title)
  {
    // because popup click outside....
    setTimeout(() => {
      grummer.currentServices = grummer.currentServices.filter(el => {
        return el.title !== title
      })

      if (grummer.currentServices.length === 1) this.$services.addClass('one')

      this.$servicesUl
        .html(this.createServicesListHtml())
        .append(this.$lastLi)

      this.setFinalPrice(this.calculateFinalPrice())
    }, 0)
  },
  createServicesStr(nodeList)
  {
    return Array.from(nodeList).map(el => {
      return el.value
    }).join(', ')
  },
  async submit(form, event)
  {
    event.preventDefault();

    const validator = new Validator(form)
    const v = validator.validate()
    if(!v) return

    let services

    form.services instanceof RadioNodeList
      ? services = this.createServicesStr(form.services)
      : services = form.services.value

    let breed = grummer.breeds.find(el => el.value === form.breed.value)

    const data = {
      'Услуги': services,
      'Клиент': `${form.name.value} ${form.lastname.value}`,
      'Тел': form.tel.value,
      'Порода': breed ? breed.title : '',
      'Дата': form.date.value,
      'Комментарий': form.comment.value,
      'Мин цена': form.price.value
    }

    let msg = '*Запись*\n\n'

    for (let key in data)
    {
      msg += `#${key}: ${data[key]}\n`
    }

    const res = await grummer.tlg.sendMessage(msg)
    // console.log(res);

    if (res) setTimeout(() => {
      console.log(res);
      form.reset()

      grummer.popup.open('_popup-ok')
    }, 300)
  }
}
