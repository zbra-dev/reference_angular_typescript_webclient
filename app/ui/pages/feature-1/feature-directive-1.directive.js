var UI;
(function (UI) {
    var Pages;
    (function (Pages) {
        var Feature1;
        (function (Feature1) {
            var FeatureDirective1 = (function () {
                function FeatureDirective1() {
                    this.restrict = 'E';
                    this.scope = true;
                    this.template = "\n            <h1>Feature Directive 1</h1>\n        ";
                    this.controller = Controller;
                    this.controllerAs = 'featureDirective1Ctrl';
                    this.bindToController = {};
                }
                return FeatureDirective1;
            }());
            Feature1.FeatureDirective1 = FeatureDirective1;
            var Controller = (function () {
                function Controller() {
                }
                return Controller;
            }());
        })(Feature1 = Pages.Feature1 || (Pages.Feature1 = {}));
    })(Pages = UI.Pages || (UI.Pages = {}));
})(UI || (UI = {}));
//# sourceMappingURL=feature-directive-1.directive.js.map