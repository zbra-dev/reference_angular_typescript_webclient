/// <reference path="../../../../typings/browser.d.ts" />

namespace UI.Pages.Feature1 {
    angular
        .module('app.ui.pages.feature-1', [
            'app.ui.components'
        ])
        .controller('Feature1Controller', UI.Pages.Feature1.Feature1Controller)
        .directive('featureDirective1', () => new UI.Pages.Feature1.FeatureDirective1())
        .directive('featureDirective2', () => new UI.Pages.Feature1.FeatureDirective2());
}