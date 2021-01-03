$(function() {
    $('.btn-music').on('click', event => {
        $(event.currentTarget).children().toggleClass('fa-play');
        $(event.currentTarget).children().toggleClass('fa-pause');
    })
});