$(function() {
    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/vovabatsyk@gmail.com",
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientEemail: $('#client-tel').val(),
                clientMessage: $('#client-message').val()
            },
            dataType: "json"
        }).done(function() {
            form.reset();
            $('#message-box').html('<h2>Дякуємо!<h2>');
        }).fail(function() {
            $('#message-box').html('Sorry, error occurred!');
        });
    });
    
    function blink() {
        $('#message-box').fadeOut('fast').fadeIn('fast')
        setTimeout(blink, 100);
    }
    blink();
    
    $('.smooth').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

