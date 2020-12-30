import { EmailValidator } from "@angular/forms"

export class User {
    constructor(
        public userId: number,
        public email: String,
        public password: String
        ) {}
}