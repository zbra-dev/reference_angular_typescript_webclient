var Repository;
(function (Repository) {
    var SessionService = (function () {
        function SessionService($q, $http, userRepository) {
            this.$q = $q;
            this.$http = $http;
            this.userRepository = userRepository;
        }
        SessionService.prototype.authenticate = function () {
            // eventual business specific logic here
            return this.repository.listAll();
        };
        SessionService.$inject = ['$q', '$http', 'UserRepository'];
        return SessionService;
    }());
    Repository.SessionService = SessionService;
})(Repository || (Repository = {}));
//# sourceMappingURL=session-service.js.map