'use strict';

@@include('lib/jquery.min.js');
@@include('lib/slick.min.js');
@@include('lib/webp.js');
@@include('lib/validator.js');
@@include('lib/maskedinput.min.js');


const grummer = {
  goToBlock(event, $el, isMobile=false)
  {
    event.preventDefault();
    if (isMobile) this.header.toggleMenu()

    $('html,body').animate({
      scrollTop: $($el.hash).offset().top
    });
  }
}

@@include('lib/tlg.js');
@@include('popup.js');
@@include('popup-main.js');
@@include('popup-services.js');

@@include('store.js');
@@include('g-select.js');
@@include('header.js');
@@include('services.js');
@@include('ourworks.js');
@@include('questions.js');
@@include('feedbacks.js');
@@include('callback.js');


grummer.init = function() {
  this.store.init()
  this.tlg.init()
  this.popup.init()
  this.popupServices.init()

  this.header.init()
  this.services.init()
  this.ourworks.init()
  this.questions.init()
  this.feedbacks.init()
  this.callback.init()
}

$(document).ready(() => {
  grummer.init()
})
