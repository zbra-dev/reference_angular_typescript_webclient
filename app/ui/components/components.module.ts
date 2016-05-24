/// <reference path="../../../typings/index.d.ts" />

namespace UI.Components {
    angular
        .module('app.ui.components', [])
        .directive('loadingOverlay', () => new UI.Components.LoadingOverlayComponent());
}