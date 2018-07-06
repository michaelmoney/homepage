/*global $, alert, console:false */
$(document).ready(function () {
    "use strict";

    function clearFields() {

        $('input[name="lastname"]').attr('value', '');
        $('input[name="email"]').attr('value', '');
        $('textarea[name="message"]').attr('value', '');
    }

    $('a.button').click(function (e) {
        var form = $("#contact-form"),
            lastname = $('input[name="lastname"]').val(),
            email = $('input[name="email"]').val(),
            message = $('textarea[name="message"]').val();
        e.preventDefault();

        $('#contact-form').validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                lastname: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: "Please enter your e-mail",
                    email: "This is not correct e-mail"
                },
                lastname: {
                    required: "Please enter your name"
                },
                message: {
                    required: "Please enter your message"
                }
            }
        });

        form.validate();

        if (form.valid()) {
            $.ajax({
                url: 'send/send.php',
                type: "POST",
                data: ({
                    lastname: lastname,
                    email: email,
                    message: message
                }),
                success: function () {
                    alert('Your message has been sent. I will contact you soon.');
                    clearFields();
                },
                error: function (err) {
                    alert('Sorry, the message couldn\'t be send. Please try later.');
                    console.warn('Error occured! ', err);
                    clearFields();
                }
            });
        }
    });
});