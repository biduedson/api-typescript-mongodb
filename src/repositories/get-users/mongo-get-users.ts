import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Edson",
        lastName: "Gomes Arruda",
        email: "bidu@bidu.com",
        password: "123"
      }
    ];
  }
}
