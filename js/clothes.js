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

    $("div.items > div.item:nth-child(even)").addClass("wow animate__fadeInTopRight")
    $("div.items > div.item:nth-child(odd)").addClass("wow animate__fadeInTopLeft")

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

    
    $(".btnAdd").click(function(){
        var img = $("div.item > a > img").attr("src")
        var name = $("div.item > a > h1").html()
        var price = $("div.item > a > p").html()
        
        $(".cart-items").prepend(`
            <div class="cart-item">
                <div class="col-20">
                    <img src="${img}"/>
                </div>
                <div class="col-20">
                    <p>Name:</p>
                    <span>${name}</span>
                </div>
                <div class="col-20">
                    <p>Price:</p>
                    <span>${price}</span>
                </div>
                <div class="col-20">
                    <input type="button" value="Delete">
                </div>
            </div>
        `)
    })

    $("div.cart-items").on("click", "div.cart-item > div > input[type=button]", function(){
        $(this).parent().parent().remove()
    })

})


