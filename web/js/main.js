$(document).ready(function () {

    var mainSlider = $(".owl-carouse1").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000
    });
    $(document).on('click', '.slider-control__right', ()=> {
        mainSlider.trigger('next.owl.carousel', [300]);
    });
    $(document).on('click', '.slider-control__left', ()=> {
        mainSlider.trigger('prev.owl.carousel', [300]);
    });
    $(document).on('click', '.search__icon', (event) => {
        event.preventDefault();
        $(".search__input").toggleClass("active");
    });

    var typedSlider = $(".typed-slider").owlCarousel({
        loop: true,
        items: 1,
        dots: true
    });
    $(document).on('click', '.typed-slider__controls_left', ()=> {
        typedSlider.trigger('prev.owl.carousel', [300]);
    });
    $(document).on('click', '.typed-slider__controls_right', ()=> {
        typedSlider.trigger('next.owl.carousel', [300]);
    });

    //about-us-slider
    var aboutUsSlider = $(".js-about-us-slider").owlCarousel({
        loop: true,
        items: 2,
        responsive: {
            0: {
                items: 1
            },

            1160: {
                items: 2
            }
        }
    });
    $(document).on('click', '.js-slider-about-prev', ()=> {
        aboutUsSlider.trigger('prev.owl.carousel', [300]);
    });
    $(document).on('click', '.js-slider-about-next', ()=> {
        aboutUsSlider.trigger('next.owl.carousel', [300]);
    });

    //project description slider
    var projectSlider = $(".owl-project-description").owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },

            1160: {
                items: 2
            }
        }
    });

    $(document).on('click', '.js-prod-desc_prev', ()=> {
        projectSlider.trigger('prev.owl.carousel', [300]);
    });
    $(document).on('click', '.js-prod-desc_next', ()=> {
        projectSlider.trigger('next.owl.carousel', [300]);
    });
    //end project description slider

    //**
    // popup
    // opening by data-popup attr at button
    //**
    $(document).on('click', '.popup-show', (e)=> {
        e.preventDefault();
        var data = $(e.target).data("popup");
        var selector = ".popup." + data;

        $(selector).css("top", window.pageYOffset + 15);
        $(selector).fadeIn("fast");
        $(".popup-bg").fadeIn("fast");
    });

    $(document).on('click', '.popup__close-cross, .popup-bg', ()=> {
        $(".popup").fadeOut("fast");
        $(".popup-bg").fadeOut("fast");
    });
    //popup error
    $(".popup__input input").focusout((event)=> {
        var $this = $(event.target);
        if ($this.val().length == 0) {
            $this.parent().addClass("active");
        }
        else {
            $this.parent().removeClass("active");
        }
    });
    $(".popup__input input").keyup((event)=> {
        var $this = $(event.target);
        if ($this.val().length != 0) {
            $this.parent().removeClass("active");
        }
    });

    $(document).on('click', ".popup__form-submit", (event)=> {
        var $this = $(event.target);
        var inputs = $this.parent("form").find("input");

        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val().length == 0) {
                event.preventDefault();
                $(inputs[i]).parent().addClass("active");
            }
        }
    });

    //end popup


    var mobileMenu = false;
    $(document).on('click', '.mobile-hamburger', ()=> {
        if (!mobileMenu) {
            $(".mobile-hamburger").addClass("active");
            $(".menu").addClass("active");
            mobileMenu = true;
        }
        else {
            $(".mobile-hamburger").removeClass("active");
            $(".menu").removeClass("active");
            mobileMenu = false;
        }
    });

    //item card properties
    $(document).on('click', '.js-all-properties', (event) => {
        $(".item-card__charasterisric-wrap").toggleClass("active");
    });
    $(document).on('click', '.js-item-mobile-properties__head', (event) => {
        $(".js-item-mobile-properties__drop-list").toggleClass("active");
    });
    $(document).on('click', '.js-item-card-list', (event) => {
        $(".item-card-list").toggleClass("active");
    });

    $(document).on('click', '.product-description-slider__zoom , .run-fullscreen-slider', (event) => {
        $("#start-lightgallery").click();
    });

    $(document).on('click', '.js-show-collapse', (event)=> {
        event.preventDefault();
        $(event.target).siblings(".js-collapsed-block").toggleClass("active");
    });

    //catalog filter
    $(document).on("click", ".js-catalog-filter-drop", (event)=> {
        $(event.target).toggleClass("active");
        $(event.target).siblings(".js-catalog-dropdown").slideToggle("fast");
    });
    //end catalog filter

    //tabs
    $(document).on('click', '.tabs__item', (event) => {
        $(".tabs__item").removeClass("active");
        $(event.currentTarget).addClass("active");
        var tableNum = $(event.currentTarget).data();
        $(".catalog-table-content").hide();
        $(`#${tableNum.table}.catalog-table-content`).show();
    });

    if ($("#lightgallery").length > 0) {
        $("#lightgallery").lightGallery({
            thumbnail: true,
            thumbWidth: 215
        });
    }

    var mobileRecombine = false;
    $(window).resize(()=> {
        if (!mobileRecombine) {
            resizeCombine();
            mobileRecombine = true;
        }
    });

    if ($(window).width() < 1160 && !mobileRecombine) {
        resizeCombine();
        mobileRecombine = true;
    }

    // recombine elems at page
    function resizeCombine() {
        // responsive blocks order
        $('.page-card_regular2').insertBefore(".page-card_regular4");
        $('.page-card_regular4').insertBefore(".page-card_regular2");
        // footer
        $(".footer__search").insertBefore(".footer__contacts");
        $(".footer__contacts").insertAfter(".footer-wrap");

        var owlContacts = $(".owl-contacts-mobile").owlCarousel({
            loop: true,
            items: 1
        });
        $(document).on('click', '.owl-contacts-left', ()=> {
            owlContacts.trigger('prev.owl.carousel', [300]);
        });
        $(document).on('click', '.owl-contacts-right', ()=> {
            owlContacts.trigger('next.owl.carousel', [300]);
        });

        var owlStock = $(".owl-stock-mobile-slider").owlCarousel({
            loop: true,
            items: 1
        });
        $(document).on('click', '.owl-stock-right', ()=> {
            owlStock.trigger('next.owl.carousel', [300]);
        });
        $(document).on('click', '.owl-stock-left', ()=> {
            owlStock.trigger('prev.owl.carousel', [300]);
        });

        if ($(".mCustomScrollbar").length > 0) {
            //done projects main page
            $(".mCustomScrollbar").mCustomScrollbar({
                axis: "x",
                theme: "dark"
            });
        }
    }

    //manufacture page clicks
    $(document).on('click', '.js-table-show-all', (event)=> {
        var regular = 'Показать всю продукцию', active = 'Скрыть';
        var $this = event.target;
        $($this).toggleClass("active");
        if ($($this).hasClass('active')) {
            $($this).text(active);
        } else {
            $($this).text(regular);
        }
        $($($this)[0]).closest(".manufacture__table").find(".manufacture-table__table").toggleClass("active")
    });

    $(document).on('onfocus', '.js-table-drop', (event)=> {
    });

    $('.js-table-drop').hover((event)=> {
        $(event.target).children(".manufacture-table__drop-text").fadeIn("fast");
    }, (event)=> {
        $(event.target).children(".manufacture-table__drop-text").fadeOut("fast");
    });
    // end manufacture page clicks

    //calculator

    if ($(".slider-jq").length ) {
        $(".slider-jq").slider({
            range: "min",
            max: 2200,
            animate: "fast",
            slide: function (event, ui) {
                var input = $("#" + $(this).data("input"));
                input.val(ui.value);
            }
        });

        $(document).on('keyup', '.slide-bar__banner', (event)=> {
            var $this = $(event.target);
            var attr = $this.attr("id");
            $("." + attr).slider("value", $this.val());
        });
    }
    //end calculator

    //catalog droplist
    $(document).on('click', '.js-catalog-checkbox', (event)=> {
        $(event.target).toggleClass("active");
    });

    if ($(".js-custom-catalog-scroll").length > 0) {
        //done projects main page
        $(".js-custom-catalog-scroll").mCustomScrollbar({
            axis: "y",
            theme: "catalog-scroll"
        });
    }
    //end catalog droplist


    if (window.width < 1160) {
        $(document).on("click", ".js-table-drop", (event)=> {
            $(".manufacture-table__drop-text").fadeOut("fast");
            $(event.target).children(".manufacture-table__drop-text").fadeIn("fast");
        });
    }

});