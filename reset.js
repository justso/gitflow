/*jslint white:false */
/*globals window, document, console */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var Reset = (function (W, D, C) { // IIFE
    'use strict';
    var self = {
        name: 'Reset',
        construct: '(simply uncolor the background)',
    },
        Df = { // DEFAULTS
        __: self,
        btn: null,
        style: null,
        inits: function (id) {
            this.btn = D.getElementById(id || self.name);
            this.style = D.body.style;
            this.inited = true;
        },
    };

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// Utility

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    /// INTERNAL

    function _reset() {
        Df.style.backgroundColor = '';
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
        if (this.inited) {
            return;
        }
        Df.inits(id);

        bindAll();
        return Df;
    }

    self.init = _init;
    self.set = _reset;

    return self;
}(window, document, console));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*




 */
