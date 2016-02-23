// Check for touch devices
function is_touch_device() {
    return 'ontouchstart' in window // works on most browsers
        || navigator.maxTouchPoints; // works on IE10/11 and Surface
};

jQuery(document).ready(function($) {

    // Create our slider from unslider.js
    var slider = $('.prod-media__slide-wrap').unslider({
        animation: 'fade',
        nav: false,
        arrows: {
            //  Unslider default behaviour
            prev: '<a class="unslider-arrow prev"></a>',
            next: '<a class="unslider-arrow next"></a>'
        }
    });

    // Create mouseover function
    var el = document.getElementsByClassName('headshot-item'); //get all headshot elements

    // Check to see if we're on a touch device or not
    if (!is_touch_device()) {
        for (var i = 0; i < el.length; i++) {
            // Attach our event listeners
            el[i].addEventListener("mousemove", function(e) {

                // get width of our headshot element
                var x = e.pageX - $(this).offset().left;

                // get all img children
                var images = this.getElementsByTagName('img');

                // Creat thirds
                var oneThird = this.offsetWidth / 3;
                var twoThird = oneThird * 2;

                // work out where the mouse is
                // I'd like to make this a lot more efficient if I had more time,
                // Ideally so that any number of images could be added and you
                // wouldn't need to change anything here...
                if (x <= oneThird) {
                    $(images).not(this).css('display', 'none');
                    $(images[0]).css('display', 'block');
                } else if (x >= oneThird && x <= twoThird) {
                    $(images).not(this).css('display', 'none');
                    $(images[1]).css('display', 'block');
                } else if (x >= twoThird) {
                    $(images).not(this).css('display', 'none');
                    $(images[2]).css('display', 'block');
                }
            });
        }
    }

    // simple function to control info tabs
    $('.prod-page__tab a').click(function(e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        var tab = $(this).attr("href");
        $('.prod-page__panel').not(tab).css('display', 'none');
        $(tab).fadeIn();
    })
});
