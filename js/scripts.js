const happyBirthday = document.getElementById('happy-birthday');
const grandeTarentelle = document.getElementById('grande-tarantelle');

$(() => {
    $('.btn-music').on('click', event => {
        let currentSong = $(event.currentTarget).siblings('.music');
        let currentBar = $(event.currentTarget).siblings('.progress').children();
        $(event.currentTarget).children().toggleClass('fa-play');
        $(event.currentTarget).children().toggleClass('fa-pause');
        if ($(event.currentTarget).children().hasClass('fa-pause')) {
            currentSong.trigger('play'); 
        } else {
            currentSong.trigger('pause');
        };
        currentSong.on('timeupdate', function() {
            currentBar.attr("aria-valuenow", (this.currentTime / this.duration) * 100);
            currentBar.css("width", `${(this.currentTime / this.duration) * 100}%`);
            if (this.currentTime === this.duration) {
                $(event.currentTarget).children().toggleClass('fa-play');
                $(event.currentTarget).children().toggleClass('fa-pause');
                currentBar.attr("aria-valuenow", 0);
                currentBar.css("width", "0%");
            }
        });
    })
});

