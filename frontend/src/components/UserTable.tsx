import { useDeleteUser, useGetUsers } from '../query/user.query'

const UserTable = () => {
	const {
		data: users,
		isLoading,
		isError,
		error: getUsersError,
	} = useGetUsers()

	const { mutate: deleteUser, isPending: isPendingDeleting } = useDeleteUser()

	const handleDeleteUser = (id: string) => {
		deleteUser(id)
	}
	return (
		<div>
			<table className='min-w-full divide-y divide-gray-700 rounded-md overflow-hidden'>
				<thead className='bg-primary '>
					<tr className='border border-white/50'>
						<th className='px-4 py-2 text-left border-r border-white/50'>#</th>
						<th className='px-4 py-2 text-left border-r border-white/50'>
							Name
						</th>
						<th className='px-4 py-2 text-left border-r border-white/50'>
							Email
						</th>
						<th className='px-4 py-2 text-center'>Actions</th>
					</tr>
				</thead>
				<tbody className='divide-y divide-gray-700'>
					{}
					{users?.length === 0 ||
						isLoading ||
						(isError && (
							<tr>
								<td colSpan={3} className='px-4 py-2 text-center text-gray-400'>
									{isLoading
										? 'Loading...'
										: isError
										? `${getUsersError.message}`
										: 'No users found!'}
								</td>
							</tr>
						))}
					{users?.length !== 0 &&
						users?.map((user, i) => (
							<tr key={user.id} className='hover:bg-gray-700'>
								<td className=' px-4 py-2'>{i + 1}</td>
								<td className=' px-4 py-2'>{user.name}</td>
								<td className=' px-4 py-2'>{user.email}</td>
								<td className=' flex items-center justify-center py-1 px-1'>
									<button
										className='px-3 py-1 bg-red-500 hover:bg-red-300 duration-300 transition-colors cursor-pointer rounded-sm'
										onClick={() => deleteUser(user.id)}
									>
										{!isPendingDeleting ? '..Delete..' : 'Deleting...'}
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	)
}

export default UserTable
