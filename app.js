.side-nav.visible {
    display: block;
}
$(document).ready(function() {
    $('.nav-trigger').click(function() {
        $('.side-nav').toggleClass('visible');
    });
});