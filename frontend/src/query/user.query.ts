import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addUser, deleteUser, getUsers, updateUser } from '../api/user.api'
import type { CreateUserDto } from '../dto/createUser.dto'
import type { updateUserDto } from '../dto/updateUser.dto'

export const useGetUsers = () => {
	return useQuery({
		queryKey: ['users'],
		queryFn: getUsers,
	})
}
export const useAddUser = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (user: CreateUserDto) => addUser(user),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
		},
		onError: error => {
			console.error(error.message)
		},
	})
}

export const useUpdateUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: ({ id, user }: { id: string; user: updateUserDto }) =>
			updateUser(id, user),
    onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
		},
		onError: error => {
			console.error(error.message)
		},
	})
}

export const useDeleteUser = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] })
		},
		onError: error => {
			console.error(error.message)
		},
	})
}
