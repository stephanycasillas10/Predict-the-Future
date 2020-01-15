$("button").click(function(){
    var name = $(".1").val();
    var dessert = $(".2").val();
    var times = $(".3").val();
    $(".outcome").text(name +", by the year 2040 you will have eaten " + dessert + ' ' + (Number(times) * 1040) + " times" );
});