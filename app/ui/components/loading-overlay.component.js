var UI;
(function (UI) {
    var Components;
    (function (Components) {
        var LoadingOverlayComponent = (function () {
            function LoadingOverlayComponent() {
                this.restrict = 'E';
                this.require = '^mdContent';
                this.scope = true;
                this.template = "\n            <div style=\"position: relative\" layout-fill>\n                <ng-transclude></ng-transclude>\n                <div class=\"loading-overlay-bg\" layout=\"row\" layout-align=\"center center\" ng-show=\"loadingOverlayCtrl.visible\">\n                    <md-progress-circular md-mode=\"indeterminate\"></md-progress-circular>\n                </div>\n            </div>\n        ";
                this.controllerAs = 'loadingOverlayCtrl';
                this.bindToController = {
                    visible: '='
                };
                this.transclude = true;
                this.controller = function () { };
            }
            return LoadingOverlayComponent;
        }());
        Components.LoadingOverlayComponent = LoadingOverlayComponent;
    })(Components = UI.Components || (UI.Components = {}));
})(UI || (UI = {}));
//# sourceMappingURL=loading-overlay.component.js.map