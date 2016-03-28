$(document).ready(function() {
    // This command is used to initialize some elements and make them work properly
    $.material.init();
    $("#dropdown-menu select").dropdown();
});


$( function() {
  /*
  - how to call the plugin:
  $( selector ).cbpNTAccordion( [options] );
  - destroy:
  $( selector ).cbpNTAccordion( 'destroy' );
  */

  $( '#cbp-ntaccordion' ).cbpNTAccordion();

} );


//  bootstrap plugins
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
});


// Easy Scrool to #id
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-80
        }, 1000);
        return false;
      }
    }
  });
});

// back to top
$(document).ready(function() {

  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > (document.documentElement.scrollHeight - 1500)) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });
});


//  Inputs 
(function() {
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();