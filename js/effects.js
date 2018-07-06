/*global $:false, Spinner: false */
/*jslint white: true */
var spinner;
$(document).ready(function () {
    "use strict";
    var target = document.getElementById('spinner'),
        opts = {
            lines: 13 // The number of lines to draw
            ,length: 28 // The length of each line
            ,width: 14 // The line thickness
            ,radius: 42 // The radius of the inner circle
            ,scale: 0.5 // Scales overall size of the spinner
            ,corners: 1 // Corner roundness (0..1)
            ,color: '#fff' // #rgb or #rrggbb or array of colors
            ,background: '#000'
            ,opacity: 0.25 // Opacity of the lines
            ,rotate: 0 // The rotation offset
            ,direction: 1 // 1: clockwise, -1: counterclockwise
            ,speed: 1 // Rounds per second
            ,trail: 60 // Afterglow percentage
            ,fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            ,zIndex: 2e9 // The z-index (defaults to 2000000000)
            ,className: 'spinner' // The CSS class to assign to the spinner
            ,top: '50%' // Top position relative to parent
            ,left: '50%' // Left position relative to parent
            ,shadow: false // Whether to render a shadow
            ,hwaccel: false // Whether to use hardware acceleration
            ,position: 'absolute' // Element positioning
        };
    spinner = new Spinner(opts).spin(target);

    $('a').attr("target", "_blank");

    $('nav').delay(400).animate({top: "0px"}, 500);
    $('nav').delay(0).effect("bounce", {times: 4}, 1000);
    $('ul.menu').delay(1000).removeClass("hide");


    $('ul.menu li').click(function () {
        var w = $(window).width();
        if (w < 769) {
            $('ul.menu').slideToggle();
        }
    });

    $('#pull').click(function (e) {
        e.preventDefault();
        $('ul.menu').slideToggle();
    });


    $(window).resize(function () {
        var w = $(window).width(),
            menu = $('ul.menu');
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });


// Set windows width on after load
    /*

     function resizeFrame() {
     var newHeight = $(window).height(),
     newWidth = $(window).width();
     }
     jQuery.event.add(window, "resize", resizeFrame);

     */

    function scrollToAnchor(aid, div) {
        var aTag = $("#" + aid);
        $('html,body').animate({scrollTop: aTag.offset().top - div}, 1500);

    }

    $("#port").click(function (event) {
        event.preventDefault();
        scrollToAnchor('poligrafia', 80);
    });

    $("#home").click(function (event) {
        event.preventDefault();
        scrollToAnchor('wrapper', 0);
    });


    $("#www").click(function (event) {
        event.preventDefault();
        scrollToAnchor('web', 80);
    });

    $("#contact").click(function (event) {
        event.preventDefault();
        scrollToAnchor('footer', 0);
    });
    $("#oferta-m").click(function (event) {
        event.preventDefault();
        scrollToAnchor('oferta', 80);
    });


    $('.item').hover(
        function () {
            var current = '#' + this.id + ' a';

            $(current).slideDown(500);
            $(current).delay(500).css('opacity', '0.9');
        },
        function () {
            var current = '#' + this.id + ' a';
            $(current).slideUp(300);
        }
    );
});

$(window).load(function () {
    "use strict";
    spinner.stop();
});
