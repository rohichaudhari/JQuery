// $(function(){
//    var a= $("#box").html(); //return text with tag
//    alert(a)
// })

// $(function(){
//     var a= $("#box").text();
//     alert(a)
//  })

// $(function(){
//     var a= $("#box").attr('class');
//     alert(a)
//  })

// $(function(){
//   $("button").click(function(){
//     alert($("input").val())
//   })
// })

// $(function(){
//   $("button").click(function(){
//     $("p").before("hello world")
//     $("p").after("hello world")
//   })
// })

$(function(){
  $("button").click(function(){
    $("p").append("hello world")
    $("p").prepend("hello world")
  })
})
