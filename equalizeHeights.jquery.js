(function ($, eh) {  
  $.fn[eh] = function () {
    if (this.length > 1) {
      var that = $(this);
      $(window).resize(function () {
        var maxheight = 0;
        that.each(function () {
          var me = $(this),
            height = me.css({min-height: ''}); // reset box height to natural
          // solution for box-sizing + .height() bug in jQuery:
          height = me.css('box-sizing') == 'content-box' ? height.height() : height.outerHeight();          
          if (height > maxheight) maxheight = height;
        }).css({min-height: maxheight});
      }).resize();
    }
  };
}(jQuery, 'equalizeHeights'));

// example usage:
(function ($) {
  $('.eq1').equalizeHeights();
  $('.eq2').equalizeHeights();
}(jQuery));