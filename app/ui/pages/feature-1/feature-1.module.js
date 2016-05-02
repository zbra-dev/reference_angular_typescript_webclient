/// <reference path="../../../../typings/browser.d.ts" />
var UI;
(function (UI) {
    var Pages;
    (function (Pages) {
        var Feature1;
        (function (Feature1) {
            angular
                .module('app.ui.pages.feature-1', [
                'app.ui.components'
            ])
                .controller('Feature1Controller', UI.Pages.Feature1.Feature1Controller)
                .directive('featureDirective1', function () { return new UI.Pages.Feature1.FeatureDirective1(); })
                .directive('featureDirective2', function () { return new UI.Pages.Feature1.FeatureDirective2(); });
        })(Feature1 = Pages.Feature1 || (Pages.Feature1 = {}));
    })(Pages = UI.Pages || (UI.Pages = {}));
})(UI || (UI = {}));
//# sourceMappingURL=feature-1.module.js.map