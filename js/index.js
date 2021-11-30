$(document).ready(function() {
    $("#gototop").hide()

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 1) {
            $("#header0").css({
                "position": "fixed",
                "left" :8,
                "right" :8,
                "z-index": 999,
            })
        } else {
            $("#header0").css({
                "position": "relative",
                "left" :0,
                "right" :0,
                "z-index": 999,
            })
        }
        if ($(this).scrollTop() >= 100)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
    })
    $("#gototop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })

    $("#gotobot").click(function() {
        $("html, body").animate({
            scrollTop: 1500
        }, 1000)
    })

    $("div.text p").addClass("wow animate__fadeInLeft")
    $("div.text img").addClass("wow animate__fadeInRight")


    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
})