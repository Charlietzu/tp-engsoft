import { User, Role } from "@prisma/client";
import UserModel from "../user.model";


const user1: User = {
    id: 1,
    role: Role.DOCTOR,
    name: 'Larao'
}

const user2: User = {
  id: 2,
  role: Role.RECEPTIONIST,
  name: 'Larasso'
}

const userModel = new UserModel()


describe('User Model Test', () => {
    it('Should Return user', async () => {
      await userModel.createUser(user1)
      const users = await userModel.retrieveUser()
      console.log(users)
      expect(users).toHaveLength(1)

      expect(users[0].id).toBe(user1.id)
      expect(users[0].role).toBe(user1.role)
      expect(users[0].name).toBe(user1.name)

      await userModel.deleteUser(1)
    });

    it('Should Return user 1', async () => {
      await userModel.createUser(user1)
      const user = await userModel.retrieveUserById(1)
      expect(user1.id).toBe(user?.id)
      expect(user1.role).toBe(user?.role)
      expect(user1.name).toBe(user?.name)
      await userModel.deleteUser(1)
    });
  
    
    it('Should Return user 2', async () => {
      await userModel.createUser(user1)
      await userModel.createUser(user2)
      const users = await userModel.retrieveUser()
      const user = await userModel.retrieveUserById(2)
      expect(user2.id).toBe(user?.id)
      expect(user2.role).toBe(user?.role)
      expect(user2.name).toBe(user?.name)
      expect(users).toHaveLength(2)
      await userModel.deleteUser(1)
      await userModel.deleteUser(2)
    });

    it('Should delete user 2', async () => {
      await userModel.createUser(user1)
      let users = await userModel.retrieveUser()
      expect(users).toHaveLength(1)
      expect(users[0].id).toBe(user1.id)
      await userModel.deleteUser(1)
      users = await userModel.retrieveUser()
      expect(users).toHaveLength(0)
    });

    it('Should edit user 2', async () => {
      await userModel.createUser(user1)
      await userModel.createUser(user2)
      const editedUser2 = { ...user2, name: 'Larinho'}
      await userModel.editUser(2, editedUser2)
      const user = await userModel.retrieveUserById(2)
      expect(user?.name).toBe('Larinho')
      await userModel.deleteUser(2)
      await userModel.deleteUser(1)
    });
  });