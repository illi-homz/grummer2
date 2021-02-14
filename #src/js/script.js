'use strict';

@@include('jquery.min.js');
@@include('slick.min.js');
@@include('webp.js');


class Grummer {
  constructor() {
  }

  goToBlock( target ) {
    console.log(target)
  }
}
const grummer = new Grummer()


@@include('g-select.js');
@@include('store.js');
@@include('header.js');
@@include('services.js');


grummer.init = function() {
  this.store.init()
  this.header.init()
  this.services.init()
}

$(document).ready(() => {
  grummer.init()
})
