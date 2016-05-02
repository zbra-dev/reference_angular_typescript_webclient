var Repository;
(function (Repository) {
    var User = Model.User;
    var UserService = (function () {
        function UserService(repository) {
            this.repository = repository;
        }
        UserService.prototype.listAll = function () {
            var deferred = this.$q.defer();
            this.$http
                .get(App.Config.SERVER_URL + "/api/users")
                .then(function (response) {
                var users = [];
                _.forEach(response.data, function (userData) {
                    var user = new User();
                    user.id = userData.id;
                    user.name = userData.name;
                    users.push(user);
                });
                deferred.resolve(users);
            });
            return deferred.promise;
        };
        UserService.$inject = ['$q', '$http'];
        return UserService;
    }());
    Repository.UserService = UserService;
})(Repository || (Repository = {}));
//# sourceMappingURL=user-repository.js.map