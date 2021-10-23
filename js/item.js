$(document).ready(function(){
    $(".thumbimg").click(function(){
      $(".thumbimg").removeClass("active")
      $(this).addClass("active")
    })
  })

  function init() {
    var images = document.querySelectorAll("div.thumb img")
    for (var i = 0; i < images.length;i++)
        images[i].onclick = function() {
          var path = this.src
          var img = document.getElementById("mainImg")
          img.src = path
        }
  }