$(function () {
    var ticker = new Ticker(50);

    $('article').each(function () {
        var shakenBox = new ShakenBox($(this), {
            width: 300,
            height: 300
        });
        ticker.on('tick', function () {
            shakenBox.update();
        });
    });
});