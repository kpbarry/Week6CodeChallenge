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
    //AJAX POST for Contact Form START
    $('#contactContainer').on('submit', '#contactForm', function (event) {
        //Prevent default form behavior (Doesn't allow it to be submitted)
        event.preventDefault();
        //See if form is valid
        if ($(this).valid()) {
            //AJAX POST
            var urlToPostTo = $(this).attr('action');
            //Serialize to convert the form fields to a string we can pass into our $.post() function
            var dataToSend = $(this).serialize();
            $.post(urlToPostTo, dataToSend, function (data) {
                //Update the #container elements with the new HTML returned in the "data" param
                $('#contactContainer').html(data);
            });
        }
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
};