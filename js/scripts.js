const username = "Student";
const password = "Suzuki";

$(function() {
    $('.btn-music').on('click', function(event) {
        var song = $(event.currentTarget).siblings('.music');
        var currentBar = $(event.currentTarget).siblings('.progress').children();
        $(event.currentTarget).children().toggleClass('fa-play');
        $(event.currentTarget).children().toggleClass('fa-pause');
        if ($(event.currentTarget).children().hasClass('fa-pause')) {
            song.trigger('play');
        } else {
            song.trigger('pause');
        };
        song.on('timeupdate', function () {
            currentBar.attr("aria-valuenow", (this.currentTime / this.duration) * 100 + '%');
            currentBar.css("width", (this.currentTime / this.duration) * 100 + '%');
            if (this.currentTime === this.duration) {
                $(event.currentTarget).children().toggleClass('fa-play');
                $(event.currentTarget).children().toggleClass('fa-pause');
                currentBar.attr("aria-valuenow", 0);
                currentBar.css("width", "0%");
            }
        });
    });
    $('#student-form').on('submit', function() {
        if ($('#username').val() == username && $('#password').val() == password) {
            $('#student-links').css('display', 'block');
            $('.login-card').css('display', 'none')
            return false;
        } else {
            alert("An incorrect username or password was entered.");
        };
    });
});