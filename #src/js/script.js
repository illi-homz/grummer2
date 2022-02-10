"use strict";

@@include('lib/jquery.min.js');
@@include('lib/slick.min.js');
@@include('lib/webp.js');
@@include('lib/validator.js');
@@include('lib/maskedinput.min.js');
@@include('lib/air-datepicker.js');

const grummer = {
  currentServices: [],
  currentBreed: undefined,
  breesTemplate: null,

  goToBlock(target, event, isMobile = false) {
    if (event) event.preventDefault();
    if (isMobile) this.header.toggleMenu();

    $("html,body").animate({
      scrollTop:
        typeof target === "string" ? target : $(target.hash).offset().top,
    });
  },

  setBreeds(arr) {
    const list = $("._breeds-items");

    if (!this.breesTemplate) {
      const template = $.trim($(".__breeds-temp").html());
      this.breesTemplate = template;
    }

    list.html("");

    let frag = arr.reduce((acc, item) => {
      return (acc += this.breesTemplate
        .replace(/{{title}}/gi, item.title)
        .replace(/{{value}}/gi, item.value));
    }, "");

    list.append(frag);
  },
};

@@include('lib/tlg.js');
@@include('popup.js');
@@include('popup-main.js');
@@include('popup-services.js');
@@include('popup-ok.js');

@@include('store.js');
@@include('g-select.js');
@@include('header.js');
@@include('services.js');
@@include('ourworks.js');
@@include('questions.js');
@@include('feedbacks.js');
@@include('callback.js');

grummer.init = function () {
  this.store.init();

  $("._input-phone").mask("+7(999)999-99-99");
  this.setBreeds(grummer.breeds);

  this.tlg.init();
  this.popup.init();
  // this.popupServices.init()

  this.header.init();
  this.services.init();
  this.ourworks.init();
  this.questions.init();
  this.feedbacks.init();
  // grummer.popupMain.init()
};

$(document).ready(() => {
  grummer.init();
});
