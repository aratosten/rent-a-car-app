import { User } from '../models/user';

export class UserService {
    users: User[] = [
        {
            userId: 1,
            email: 'admin@test.com',
            password: 'admin'
        }
    ];

    getNextUserId(): number {
        return this.users.length + 1;
    }

    addUser(newUser: User): void {
        newUser.userId = this.getNextUserId();
        this.users.push(newUser);
    }

    getUsers(): User[] {
        return [...this.users];
    }

    matchUser(user: User): User {
        return this.users.find(u => user.email === u.email && user.password === u.password);
    } 
}