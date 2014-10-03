$(document).ready(function () {
    //SUPERIOR AJAX GET 
    //Use 2nd select for applying this function to any matching elements that appear on the page AT ANY TIME
    $('body').on('click', '.ajax-get', function () {
        var urlRequest = $(this).data('url');
        //Make the AJAX request
        $.get(urlRequest, function (data) {
            $('#content').html(data);
        });
    });
    //AJAX GET END

    //AJAX POST for Contact Form START
    $('#contactForm').on('submit', function (event) {
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
                $('#container').html(data);
            });
        }
    });
    //AJAX POST for Contact Form END
});