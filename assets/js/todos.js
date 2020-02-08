$("ul").on("click","li", function(){
if ($(this).css("color")=="rgb(128, 128, 128)"){
    $(this).css("color","black");
    $(this).css("text-decoration","none");
}
else
{
    $(this).css("color","grey");
    $(this).css("text-decoration","line-through");             
}
});
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function(){$(this).remove()});
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which==13){
        var newTask=$(this).val();
        $(this).val("");
        $("ul").append("<li><span>Delete </span>"+newTask+"</li>");
    }
})
$("h1").click(function(){
    $("input[type='text']").fadeToggle();
});