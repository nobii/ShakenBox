var ShakenBox = function ($el, opts) {
    this.$el = $el;

    this.maxIntensity = opts.maxIntensity || 30;

    this.initEl();
    this.initIntensity();
    this.initListener();
};

ShakenBox.prototype.initEl = function () {
    var $el = this.$el;

    $el.css({
        transform: 'none'
    });
};

ShakenBox.prototype.initListener = function () {
    var self = this,
        $el = this.$el;

    $el.on('mouseover', function () {
        self.shaking = true;
    });

    $el.on('mouseout', function () {
        self.shaking = false;
        self.initEl();
        self.initIntensity();
    });
};

ShakenBox.prototype.initIntensity = function () {
    this.intensity = 0;
};

ShakenBox.prototype.incrementIntensity = function () {
    this.intensity = Math.min(this.maxIntensity, this.intensity + 1);;
};

ShakenBox.prototype.update = function () {
    if (!this.shaking) {
        return;
    }

    var intensity = this.intensity,

        widthRand = intensity / 100,
        heightRand = intensity / 100,
        rotateRand = intensity / 10;

    this.$el.css({
        'transform': [
            'scale(' + (
                1 + 2 * widthRand * Math.random() - widthRand
            ) + ', ' + (
                1 + 2 * heightRand * Math.random() - heightRand
            ) + ')',
            'rotate(' + (2 * rotateRand * Math.random() - rotateRand) + 'deg)'
        ].join(' ')
    });

    this.incrementIntensity();
};