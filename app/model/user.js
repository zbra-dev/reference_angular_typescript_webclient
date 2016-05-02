var Model;
(function (Model) {
    var User = (function () {
        function User() {
        }
        Object.defineProperty(User.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    }());
    Model.User = User;
})(Model || (Model = {}));
//# sourceMappingURL=user.js.map