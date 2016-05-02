/// <reference path="../../../typings/browser.d.ts" />

namespace UI.Components {
    angular
        .module('xom-webclient.components', [])
        .directive('loadingOverlay', () => new UI.Components.LoadingOverlayComponent());
}