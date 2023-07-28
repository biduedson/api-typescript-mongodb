import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {
  /*getUsersRepository: IGetUsersRepository;

  constructor(getUsersRepository: IGetUsersRepository) {
    this.getUsersRepository = getUsersRepository;
  }*/
  //forma mais simples de fazer  os comandos acima
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      //validar requisição
      // direcionar chamada para o Repository
      const users = await this.getUsersRepository.getUsers();
      return {
        statusCode: 200,
        body: users
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "something went wrong."
      };
    }
  }
}
