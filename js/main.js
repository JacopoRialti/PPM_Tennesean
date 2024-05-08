function blurBackground() {
    $('main').not('collapse').css("filter","blur(3px)");
}

function closeNavbar() {
    $('#navbarToggler').collapse('hide');

    setTimeout(function() {
        $('main').css("filter","none");
    }, 300); // 500 milliseconds = 0.5 seconds
}
$(document).ready(function() {
    var currentRow = 1;
    var totalRows = 3; // Update this to match the number of rows

    $('.showMoreThumb').click(function() {
        // Hide the current row

        // Show the next row
        currentRow++;
        if (currentRow <= totalRows) {
            $('#row' + currentRow).collapse('show');
        }
        if (currentRow > totalRows) {
            $(this).prop('disabled', true);
        } else {
            // If there are more rows, remove the button
            $(this).remove();
        }
    });
});

