/// <reference path="../../../typings/browser.d.ts" />

namespace UI.Components {
    angular
        .module('app.ui.components', [])
        .directive('loadingOverlay', () => new UI.Components.LoadingOverlayComponent());
}