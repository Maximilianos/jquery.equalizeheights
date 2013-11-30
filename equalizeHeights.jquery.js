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

    var maxheight = 0, css;

    $(this).each(function () {
      // reset element height to natural in order to get real height values
      var el = $(this).css({minHeight: ''}), height;

      // resolve issue of using box-sizing: border-box when getting and setting $(el).height(val);
      height = 'border-box' == $(this).css('boxSizing') ? el.outerHeight() : el.height();

      if (height > maxheight) maxheight = height;
    });

    css = {minHeight: maxheight};

    $(this).css(css);

  };

}(jQuery));