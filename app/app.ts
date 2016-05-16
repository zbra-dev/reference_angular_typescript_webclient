/// <reference path="../typings/browser.d.ts"/>

namespace App {
    import Config = App.Config;
    import Paths = App.Routes;
    import IIconProvider = angular.material.IIconProvider;
    import IHttpService = angular.IHttpService;
    import ITemplateCacheService = angular.ITemplateCacheService;
    import IThemingProvider = angular.material.IThemingProvider;
    import ITranslateProvider = angular.translate.ITranslateProvider;
    import IRouteProvider = angular.route.IRouteProvider;

    const SVG_ICON_PACK_URL = 'assets/images/icons.svg';

    angular
        .module('app', [
            // Libraries
            'ngRoute',
            'ngAria',
            'ngMessages',
            'ngMaterial',
            'pascalprecht.translate',

            // UI
            'app.ui.components',
            'app.ui.mediators',
            'app.ui.pages.feature-1',

            // Other
            'app.services',
            'app.repository',
        ])
        .config(route_)
        .config(theme_)
        .config(translate_)
        .config(icon_)
        .run(cache_);

    route_.$inject = ['$routeProvider'];
    function route_($routeProvider: IRouteProvider) {
        $routeProvider
            .when(Routes.Home.template(), {
                templateUrl: 'ui/pages/feature-1/feature-1.html',
                controller: 'Feature1Controller',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: Routes.Home.template()
            });
    }

    translate_.$inject = ['$translateProvider'];
    function translate_($translateProvider: ITranslateProvider) {
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.preferredLanguage('en-us');
    }

    theme_.$inject = ['$mdThemingProvider'];
    function theme_($mdThemingProvider: IThemingProvider) {
        let customLime = $mdThemingProvider.extendPalette('lime', {
            'A200' : 'dddc00'
        });

        $mdThemingProvider
            .definePalette('customLime', customLime);
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('customLime', { 'default': 'A200' })
            .warnPalette('red', { 'default': '500' });
    }

    icon_.$inject = ['$mdIconProvider'];
    function icon_($mdIconProvider: IIconProvider) {
        $mdIconProvider.iconSet('core', SVG_ICON_PACK_URL, 24);
    }

    cache_.$inject = ['$http', '$templateCache'];
    function cache_($http: IHttpService, $templateCache: ITemplateCacheService) {
        $http.get(SVG_ICON_PACK_URL, { cache: $templateCache });
    }
}
