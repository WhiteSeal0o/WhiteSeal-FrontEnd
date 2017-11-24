(function() {
var docElem = window.document.documentElement,
  scrollVal,
  isRevealed,
  noscroll,
  isAnimating,
  container = document.getElementById( 'container' );

function scrollPage() {
  scrollVal = window.pageYOffset;

  if( noscroll ) {
    if( scrollVal < 0 ) return false;
    window.scrollTo( 0, 0 );
  }

  if( classie.has( container, 'notrans' ) ) {
    classie.remove( container, 'notrans' );
    return false;
  }

  if( isAnimating ) {
    return false;
  }

  if( scrollVal <= 0 && isRevealed ) {
    toggle(0);
  }
  else if( scrollVal > 0 && !isRevealed ){
    toggle(1);
  }
}

function toggle( reveal ) {
  isAnimating = true;

  if( reveal ) {
    classie.add( container, 'modify' );
  }
  else {
    noscroll = true;
    classie.remove( container, 'modify' );
  }

  setTimeout( function() {
    isRevealed = !isRevealed;
    isAnimating = false;
    if( reveal ) {
      noscroll = false;
    }
  }, 1000 );
}

// refreshing the page...
var pageScroll = window.pageYOffset;
noscroll = pageScroll === 0;

if( pageScroll ) {
  isRevealed = true;
  classie.add( container, 'notrans' );
  classie.add( container, 'modify' );
}

window.addEventListener( 'scroll', scrollPage );

})();
