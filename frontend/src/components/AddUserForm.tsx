import { useForm } from 'react-hook-form'
import { CreateUserDto, createUserSchema } from '../dto/createUser.dto'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAddUser } from '../query/user.query'

const AddUserForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<CreateUserDto>({ resolver: zodResolver(createUserSchema) })

	const { mutate: addUser, isPending } = useAddUser()

	const onSubmit = (data: CreateUserDto) => {
		addUser(data, { onSuccess: () => reset() })
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4 mb-4'>
			<div className=''>
				<label htmlFor='' className='text-sm mb-1'>
					Name
				</label>
				<input
					type='text'
					{...register('name')}
					className='w-full bg-input px-3 py-2 border border-custom'
				/>
				{errors.name && (
					<p className='text-red-500 text-sm'>{errors.name.message}</p>
				)}
			</div>
			<div className=''>
				<label htmlFor='' className='text-sm mb-1'>
					Email
				</label>
				<input
					type='email'
					{...register('email')}
					className='w-full bg-input px-3 py-2 border border-custom'
				/>
				{errors.email && (
					<p className='text-red-500 text-sm'>{errors.email.message}</p>
				)}
			</div>

			<button type='submit' className='bg-primary text-white px-4 py-2 rounded hover:bg-primary-hover transition-colors'>{isPending ? 'Adding...' : 'Add User'}</button>
		</form>
	)
}

export default AddUserForm
