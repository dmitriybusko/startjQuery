$(document).ready(function () {

    $(".tabs").click(function (event) {
        $(".content").removeClass("contentActive");
        $(".tab").removeClass("tabActive");
        $(".fieldContent div."+event.target.className.split(" ")[1]).addClass("contentActive");
        $(event.target).addClass("tabActive");
    });

});