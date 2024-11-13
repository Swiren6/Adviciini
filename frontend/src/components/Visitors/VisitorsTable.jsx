import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const visitorData = [
	{ id: "VIS001", name: "John Doe", visits: 12, status: "Active", lastVisit: "2023-07-01" },
	{ id: "VIS002", name: "Jane Smith", visits: 8, status: "New", lastVisit: "2023-07-02" },
	{ id: "VIS003", name: "Bob Johnson", visits: 5, status: "Returning", lastVisit: "2023-07-03" },
	{ id: "VIS004", name: "Alice Brown", visits: 20, status: "Inactive", lastVisit: "2023-07-04" },
	{ id: "VIS005", name: "Charlie Wilson", visits: 7, status: "Active", lastVisit: "2023-07-05" },
	{ id: "VIS006", name: "Eva Martinez", visits: 9, status: "Returning", lastVisit: "2023-07-06" },
	{ id: "VIS007", name: "David Lee", visits: 15, status: "New", lastVisit: "2023-07-07" },
	{ id: "VIS008", name: "Grace Taylor", visits: 3, status: "Active", lastVisit: "2023-07-08" },
];

const VisitorsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredVisitors, setFilteredVisitors] = useState(visitorData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = visitorData.filter(
			(visitor) => visitor.id.toLowerCase().includes(term) || visitor.name.toLowerCase().includes(term)
		);
		setFilteredVisitors(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
			aria-label="Visitor List"
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Visitor List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search visitors...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={handleSearch}
						aria-label="Search Visitors"
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Visitor ID
							</th>
							<th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Visits
							</th>
							<th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Status
							</th>
							<th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Last Visit
							</th>
							<th scope="col" className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide divide-gray-700'>
						{filteredVisitors.map((visitor) => (
							<motion.tr
								key={visitor.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{visitor.id}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{visitor.name}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
									{visitor.visits}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											visitor.status === "Active"
												? "bg-green-100 text-green-800"
												: visitor.status === "New"
												? "bg-yellow-100 text-yellow-800"
												: visitor.status === "Returning"
												? "bg-blue-100 text-blue-800"
												: "bg-red-100 text-red-800"
										}`}
									>
										{visitor.status}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{visitor.lastVisit}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button
										className='text-indigo-400 hover:text-indigo-300 mr-2'
										aria-label={`View details of visitor ${visitor.id}`}
									>
										<Eye size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default VisitorsTable;
