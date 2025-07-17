import type { CreateUserDto } from '../dto/createUser.dto'
import type { updateUserDto } from '../dto/updateUser.dto'
import type { User } from '../type/user.type'
import { api } from './axios'

export async function getUsers():Promise<User[]>{
  return await api.get("/users")
}

export async function addUser(user:CreateUserDto):Promise<User> {
  return await api.post("/users", user)
}

export async function updateUser(id:string, user:updateUserDto):Promise<User>{
  return await api.put(`/users/${id}`, user)
}
export async function deleteUser(id:string){
  return await api.delete(`/users/${id}`)
}