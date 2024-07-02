// fade method

// $("button").click(function(){
//     $("#box1").fadeIn();         //display :none
//     $("#box2").fadeIn("slow");
//     $("#box3").fadeIn(3000);
//   });


// $("button").click(function(){
//     $("#box1").fadeOut();
//     $("#box2").fadeOut("slow");
//     $("#box3").fadeOut(3000);
//   });

// $("button").click(function(){
//     $("#box1").fadeToggle();
//     $("#box2").fadeToggle("slow");
//     $("#box3").fadeToggle(3000);
//   });

$("button").click(function(){
    $("#box1").fadeTo("slow",0.2);
    $("#box2").fadeTo("slow",0);
    $("#box3").fadeTo("slow",0);
  });
