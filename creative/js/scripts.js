jQuery(function($) {
    "use strict";

    // Custom jQuery Code Here
    
    $(function(){
            $(document).mousemove(function(e){
                $('#cube').css({
                    'transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
                });
            });
        });
    
    function n3xt(text, element) {
      var sample = document.querySelector(element);
      if (sample.dataset.animating === 'true') return;
      var sampleH = 15; // будет держать текст фиксированным, в противном случае - offsetHeight
      var sampleT = sample.textContent; // старый текст
      var sampleNT = text; // новый текст
      sample.dataset.animating = 'true';
      sample.style.height = sampleH + 'px';

      // исходный текстовый блок
      var samO = document.createElement('div');
      samO.style.transformOrigin = '0 ' + sampleH / 2 + 'px -' + sampleH / 2 + 'px';
      samO.classList.add('t3xt');
      samO.textContent = sampleT;

      // новый текстовый блок
      var samN = samO.cloneNode();
      samN.textContent = sampleNT;
      sample.textContent = '';
      sample.appendChild(samO);
      sample.appendChild(samN);

      samO.classList.add('t3xt-out');
      samN.classList.add('t3xt-in');

      samN.addEventListener('animationend', function (event) {
        sample.removeChild(samO);
        sample.removeChild(samN);
        sample.textContent = sampleNT;
        sample.dataset.animating = 'false';
      });
    }

    var phraseIndex = 1;
    var wordIndex = 0;
    var t3xts = [
    ["Здравствуй!", "Сайт", "Creativtity -"],
    ["Это уникальное", "место где публикуется", "неповторимое"],
    ["творчество", "наших", "посетителей"],
    ["Благодарим тех", "кто нажал", "на рекламу"],
    ["это нам", "очень", "помогает)"],
    ["Всем посетителям", "прекрасного", "дня!"],
    ["А также", "замечательного", "настроения!"]];

    // Начало анимации
    setTimeout(changetext, 200);

    function changetext() {
      if (wordIndex > 2) {
        wordIndex = 0;
        phraseIndex++;
      }
      if (phraseIndex >= t3xts.length) {
        phraseIndex = 0;
      }
      var term = t3xts[phraseIndex][wordIndex];
      n3xt(term, '.t3xt-' + ++wordIndex);

      if (wordIndex == 3) {
        setTimeout(changetext, 2000);
      } else {
        setTimeout(changetext, 150);
      }
    }
    //Parallax
    var $window = $(window);
    if($('section[data-type="background"]').length){
        $('section[data-type="background"]').each(function(){

            var $obj = $(this);
            var offset = $obj.offset().top;

            $(window).scroll(function()
            {
                offset = $obj.offset().top;

                if ($window.scrollTop() > (offset - window.innerHeight))
                {
                    var yPos = -(($window.scrollTop() - offset) / 2 );
                    var coords = '50% ' + ( yPos ) + 'px';
                    $obj.css({ backgroundPosition:  coords });
                }
            });
            $(window).resize(function()
            {
                offset = $obj.offset().top;
            });
        });
    }


    //People Slider
    $('.peoples_list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: '.right_arrow .right',
        prevArrow: '.left_arrow .left'
    });



    $('.portfolioslider').flexslider({
        animation:'slide',
        smoothHeight:true,
        prevText:"<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        nextText: "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>",
        controlNav: false
    });

    $('.left_slider').flexslider({
        animation:'slide',
        //smoothHeight:true,
        prevText:"<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>",
        nextText: "<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>",
        controlNav: false
    });

    $('.menu_icon i.fa-bars').on('click',function(){
        $('.menu_icon i.fa-bars').css('display','none');
        $('.menu_icon i.fa-times').css('display','inline-block');

        $('.top_navigation').css('display','block');
    });

    $('.menu_icon i.fa-times').on('click',function(){
        $('.menu_icon i.fa-bars').css('display','inline-block');
        $('.menu_icon i.fa-times').css('display','none');

        $('.top_navigation').css('display','none');
    });


    $('.latest-tweets').flexslider({
        animation:'slide',
        directionNav:false,
        selector: "ul > li"
    });
});

Modernizr.addTest('ipad', function () {
    return !!navigator.userAgent.match(/iPad/i);
});

Modernizr.addTest('iphone', function () {
    return !!navigator.userAgent.match(/iPhone/i);
});

Modernizr.addTest('ipod', function () {
    return !!navigator.userAgent.match(/iPod/i);
});

Modernizr.addTest('appleios', function () {
    return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
});

