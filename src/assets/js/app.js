var hostEmail = 'vlad.trishch@gmail.com'
/**********************************/


$(document).foundation();

$(document).ready(function () {

    setupCookieBar();
    
    /*$('header ul').on('click', 'a', function (e) {
        e.preventDefault();
    });
    
    $('header ul').on('click', 'li', function (e) {
        $('header img').addClass('spinner');
        var th = $(this);
        th.parent().find('li').removeClass('active');
        th.addClass('active');
        window.location = th.find('a').attr('href');
    });*/
    
});


$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var firstName = document.getElementById('contact-first-name').value
    var lastName = document.getElementById('contact-last-name').value
    var email = document.getElementById('contact-email').value
    var phone = document.getElementById('contact-phone').value
    var message = document.getElementById('contact-message').value

    if(!firstName || !lastName || !email || !phone || !message) {
        alert('Please check the form.')
    } else {
        $(this).get(0).reset()
        $.ajax({
            url: 'https://formspree.io/'+hostEmail,
            method: 'POST',
            data: {
              "First Name": firstName,
              "Last Name": lastName,
              "Email": email,
              "Phone Number": phone,
              "Message": message
            },
            dataType: 'json'
        })
        e.preventDefault()
        alert('Your message sent.')
    }
  })
})