var app = {
    weeks: { 0: '星期日', 1: '星期一', 2: '星期二', 3: '星期三', 4: '星期四', 5: '星期五', 6: '星期六' },
    clock: null,
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.initClock.call(this);
        this.initDate.call(this);
        document.addEventListener("pause", this.onPause.bind(this), false);
        document.addEventListener("resume", this.resume.bind(this), false);
    },

    resume: function () {
        this.initClock.call(this);
        this.initDate.call(this);
    },

    onPause: function () {
        this.clock.stop();
    },

    initDate: function () {
        var now = new Date();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        var dateStr = now.getFullYear() + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d) + ' ' + this.weeks[now.getDay()];
        $('.date').text(dateStr);
    },

    initClock: function () {
        this.clock = $('.clock').FlipClock({
            clockFace: 'TwentyFourHourClock'
        });
    },

};

app.initialize();