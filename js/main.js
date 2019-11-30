$(() => {
  $('.navbar-burger').on('click', function() {
    $this = $(this);

    if ($('.navbar-menu').hasClass('active')) {
      $('.navbar-menu').removeClass('active');
      $this.html("<i class='fas fa-bars'></i>");
    } else {
      $('.navbar-menu').addClass('active');
      $this.html("<i class='fas fa-times'></i>");
    }
  });

  $('.navbar-menu .navbar-item a').on('click', function() {
    $menu = $('.navbar-menu');
    $toggle = $('.navbar-burger');

    if ($menu.hasClass('active')) {
      $menu.removeClass('active');
      $toggle.html("<i class='fas fa-bars'></i>");
    }
  });

  $(document).on('click', '.smooth-scroll', function(e) {
    e.preventDefault();

    const target = this.hash,
      $target = $(target);
    const scrollTop = $target.offset() ? $target.offset().top - 100 : 0;

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: scrollTop
        },
        400,
        'swing',
        function() {
          history.pushState(null, null, target || '#');
        }
      );
  });
});
