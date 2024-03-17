import { useState } from "react";
import useProfile from '../store/useProfile';
import useGetProfile from '../hooks/useGetProfile'
import toast from "react-hot-toast";
import { SearchIcon } from '@heroicons/react/outline';

const Searchbar = () => {
	const [search, setSearch] = useState("");
	const { setSelectedprofile } = useProfile();
	const { profile } = useGetProfile();

	const handleSubmit = () => {
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = profile.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

		if (profile) {
			setSelectedprofile(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<div className="w-48 flex items-center gap-2 relative">
			<input
				type='text'
				placeholder='Search…'
				className='pr-8 pl-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button onClick={handleSubmit} className='absolute inset-y-0 right-3 flex items-center pl-3'>
            <SearchIcon className="h-5 w-5 text-gray-400" />
			</button>
	
    </div>
	);
};
export default Searchbar;