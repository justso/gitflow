/*jslint white:false */
/*globals window, document, console */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var Colorize = (function (W, D, C) { // IIFE
    'use strict';
    var self = {
        name: 'Colorize',
        construct: '(silly lil colorizing helper)',
    },
        Df = { // DEFAULTS
        __: self,
        btn: null,
        bkg: null,
        old: null,
        colors: 'red blue pink yellow green',
        inits: function (id) {
            if (this.inited) {
                return;
            }

            self.colors = this.colors.split(' ');

            this.btn = W.document.getElementById(id || self.name);
            this.bst = W.document.body.style;
            this.inited = true;
        },
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// Utility

    function randomizer() {
        var num = Math.random() * self.colors.length;

        return Math.floor(num);
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function _getColor() {
        return self.colors[randomizer()];
    }

    function _setColor(clr) {
        var neo = clr || _getColor();
        var old = Df.old;

        while (neo === old) {
            C.log('oops');
            neo = _setColor();
        }
        Df.bst.backgroundColor = Df.old = neo;
        return neo;
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// BIND

    function bindAll() {
        Df.btn.onclick = function () {
            self.set();
        };
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INVOKE

    function _init(id) {
        Df.inits(id);

        return Df;
    }

    self.init = _init;
    self.get = _getColor;
    self.set = _setColor;

    return self;
}(window, document, console));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*




 */
