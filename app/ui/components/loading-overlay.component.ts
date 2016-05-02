namespace UI.Components {
    import IDirective = angular.IDirective;

    export class LoadingOverlayComponent implements IDirective {
        restrict = 'E';
        require = '^mdContent';
        scope = true;
        template = `
            <div style="position: relative" layout-fill>
                <ng-transclude></ng-transclude>
                <div class="loading-overlay-bg" layout="row" layout-align="center center" ng-show="loadingOverlayCtrl.visible">
                    <md-progress-circular md-mode="indeterminate"></md-progress-circular>
                </div>
            </div>
        `;
        controllerAs = 'loadingOverlayCtrl';
        bindToController = {
            visible: '='
        };
        transclude = true;
        controller = () => {};
    }
}