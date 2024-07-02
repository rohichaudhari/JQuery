$(function(){
    $(".navbar").click(function(){
        $(".box").slideToggle(1000)
    })
})

$(function(){
    $("button").click(function(){
        $(".box").stop()
    })
})
