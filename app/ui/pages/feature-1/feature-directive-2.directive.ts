namespace UI.Pages.Feature1 {
    import IDirective = angular.IDirective;

    export class FeatureDirective2 implements IDirective {
        restrict = 'E';
        scope = true;
        template = `
            <h1>Feature Directive 2</h1>
        `;
        controller = Controller;
        controllerAs = 'featureDirective2Ctrl';
        bindToController = { };
    }

    class Controller {
        // interesting controller stuff here...
    }
}