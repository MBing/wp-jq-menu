(function($) {
// --------------------------------------------------------------
  // Copyright Martin Bing 2018
// --------------------------------------------------------------
// Get all nodes from the page
  const domNodes = document.querySelectorAll('a[title]');
  if (domNodes.length === 0) return;

  const nodeList = Array.from(domNodes).map(el => ({
    title: el.title,
    path: `${document.location.origin}/assets/mb-menu-plugin/images/${el.title.toLowerCase()}.jpg`
  }));

// css overlay object
  const cssObject = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    "object-fit": "cover",
    "object-position": "center",
    "background-color": "#000",
    "z-index": 1, // uses 0 and 1 usually
  };

  $('a[title]')
    .on('mouseover', function () {
      const image = Object.values(nodeList)
        .filter(nodeItem => nodeItem.title === this.title)
        .map(nodeItem => nodeItem.path);

      if (!Boolean(image)) return;

      // test image
      const overlay = $(`<img class="mb-img-hover" src="${image}">`);
      overlay.css(cssObject)
        .insertBefore('.row-bg-wrap').hide().fadeIn();
    })
    .on('mouseout', function () {
      $('.mb-img-hover').fadeOut('slow', function () {
        $(this).remove();
      });
    });

})(window.jQuery);
