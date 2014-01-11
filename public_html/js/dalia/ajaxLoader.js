function loadAjax(pageName) {
    $("#ajaxDiv").fadeOut(500);
    $("#ajaxLoader").fadeIn(50);
    $("#ajaxDiv")
            .load("./ajax/" + pageName + ".html", function() {
        $("#ajaxLoader").fadeOut(250);
        $("#ajaxDiv").fadeIn(500);
    });
}