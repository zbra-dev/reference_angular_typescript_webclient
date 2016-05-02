/// <reference path="../typings/browser.d.ts"/>
var App;
(function (App) {
    var SVG_ICON_PACK_URL = '/assets/images/icons.svg';
    angular
        .module('app', [
        // Libraries
        'ngRoute',
        'ngAria',
        'ngMessages',
        'ngMaterial',
        'ngWebSocket',
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
    function route_($routeProvider) {
        $routeProvider
            .when(App.Routes.Home.template(), {
            templateUrl: 'pages/home/home.html',
            controller: 'HomeController',
            controllerAs: 'ctrl'
        })
            .when(App.Routes.UserEdit.template(), {
            templateUrl: 'pages/user-edit/user-edit.html',
            controller: 'UserEditController',
            controllerAs: 'ctrl'
        })
            .otherwise({
            redirectTo: App.Routes.Home.template()
        });
    }
    translate_.$inject = ['$translateProvider'];
    function translate_($translateProvider) {
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.preferredLanguage('en-us');
    }
    theme_.$inject = ['$mdThemingProvider'];
    function theme_($mdThemingProvider) {
        var bilfingerLime = $mdThemingProvider.extendPalette('lime', {
            'A200': 'dddc00'
        });
        $mdThemingProvider
            .definePalette('bilfingerLime', bilfingerLime);
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue')
            .accentPalette('bilfingerLime', { 'default': 'A200' })
            .warnPalette('red', { 'default': '500' });
    }
    icon_.$inject = ['$mdIconProvider'];
    function icon_($mdIconProvider) {
        $mdIconProvider.iconSet('core', SVG_ICON_PACK_URL, 24);
    }
    cache_.$inject = ['$http', '$templateCache'];
    function cache_($http, $templateCache) {
        $http.get(SVG_ICON_PACK_URL, { cache: $templateCache });
    }
})(App || (App = {}));
//# sourceMappingURL=app.js.map