namespace App {

    interface Route {
        template():string;
    }

    class HomeRoute implements Route {
        template():string {
            return '/home';
        }
    }

    class UserEditRoute implements Route {
        template():string {
            return '/users/:id';
        }

        public withArguments (id: string): string {
            return `/users/${id}`;
        }
    }

    export class Routes {
        public static Home = new HomeRoute();
        public static UserEdit = new UserEditRoute();
    }
}