'use strict';

(function () {
  // changing bg on main section
  const backgrounds = ['1_dog.jpg', '2_cat.jpg', '3_dog.jpg', '4_cat.jpg']
  const headerBg = $('div.header__bg')
  // changeBg(headerBg, backgrounds, 1000, 9000)

  //add link on navbar
  const links = [
    {title: 'О салоне', value: 'about'},
    {title: 'Услуги', value: 'services'},
    {title: 'Наши работы', value: 'ourworks'},
    {title: 'Акции', value: 'stocks'},
    {title: 'Отзывы', value: 'feedbacks'},
    {title: 'Контакты', value: 'contacts'}
  ]
  const navList = $('.header__links')
  const mobileMenuLinks = $('.header__mobile-menu-links')
  const mobileMenu = $('.header__mobile-menu')
  let linksTemplate = $.trim( $('#header__links').html() )

  linksTemplating(links, linksTemplate, navList)
  linksTemplating(links, linksTemplate, mobileMenuLinks)

  $('[href="#call"]').on('click', function() {
    goToBlock($(this).attr('href'))
  })

  $('div.header__burger').on('click', function() {
    mobileMenu.slideToggle(300)
    $(this).children('div').first().toggleClass('active')
  })



  function changeBg( obj, arr, timeFade,  timeChange) {
    let count = 1
    const arrLen = arr.length

    return setInterval(() => {
      if ( count > arrLen - 1 ) count = 0
      obj.fadeOut(timeFade, () => {
        obj.css({background: `url(../img/main/${arr[count]}) bottom / cover no-repeat`})
        obj.fadeIn(timeFade)
        count++
      })
    }, timeChange)
  }

  function linksTemplating( linksArr, temp, list ) {
    let frag = ''
    $.each( linksArr, function( index, obj ) {
      frag += temp
        .replace( /{{title}}/ig, obj.title )
        .replace( /{{value}}/ig, obj.value )
    })
    list.append(frag)
    addEventClickOnLinks(list)
  }

  function addEventClickOnLinks( list ) {
    list.find('a').each(function(i, obj) {
      $(obj).on('click', function(obj) {
        goToBlock($(this).attr('href'))

        if (list.hasClass('header__mobile-menu-links')) {
          mobileMenu.fadeOut(300)
        }
      })
    })
  }
  
  function goToBlock( target ) {
    console.log(target)
  }
})()
