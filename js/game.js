$(document).ready(function(){

    $("body").click(function(){
            $("#character").addClass("avtive")
        setTimeout(function(){
            $("#character").removeClass("avtive")
        },700);
    })
    var character = document.getElementById("character");
    var block = document.getElementById("block");
        
        var checkDead = setInterval(function() {
            var characterTop = parseInt(getComputedStyle(character).getPropertyValue("top"));
            var blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
            if (blockLeft < 80 && blockLeft > 0 && characterTop >= 50) {
                block.style.animation = "none";
                block.style.display = "none";
                alert("u lose");
            }
        },10);
})


