$(document).ready(function(){
    $('.first .point_drag').slider({
        range: "min",
        min: 1,
        max: 12,
        value: 12,
        slide: function(e,u){
            $('.first .num').text(u.value);
            $('.big_circle span').text(u.value);
        }
    })
    $('.second .point_drag').slider({
        range: "min",
        min: 1,
        max: 12,
        value: 6,
        slide: function(e,u){
            $('.second .num').text(u.value);
            $('.middle_circle span').text(u.value);
        }
    })
    $('.third .point_drag').slider({
        range: "min",
        min: 1,
        max: 12,
        value: 3,
        slide: function(e,u){
            $('.third .num').text(u.value);
            $('.small_circle span').text(u.value);
        }
    })
    $('.first .num').text($('.first .point_drag').slider('value'));
    $('.second .num').text($('.second .point_drag').slider('value'));
    $('.third .num').text($('.third .point_drag').slider('value'));
})