namespace Repository {

    import User = Model.User;
    import IHttpService = angular.IHttpService;
    import IQService = angular.IQService;
    import IPromise = angular.IPromise;

    export class UserRepository {
        static $inject = ['$q', '$http'];

        constructor(private $q:IQService,
                    private $http:IHttpService) {
        }

        public listAll(): IPromise<User[]> {
            var deferred = this.$q.defer<User[]>();
            this.$http
                .get(`${App.Config.SERVER_URL}/api/users`)
                .then((response: any) => {
                    var users = [];

                    _ .forEach(response.data, (userData) => {
                        var user = new User();
                        user.id = userData.id;
                        user.name = userData.name;

                        users.push(user);
                    });

                    deferred.resolve(users);
                });

            return deferred.promise;
        }
    }
}