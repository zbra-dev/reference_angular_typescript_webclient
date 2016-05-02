/// <reference path="../../../typings/browser.d.ts" />
var UI;
(function (UI) {
    var Components;
    (function (Components) {
        angular
            .module('xom-webclient.components', [])
            .directive('loadingOverlay', function () { return new UI.Components.LoadingOverlayComponent(); });
    })(Components = UI.Components || (UI.Components = {}));
})(UI || (UI = {}));
//# sourceMappingURL=components.module.js.map