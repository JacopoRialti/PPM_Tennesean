function blurBackground() {
    $('main').not('collapse').css("filter","blur(3px)");
}

function closeNavbar() {
    $('#navbarToggler').collapse('hide');

    setTimeout(function() {
        $('main').css("filter","none");
    }, 300); // 500 milliseconds = 0.5 seconds
}