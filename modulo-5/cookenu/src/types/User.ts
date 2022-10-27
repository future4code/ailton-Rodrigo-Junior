export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private password: string,
        private email: string,
        private role: USER_ROLES
        ){}

        static toUserModel(data: any): User{
            return new User(data.id, data.name, data.password, data.email, data.role)
        }

        public getId() {
            return this.id
        }
        public getName() {
            return this.name
        }
        public getPassword() {
            return this.password
        }
        public getEmail() {
            return this.email
        }
        public getRole(){
            return this.role
        }
}