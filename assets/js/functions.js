$(document).ready(function(){
  var viewportWidth = $(window).width()
    , viewportHeight = $(window).height()

  $('.slide').css({'min-height':viewportHeight})

  $(function() {
    $.scrollify({
      section : ".slide"
    })
  })

})
