'use strict';

@@include('jquery.min.js');
@@include('slick.min.js');
@@include('webp.js');


const grummer = {
  goToBlock(target)
  {
    console.log(target);
  }
}


@@include('store.js');
@@include('g-select.js');
@@include('header.js');
@@include('services.js');
@@include('ourworks.js');
@@include('questions.js');
@@include('feedbacks.js');


grummer.init = function() {
  this.store.init()
  this.header.init()
  this.services.init()
  this.ourworks.init()
  this.questions.init()
  this.feedbacks.init()
}

$(document).ready(() => {
  grummer.init()
})
