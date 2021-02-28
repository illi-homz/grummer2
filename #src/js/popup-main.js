grummer.popupMain = {
  open(title, rewriteUl = true)
  {
    const $popupMain = $('._popup-main')
    const $services = $popupMain.find('.popup-main__form-services')
    const $servicesUl = $popupMain.find('.popup-main__form-services-ul')
    const service = grummer.servicesList.find(obj => {
      return obj.title === title
    })
    const breed = grummer.breeds.find(obj => {
      return obj.value === grummer.services.breed
    })

    const template = $.trim( $('#popup-main__form-services').html() )
    const html = template
      .replace( /{{title}}/ig, service.title )
      .replace( /{{price}}/ig, service.price )


    if (rewriteUl)
    {
      $servicesUl.prepend(html)
      $services.addClass('one')
    }
    else
    {
      $servicesUl.html($servicesUl.html() + html)
      $services.removeClass('one')
    }

    if (breed) $('._breed input[name="breed"]').val(breed.title)

    grummer.popup.open($popupMain)
  },
  submit(form, event)
  {
    event.preventDefault();

    let services

    form.services instanceof RadioNodeList
      ? services = this.createServicesStr(form.services)
      : services = form.services.value

    console.log(services);
  },
  createServicesStr(nodeList)
  {
    return Array.from(nodeList).map(el => {
      return el.value
    }).join(', ')
  }
}
