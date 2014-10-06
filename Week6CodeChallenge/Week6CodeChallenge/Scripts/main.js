$(document).ready(function () {
    //Load in view for /Home/HomePage to site
    $.get('/Home/HomePage', function (data) {
        $('#content').html(data);
    });

    //Ajax get for navigation links
    $('.navLinks').on('click', '.ajax-get', function () {
        $.get($(this).data('url'), function (data) {
            $('#content').html(data);
        });
    });

    //Ajax get for changing tabs
    $('.tabsList').on('click', '.tabid', function () {
        $.get($(this).data('url'), function (data) {
            $('#tabContent').html(data);
        });
    });
});

//Load the first tab into the about page
var loadFirstTab = function () {
    $.get('/About/Who', function (data) {
        $('#tabContent').html(data);
    });

    $('.tabsList').on('click', '.tabid', function () {
        $.get($(this).data('url'), function (data) {
            $('#tabContent').html(data);
        });
    });
}