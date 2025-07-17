import UserTable from './components/UserTable'

const App = () => {
	return (
		<div className='flex-1 h-full min-h-screen bg-background px-4 py-4'>
			<div className='border-b border-custom pb-2'>
				<h1 className='text-white text-3xl text-center font-bold'>
					User Manager
				</h1>
			</div>
      <UserTable/>
		</div>
	)
}

export default App
