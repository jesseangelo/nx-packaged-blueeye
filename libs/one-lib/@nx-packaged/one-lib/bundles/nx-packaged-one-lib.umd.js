(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@nx-packaged/one-lib', ['exports'], factory) :
    (global = global || self, factory((global['nx-packaged'] = global['nx-packaged'] || {}, global['nx-packaged']['one-lib'] = {})));
}(this, (function (exports) { 'use strict';

    var OneLib = /** @class */ (function () {
        function OneLib() {
        }
        OneLib.prototype.foo = function () {
            return "bar";
        };
        return OneLib;
    }());

    exports.OneLib = OneLib;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nx-packaged-one-lib.umd.js.map
