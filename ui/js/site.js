// Cover image re-sizing options
var maxWinHeight = '1200';
var minWinHeight = '400';

// Functions
function resizeCoverImageDiv(height) {
    var notification = $('#notification-bar');
    var h = height;
    if (h >= minWinHeight) {
        h = height;
        if ( notification.length > 0 ) {
            console.log( notification );
            // Less height with the bar
            // TODO fix this yuck
            h = h - 30;
        }
    } else {
        h = minWinHeight;
    }
    $('div.img_cover').css('height', h);
}

function replaceBackgroundImage(size) {
    var sml = 320;
    var med = 760;
    var lrg = 1000;
    if (size > sml && size <= med) { // use the medium image
        $('div.img_cover').css('background-image', 'url(' + img_med + ')');
    } else if (size > med && size <= lrg) { // use the large image
        $('div.img_cover').css('background-image', 'url(' + img_lrg + ')');
    } else if (size > lrg) { // use the extra-large image
        $('div.img_cover').css('background-image', 'url(' + img_xlg + ')');
    }
}

$(document).ready(function() {
    // Initialize the fancy footnote plugin
    var bigfoot = $.bigfoot({
        positionContent: true,
        actionOriginalFN: "ignore"
    });
    // Check for cover or inline image data
    if (img_opt !== '') {
        if (img_opt === 'cover') { // Resize cover image
            var windowH = $(window).height();
            // Resize the cover image, if there is one and if on mobile
            if (windowH <= maxWinHeight) {
                resizeCoverImageDiv(windowH);
            }
            var windowW = $(window).width();
            replaceBackgroundImage(windowW);
        }
    }
});

$(window).resize(function() {
    var windowH = $(window).height();
    var windowW = $(window).width();
    if (windowH <= maxWinHeight) { // Update cover image
        resizeCoverImageDiv(windowH);
    }
    replaceBackgroundImage(windowW);
});

// Hide Disqus *after* it loads, 
// because otherwise the height is wrong
$(window).bind("load", function() {
    $('.collapse').collapse();
});
