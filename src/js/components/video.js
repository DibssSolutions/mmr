var btnPlay = $('.js-video-play');

btnPlay.click(function() {
  var parent = $(this).parents('.js-video-parent');
  var video = parent.find('.js-video');
  video[0].play();
  parent.addClass('is-play');
  event.stopPropagation();
});

$('.js-video-parent').click(function() {
  if (video[0].play()) {
    video[0].pause();
  }
});
