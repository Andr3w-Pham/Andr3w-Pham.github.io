/*========================================================================
                                SKILLS
========================================================================== */
/*
$(document).ready(function() {


});

jQuery document.ready method.It's used to make a function available after the page is ready
It is good place to have all the jQuery events & functions inside this document.ready method.

*/

/* Equivalent to recommended way of calling document.ready() method */
$(function() {
  // animate on scroll
  new WOW().init();


});


/*========================================================================
                            ABOUT ME
========================================================================== */
$(function() {

  $("#about-me").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'

  });

});


/*========================================================================
                            MY PROJECTS
========================================================================== */
/* Documentation: http://dimsemenov.com/plugins/magnific-popup/documentation.html
2nd Option. From a group of elements with one parent */
/* selected the id called work which happens to be the id of the work section */

$(function() {

  $("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // adding comma after image & with the code below we set gallery to true for work section
    gallery:{
    enabled:true
  }

  });

});

/*========================================================================
                              TEST
========================================================================== */
/* Documentation for owl-carousel-2
 https://owlcarousel2.github.io/OwlCarousel2/docs/started-installation.html */
$(function() {

  $("#team-members").owlCarousel();

});
