var Rectsngle = /** @class */ (function () {
    function Rectsngle(w, h) {
        this._width = w;
        this._height = h;
    }
    Object.defineProperty(Rectsngle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value <= 0)
                this._width = 1;
            else
                this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectsngle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (value <= 0)
                this._height = 1;
            else
                this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Rectsngle.prototype.calcArea = function () {
        return this._height * this._width;
    };
    return Rectsngle;
}());
console.log('drgdsrg');
