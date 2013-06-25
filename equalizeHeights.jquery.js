/*!
 * jQuery Equalize Heights Plugin - v 1.0 - 25/05/2013
 * by Max G J Panas (m@maxpanas.com), http://maxpanas.com
 *
 * Copyright (c) 2013 Max G J Panas
 * Dual licenced under MIT (http://opensource.org/licenses/MIT) and GPL (http://www.gnu.org/licenses/gpl.html) licences
 */

// * Examples of Use:
//
//  * simple:
//
//    $('.equal').equalizeHeights();
//
//  * or on resize for RWD (Responsive Web Design):
//
//    var el = $('.equal');
//    $(window).resize(function () {
//      el.equalizeHeights();
//    }).resize();

(function ($) {

  $.fn.equalizeHeights = function () {

    if (this.length > 1) { // no point in running this on fewer than two items

      var maxheight = 0, css;

      $(this).each(function () {
        // reset element height to natural in order to get real height values
        var height = $(this).css({'min-height': '', height: ''});

        // resolve issue of using box-sizing: border-box || padding-box when getting and setting $(el).height(val);
        height = $(this).css({'box-sizing'}) == 'content-box' ? height.height() : height.outerHeight();

        if (height > maxheight) maxheight = height;
      });

      css = {'min-height': maxheight};

      // IE6 support - IE6 does not support min-height, so set height as well
      if ($.browser.msie && $.browser.version == 6.0) { css.height = maxheight }

      $(this).css(css);

    }

  };

}(jQuery));