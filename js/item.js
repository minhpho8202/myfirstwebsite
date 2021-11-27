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

  function sizeCheck() {
    var a = document.getElementById("chieuCao").value
    var b = document.getElementById("canNang").value
    a = parseFloat(a)
    b = parseFloat(b)

    if (a < 165 && b <= 55){
      alert("Size 0")
    }
    else {
      if (a >= 165 && b < 55){
        alert("Size 1")
      }
      else {
        if (a >= 165 && a < 172 && b < 65){
          alert("Size 2")
        }
        else {
          if (a >= 170 && a < 177 && b < 80){
            alert("Size 3")
          }
          else {
            if (a > 172 && b < 100){
              alert("Size 4")
            }
          }
        }
      }
    }
  }


        
