import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    //aqui esta const ira pegar todos os usuarios(objetos) que estão dentro da collection('users')
    // e transformalos em um array
    const users = await MongoClient.db
      //aqui esta parte <Omit<User, 'id'>> estou omitindo o campo id no retorno , pois o mongoDb
      //usa o campo id escrito > _id .
      .collection<Omit<User, "id">>("users")
      .find({})
      .toArray();

    // aqui esto u retornando o objeto users convertendo o campo _id em string base  Hexadecimal
    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString()
    }));
  }
}
