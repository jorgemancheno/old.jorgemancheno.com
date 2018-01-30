$(function() {

  if ($.fn.lazyload) {
    $('img.js-lazyload').show()
                        .lazyload({
                          container: '.layout',
                          effect:    'fadeIn',
                          threshold: 200
                        });
  }

  if ($.fn.flexslider) {
    $('.flexslider').flexslider({
      animationSpeed: 200,
      directionNav: false
    });
  }

  // Burger
  $('.burger').each(function() {

    var $html = $('html');
    var $burger = $(this);
    var $targetNav = $($burger.data('target'));
    var activeNavClass = 'has-nav-active';

    _checkNavState = function() {
      return $html.hasClass(activeNavClass);
    }

    $targetNav.find('a').each(function() {
      $targetNavLink = $(this);
      $targetNavLink.on('click', function($event) {
        if (_checkNavState()) {
          $html.removeClass(activeNavClass);
          $targetNavLink.blur();
        }
      });
    });

    $burger.on('click', function($event) {
      if (! _checkNavState()) {
        $html.addClass(activeNavClass);
      } else {
        $html.removeClass(activeNavClass);
      }
      $burger.blur();
      $event.stopPropagation();
      $event.preventDefault();
    });
  });
});