Modernizr.addTest('positionfixed', function () {
    var test    = document.createElement('div'),
        control = test.cloneNode(false),
        fake = false,
        root = document.body || (function () {
            fake = true;
            return document.documentElement.appendChild(document.createElement('body'));
        }());

    var oldCssText = root.style.cssText;
    root.style.cssText = 'padding:0;margin:0';
    test.style.cssText = 'position:fixed;top:42px';
    root.appendChild(test);
    root.appendChild(control);

    var ret = test.offsetTop !== control.offsetTop;

    root.removeChild(test);
    root.removeChild(control);
    root.style.cssText = oldCssText;

    if (fake) {
        document.documentElement.removeChild(root);
    }

    /* Uh-oh. iOS would return a false positive here.
     * If it's about to return true, we'll explicitly test for known iOS User Agent strings.
     * "UA Sniffing is bad practice" you say. Agreeable, but sadly this feature has made it to
     * Modernizr's list of undectables, so we're reduced to having to use this. */
    return ret && !Modernizr.appleios;
});


// Modernizr.load loading the right scripts only if you need them
Modernizr.load([
    {
        // Let's see if we need to load selectivizr
        test : Modernizr.borderradius,
        // Modernizr.load loads selectivizr and Respond.js for IE6-8
        nope : [ale.template_dir + '/js/libs/selectivizr.min.js', ale.template_dir + '/js/libs/respond.min.js']
    },{
        test: Modernizr.touch,
        yep:ale.template_dir + '/css/touch.css'
    }
]);



