$(document).ready(function () {

    $(".news").click(function () {
        $(".content").removeClass("contentActive");
        $(".tab").removeClass("tabActive");
        $("p.news").addClass("contentActive");
        $("div.news").addClass("tabActive");
    });

    $(".weather").click(function () {
        $(".content").removeClass("contentActive");
        $(".tab").removeClass("tabActive");
        $("p.weather").addClass("contentActive");
        $("div.weather").addClass("tabActive");
    });


 

});