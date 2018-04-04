$('.video-banner').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      vimeo: {
        index: 'vimeo.com/',
        id: '/',
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
    }
  }
});