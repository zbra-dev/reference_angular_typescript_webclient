namespace Model {
    export class User {
        private _id:string;
        private _name:string;

        get id():string {
            return this._id;
        }

        set id(value:string) {
            this._id = value;
        }

        get name():string {
            return this._name;
        }

        set name(value:string) {
            this._name = value;
        }
    }
}