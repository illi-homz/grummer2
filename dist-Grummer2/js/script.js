'use strict'; // Проверка поддержки webp браузером и добавление класса webp

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
'use strict';

(function () {
  // changing bg on main section
  var backgrounds = ['1_dog.jpg', '2_cat.jpg', '3_dog.jpg', '4_cat.jpg'];
  var headerBg = $('div.header__bg'); // changeBg(headerBg, backgrounds, 1000, 9000)
  //add link on navbar

  var links = [{
    title: 'О салоне',
    value: 'about'
  }, {
    title: 'Услуги',
    value: 'services'
  }, {
    title: 'Наши работы',
    value: 'ourworks'
  }, {
    title: 'Акции',
    value: 'stocks'
  }, {
    title: 'Отзывы',
    value: 'feedbacks'
  }, {
    title: 'Контакты',
    value: 'contacts'
  }];
  var navList = $('.header__links');
  var mobileMenuLinks = $('.header__mobile-menu-links');
  var mobileMenu = $('.header__mobile-menu');
  var linksTemplate = $.trim($('#header__links').html());
  linksTemplating(links, linksTemplate, navList);
  linksTemplating(links, linksTemplate, mobileMenuLinks);
  $('[href="#call"]').on('click', function () {
    goToBlock($(this).attr('href'));
  });
  $('div.header__burger').on('click', function () {
    mobileMenu.slideToggle(300);
    $(this).children('div').first().toggleClass('active');
  });

  function changeBg(obj, arr, timeFade, timeChange) {
    var count = 1;
    var arrLen = arr.length;
    return setInterval(function () {
      if (count > arrLen - 1) count = 0;
      obj.fadeOut(timeFade, function () {
        obj.css({
          background: "url(../img/main/".concat(arr[count], ") bottom / cover no-repeat")
        });
        obj.fadeIn(timeFade);
        count++;
      });
    }, timeChange);
  }

  function linksTemplating(linksArr, temp, list) {
    var frag = '';
    $.each(linksArr, function (index, obj) {
      frag += temp.replace(/{{title}}/ig, obj.title).replace(/{{value}}/ig, obj.value);
    });
    list.append(frag);
    addEventClickOnLinks(list);
  }

  function addEventClickOnLinks(list) {
    list.find('a').each(function (i, obj) {
      $(obj).on('click', function (obj) {
        goToBlock($(this).attr('href'));

        if (list.hasClass('header__mobile-menu-links')) {
          mobileMenu.fadeOut(300);
        }
      });
    });
  }

  function goToBlock(target) {
    console.log(target);
  }
})();