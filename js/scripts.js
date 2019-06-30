

$("video").each(function(){
    var player = videojs(this)

    $(this).parents("#accordion").find(".rewindbtn").click(function(){
    event.preventDefault();
    var time = player.currentTime();
    player.currentTime(time-10);
    
});

$(this).parents("#accordion").find(".playbtn").click(function(){
    event.preventDefault();
    
    if(!player.paused()){
        player.pause();
        
$(this).parents("#accordion").find(".playbtn").html("play");
    } else {
        player.play();
        
$(this).parents("#accordion").find(".playbtn").html("pause");

    }
});


$(this).parents("#accordion").find("#donebutton1").click(function(){
    event.preventDefault();

    $(this).parents("#accordion").find("#donemark1").addClass("showmark");
    

});

$(this).parents("#accordion").find("#donebutton2").click(function(){
    event.preventDefault();

    $(this).parents("#accordion").find("#donemark2").addClass("showmark");
    

});
$(this).parents("#accordion").find("#donebutton3").click(function(){
    event.preventDefault();

    $(this).parents("#accordion").find("#donemark3").addClass("showmark");
    

});
$(this).parents("#accordion").find("#donebutton4").click(function(){
    event.preventDefault();

    $(this).parents("#accordion").find("#donemark4").addClass("showmark");
    

});
$(this).parents("#accordion").find("#donebutton5").click(function(){
    event.preventDefault();

    $(this).parents("#accordion").find("#donemark5").addClass("showmark");
    

});



$(this).parents("#accordion").find(".donebutton").click(function(){
    event.preventDefault();

    $(".modal").addClass("modalvisible");
    

});


})




$(".exit").click(function(){
    $(".modal").removeClass("modalvisible");
});
$(document).ready(function() {
        $( "#accordion" ).accordion();

        
  $(".light").click(function(){
    $(".light").addClass("hide");
    $(".dark").addClass("show");
    //dark
$("body").addClass("darkmode");
$("h1").addClass("darkmodetext");
$("h2").addClass("darkmodetext");
$("h3").addClass("darkmodetext");
$("h4").addClass("darkmodetext");
$("h5").addClass("darkmodetext");
$("a").addClass("darkmodetext");
$("#accordionwrapper").addClass("darkmode");
$("#accordion").addClass("darkmode");
$("header").addClass("darkmode");








  })


  $(".dark").click(function(){
    $(".dark").removeClass("show");
    $(".light").removeClass("hide");
//light
$("body").removeClass("darkmode");
$("h1").removeClass("darkmodetext");
$("h2").removeClass("darkmodetext");
$("h3").removeClass("darkmodetext");
$("h4").removeClass("darkmodetext");
$("h5").removeClass("darkmodetext");
$("a").removeClass("darkmodetext");
$("#accordionwrapper").removeClass("darkmode");
$("#accordion").removeClass("darkmode");
$("header").removeClass("darkmode");

  })


});






   $("video").hover(function(){
    $(".player-btn").addClass("showbutton");
    }, function(){
        $(".player-btn").removeClass("showbutton");
  });
   
  $(".player-btn").hover(function(){
    $(".player-btn").addClass("showbutton");

    }, function(){
        $(".player-btn").removeClass("showbutton");
     
  });


