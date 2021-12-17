$(document).ready(function() {
    $("#gototop").hide()

    $(window).scroll(function() {

        if ($(this).scrollTop() >= 100) {
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

    
    // $(".btnAdd").click(function(){
    //     var img = $("div.item > a > img").attr("src")
    //     var name = $("div.item > a > h1").html()
    //     var price = $("div.item > a > p").html()
        
    //     $(".cart-items").prepend(`
    //         <div class="cart-item">
    //             <div class="col-20">
    //                 <img src="${img}"/>
    //             </div>
    //             <div class="col-20">
    //                 <p>Name:</p>
    //                 <span>${name}</span>
    //             </div>
    //             <div class="col-20">
    //                 <p>Price:</p>
    //                 <span>${price}</span>
    //             </div>
    //             <div class="col-20">
    //                 <input type="button" value="Delete">
    //             </div>
    //         </div>
    //     `)
    // })

    $("div.cart-items").on("click", "div.cart-item > div > input[type=button]", function(){
        $(this).parent().parent().remove()
    })

})
function init(){
    var popIn = function(){
        const btnAdd = document.querySelectorAll('.btnAdd');
        for(let i = 0;i < btnAdd.length;i++){
            btnAdd[i].addEventListener('click',function(){
                pushIt(i);
            });
        }
        function pushIt(i){
            var item = document.querySelectorAll('div.item')[i];
            var img = item.querySelector('a > img').getAttribute('src');
            var name = item.querySelector('a > h1').innerText;
            var price = item.querySelector('a > p').innerText;

            var cartItem = function(img, name, price){
                var itemWrap = document.createElement('div');
                itemWrap.classList.add('cart-item');
                itemWrap.innerHTML = 
                `
                <div class = "col-20">
                    <img src = "${img}"/>
                </div>
                <div class="col-20">
                    <p>Name:</p>
                    <span>${name}</span>
                </div>
                <div class="col-20">
                    <p>Price:</p>
                    <span>${price}</span>
                </div>
                <div class = "col-20">
                    <input type="button" value="Delete">
                </div>
                `;
                return itemWrap;
            }(img, name, price);
            document.querySelector('.cart-items').prepend(cartItem);
        }
    }();
    var deLete = document.querySelectorAll('div.cart-item > div > input[type=button]')
    for (var i = 0;i < deLete.length;i++){
        deLete[i].addEventListener('click', function () {
            document.getElementsByClassName('cart-item').remove();
        })
    }
}


