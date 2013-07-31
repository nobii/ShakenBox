var Ticker = function (clock) {
    this.clock = clock;
    this.emitter = $('<div />');

    this.initInterval();
};

Ticker.prototype.initInterval = function () {
    var self = this;
    this.timer = setInterval(function () {
        self.trigger('tick');
    }, this.clock);
};

Ticker.prototype.on = function () {
    this.emitter.on.apply(this.emitter, arguments);
};

Ticker.prototype.trigger = function () {
    this.emitter.trigger.apply(this.emitter, arguments);
};