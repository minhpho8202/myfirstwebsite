$(document).ready(function(){
    $(".thumbimg").click(function(){
      $(".thumbimg").removeClass("active")
      $(this).addClass("active")
    })

    $("div.output").on("click", "div.deleteBtn > input[type=button]", function(){
      $(this).parent().parent().remove()
  })

  })
  function init() {
    var images = document.querySelectorAll("div.thumb img")
    for (var i = 0; i < images.length;i++)
      {
        images[i].onclick = function() {
          var path = this.src
          var img = document.getElementById("mainImg")
          img.src = path
        }
      }

      var checkBtn = document.querySelector('#checkBtn')
      checkBtn.addEventListener('click', function(){
        var a = document.getElementById("chieuCao").value
          var b = document.getElementById("canNang").value
          a = parseFloat(a)
          b = parseFloat(b)
      
          if (a < 165 && b <= 55)
            alert("Size 0")
          else 
            if (a >= 165 && b < 55)
              alert("Size 1")
            
            else 
              if (a >= 165 && a < 172 && b < 65)
                alert("Size 2")
              
              else 
                if (a >= 170 && a < 177 && b < 80)
                  alert("Size 3")
                
                else
                  if (a > 172 && b < 100)
                    alert("Size 4")
              })
    var openBtn = document.querySelector('.open')
    var closeBtn = document.querySelector('.close')
    var modal = document.querySelector('.modal')
    
    function toggleModal() {
        modal.classList.toggle('hide')
    }

    openBtn.addEventListener('click', toggleModal)
    closeBtn.addEventListener('click', toggleModal)

    var sendBtn = document.querySelector('#send')
    sendBtn.addEventListener('click', function(){
      var name = document.querySelector('#name').value
      var texts = document.querySelector('#texts').value
      var feedback = document.querySelector('.output')
      var itemWrap = document.createElement('div');
      itemWrap.classList.add('content');
      itemWrap.innerHTML = `
      <div class="user"><p>Name:</p>
            <p>${name}</p></div>
            <div class="words"><p>Feedback:</p>
              <p>${texts}</p></div>
            </div>
            <div class="deleteBtn"><input type="button" value="Delete"></div>
      `
      console.log(itemWrap)
      document.querySelector('.output').prepend(itemWrap);
    })
}



        
