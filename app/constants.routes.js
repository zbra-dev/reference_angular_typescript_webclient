var App;
(function (App) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.Home = new HomeRoute();
        Routes.UserEdit = new UserEditRoute();
        return Routes;
    }());
    App.Routes = Routes;
    var HomeRoute = (function () {
        function HomeRoute() {
        }
        HomeRoute.prototype.template = function () {
            return '/home';
        };
        return HomeRoute;
    }());
    var UserEditRoute = (function () {
        function UserEditRoute() {
        }
        UserEditRoute.prototype.template = function () {
            return '/users/:id';
        };
        UserEditRoute.prototype.withArguments = function (id) {
            return "/users/" + id;
        };
        return UserEditRoute;
    }());
})(App || (App = {}));
//# sourceMappingURL=constants.routes.js.map