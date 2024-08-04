import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.usersService.findOne(username);
    if (user && user.password === password) {
      const { username, password, ...rest } = user;
      return rest;
    }
  }
}