jQuery(function($) {
    var is_single = $('#post').length;
    var posts = $('article.post');
    var is_mobile = parseInt(ale.is_mobile);

    var slider_settings = {
        animation: "slide",
        slideshow: false,
        controlNav: false
    }

    $(document).ajaxComplete(function(){
        try{
            if (!posts.length) {
                return;
            }
            FB.XFBML.parse();
            gapi.plusone.go();
            twttr.widgets.load();
            pin_load();
        }catch(ex){}
    });

    // open external links in new window
    $("a[rel$=external]").each(function(){
        $(this).attr('target', '_blank');
    });

    $.fn.init_posts = function() {
        var init_post = function(data) {
            // close other posts
            data.post.siblings('.open-post').find('a.toggle').trigger('click', {
                hide:true
            });

            var loading = data.post.find('span.loading');

            if (data.more.is(':empty')) {
                data.post.addClass('post-loading');
                loading.css('visibility', 'visible');
                data.more.load(ale.ajax_load_url, {
                    'action':'aletheme_load_post',
                    'id':data.post.data('post-id')
                }, function(){
                    loading.remove();
                    data.more.slideDown(400, function(){
                        data.post.addClass('open-post');
                        data.toggler.text('Close Post');
                        $('.video', data.more).fitVids();
                        if (data.scroll) {
                            data.scroll.scrollTo('fast');
                        }
                    });
                    init_comments(data.post);
                });
            } else {
                data.more.slideDown(400, function(){
                    data.post.addClass('open-post');
                    data.toggler.text('Close Post');
                    if (data.scroll) {
                        data.scroll.scrollTo('fast');
                    }
                });
            }
        }

        var load_post = function(e, _opts) {
            e.preventDefault();
            var data  = {
                toggler:$(this),
                scroll:false
            };
            var opts = $.extend({
                comments:false,
                hide:false,
                add_comment:false
            }, _opts);
            data.post = data.toggler.parents('article.post');
            data.more = data.post.find('.full');

            if (data.more.is(':visible')) {
                if (opts.hide == true) {
                    // quick hide for multiple posts
                    data.more.hide();
                } else {
                    data.more.slideUp(400);
                }
                data.toggler.text('Open Post');
                data.post.removeClass('open-post');
            } else {
                if (typeof(e.originalEvent) != 'undefined' ) {
                    data.scroll = data.post;
                }
                init_post(data);
            }
        }

        var init_comments = function(post) {
            var respond = $('section.respond', post);
            var respond_form = $('form', respond);
            var respond_form_error = $('p.error', respond_form);
            //var respond_cancel = $('.cancel-comment-reply a', respond);
            var comments = $('section.comments', post);

            /*$('a.comment-reply-link', post).on('click', function(e){
             e.preventDefault();
             var comment = $(this).parents('li.comment');
             comment.find('>div').append(respond);
             respond_cancel.show();
             respond.find('input[name=comment_post_ID]').val(post.data('post-id'));
             respond.find('input[name=comment_parent]').val(comment.data('comment-id'));
             respond.find('input:first').focus();
             }).attr('onclick', '');

             respond_cancel.on('click', function(e){
             e.preventDefault();
             comments.after(respond);
             respond.find('input[name=comment_post_ID]').val(post.data('post-id'));
             respond.find('input[name=comment_parent]').val(0);
             $(this).hide();
             });
             */
            respond_form.ajaxForm({
                'beforeSubmit':function(){
                    respond_form_error.text('').hide();
                },
                'success':function(_data){
                    var data = $.parseJSON(_data);
                    if (data.error) {
                        respond_form_error.html(data.msg).slideDown('fast');
                        return;
                    }
                    var comment_parent_id = respond.find('input[name=comment_parent]').val();
                    var _comment = $(data.html);
                    var list;
                    _comment.hide();

                    if (comment_parent_id == 0) {
                        list = comments.find('ol');
                        if (!list.length) {
                            list = $('<ol class="commentlist "></ol>');
                            comments.find('.scrollbox .jspContainer .jspPane').append(list);
                        }
                    } else {
                        list = $('#comment-' + comment_parent_id).parent().find('ul');
                        if (!list.length) {
                            list = $('<ul class="children"></ul>');
                            $('#comment-' + comment_parent_id).parent().append(list);
                        }
                        respond_cancel.trigger('click');
                    }
                    list.append(_comment);
                    _comment.fadeIn('fast');
                    //.scrollTo();

                    respond.find('textarea').clearFields();
                },
                'error':function(response){
                    var error = response.responseText.match(/\<p\>(.*)<\/p\>/)[1];
                    if (typeof(error) == 'undefined') {
                        error = 'Something went wrong. Please reload the page and try again.';
                    }
                    respond_form_error.html(error).slideDown('fast');
                }
            });
        }
        $(this).each(function(){
            var post = $(this);
            // init post galleries
            $(window).load(function(){
                $('.preview .flexslider', post).flexslider(slider_settings);
            });
            // do not init ajax posts & comments for mobile
            if (!is_mobile) {
                // ajax posts enabled
                if (ale.ajax_posts) {
                    $('a.toggle', post).click(load_post);
                    $('.video', post).fitVids();
                    $('.preview figure a', post).click(function(e){
                        e.preventDefault();
                        $(this).parents('article.post').find('a.toggle').trigger('click');
                    });
                }
            }
        });
        // init ajax comments on a single post if ajax comments are enabled
        if (is_single && parseInt(ale.ajax_comments)) {
            init_comments(posts);
        }
        // open single post on page
        if (parseInt(ale.ajax_open_single) && !is_single && posts.length == 1) {
            posts.find('a.toggle').trigger('click');
        }
    }
    posts.init_posts();

    $.fn.init_gallery = function() {
        $(this).each(function(){
            var gallery = $(this);
            $(window).load(function(){
                $('.flexslider', gallery).flexslider(slider_settings);
            });

        })
    }
    $('#gallery').init_gallery();

    $.fn.init_archives = function()
    {
        $(this).each(function(){
            var archives = $(this);
            var year = $('#archives-active-year');
            var months = $('div.months div.year-months', archives);
            var arrows = $('a.up, a.down', archives);
            var activeMonth;
            var current, active;
            var animated = false;
            if (months.length == 1) {
                arrows.remove();
                activeMonth = months.filter(':first').addClass('year-active').show();
                year.text(activeMonth.attr('id').replace(/[^0-9]*/, ''));
                return;
            }
            arrows.click(function(e){
                e.preventDefault();
                if (animated) {
                    return;
                }
                var fn = $(this);
                animated = true;
                arrows.css('visibility', 'visible');
                var current = months.filter('.year-active');
                if (fn.hasClass('up')) {
                    active = current.prev();
                    if (!active.length) {
                        active = months.filter(':last');
                    }
                } else {
                    active = current.next();
                    if (!active.length) {
                        active = months.filter(':first');
                    }
                }
                current.removeClass('year-active').fadeOut(150, function(){
                    active.addClass('year-active').fadeIn(150, function(){
                        animated = false;
                    });
                    year.text(active.attr('id').replace(/[^0-9]*/, ''));

                    if (fn.hasClass('up')) {
                        if (!active.prev().length) {
                            arrows.filter('.up').css('visibility', 'hidden');
                        }
                    } else {
                        if (!active.next().length) {
                            arrows.filter('.down').css('visibility', 'hidden');
                        }
                    }
                });
            });
            activeMonth = months.filter(':first').addClass('year-active').show();
            year.text(activeMonth.attr('id').replace(/[^0-9]*/, ''));
            arrows.filter('.up').css('visibility', 'hidden');
        });
    }
    $('#archives .ale-archives').init_archives();






});

// HTML5 Fallbacks for older browsers
jQuery(function($) {
    // check placeholder browser support
    if (!Modernizr.input.placeholder) {
        // set placeholder values
        $(this).find('[placeholder]').each(function() {
            $(this).val( $(this).attr('placeholder') );
        });

        // focus and blur of placeholders
        $('[placeholder]').focus(function() {
            if ($(this).val() == $(this).attr('placeholder')) {
                $(this).val('');
                $(this).removeClass('placeholder');
            }
        }).blur(function() {
                if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder')) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeholder');
                }
            });

        // remove placeholders on submit
        $('[placeholder]').closest('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            });
        });
    }
});

