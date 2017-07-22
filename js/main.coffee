---
---

$ ->
    $(window).scroll () ->
        if $(this).scrollTop() > 400
            $('.top').fadeIn 200
        else
            $('.top').fadeOut 200

    $(document).on 'click', '.smooth-scroll', (e) ->
        e.preventDefault();
        target = this.hash
        $target = $(target)

        if target is ''
            target = ''
            $target = $('body')

        $('html, body').stop().animate { 'scrollTop': $target.offset().top }, 900, 'swing', () ->
            window.location.hash = target;
