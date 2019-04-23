function autoSizeBacgroundImage() {
    $('#background').jqthumb({
        width: window.innerWidth,
        height: window.innerHeight,
        after: function (imgObj) {
            imgObj.css('opacity', 0).animate({
                opacity: 1
            }, 2000);
        }
    });
}

autoSizeBacgroundImage();

$(window).resize(function () {
    autoSizeBacgroundImage();
})



setInterval(function () {

    // alert("???");

    var imageMax = 4;
    var imageMin = 1;

    var oldUrl = "old";
    var newUrl = "new";

    do {
        var imageNumber = Math.floor(Math.random() * (imageMax - imageMin + 1) + imageMin); //向下取整
        oldUrl = $('#background').attr("src");
        newUrl = oldUrl.split("background")[0] + "background" + imageNumber + ".jpg";
    } while (oldUrl == newUrl);

    $('#background').attr("src", newUrl);
    autoSizeBacgroundImage();
}, 5000);