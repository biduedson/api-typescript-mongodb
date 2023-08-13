import { User } from "../../models/user";

export interface UpdateUsersParams {
  fistName: string;
  lastName: string;
  password: string;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUsersParams): Promise<User>;
}
