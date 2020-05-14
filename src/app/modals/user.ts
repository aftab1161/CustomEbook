export class User {
  name: string;
  username: string;
  password: string;
  roles: string;
  address: string;
  active: number;
  constructor(name: string, username: string, password: string, roles: string) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.roles = roles;
    this.address = '';
    this.active = 1;
  }
}
