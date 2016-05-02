namespace UI.Pages.Feature1 {

    import IDirective = angular.IDirective;
    
    export class FeatureDirective1 implements IDirective {
        restrict = 'E';
        scope = true;
        template = `
            <h1>Feature Directive 1</h1>
        `;
        controller = Controller;
        controllerAs = 'featureDirective1Ctrl';
        bindToController = { };
    }

    class Controller {
        // interesting controller stuff here... 
    }
}