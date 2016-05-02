var UI;
(function (UI) {
    var Pages;
    (function (Pages) {
        var Feature1;
        (function (Feature1) {
            var FeatureDirective2 = (function () {
                function FeatureDirective2() {
                    this.restrict = 'E';
                    this.scope = true;
                    this.template = "\n            <h1>Feature Directive 2</h1>\n        ";
                    this.controller = Controller;
                    this.controllerAs = 'featureDirective2Ctrl';
                    this.bindToController = {};
                }
                return FeatureDirective2;
            }());
            Feature1.FeatureDirective2 = FeatureDirective2;
            var Controller = (function () {
                function Controller() {
                }
                return Controller;
            }());
        })(Feature1 = Pages.Feature1 || (Pages.Feature1 = {}));
    })(Pages = UI.Pages || (UI.Pages = {}));
})(UI || (UI = {}));
//# sourceMappingURL=feature-directive-2.directive.js.map