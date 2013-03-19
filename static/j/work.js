$(document).ready(function() {

    $('img.js-lazyload').show()
                        .lazyload({
                            effect:    'fadeIn',
                            threshold: 200
                        });

});