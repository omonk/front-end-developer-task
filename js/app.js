
// Check for touch devices
function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

jQuery(document).ready(function($){

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

				var oneThird = this.offsetWidth / 3;
				var twoThird = oneThird * 2;

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
});
