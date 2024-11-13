import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

// Data for different time ranges
const weeklyVisitData = [
	{ day: "Mon", visits: 1200 },
	{ day: "Tue", visits: 1500 },
	{ day: "Wed", visits: 1300 },
	{ day: "Thu", visits: 1400 },
	{ day: "Fri", visits: 1700 },
	{ day: "Sat", visits: 1800 },
	{ day: "Sun", visits: 1600 },
];

const monthlyVisitData = [
	{ month: "Jan", visits: 4000 },
	{ month: "Feb", visits: 3000 },
	{ month: "Mar", visits: 5000 },
	{ month: "Apr", visits: 4500 },
	{ month: "May", visits: 6000 },
	{ month: "Jun", visits: 5500 },
	{ month: "Jul", visits: 7000 },
];

const quarterlyVisitData = [
	{ quarter: "Q1", visits: 12000 },
	{ quarter: "Q2", visits: 15000 },
	{ quarter: "Q3", visits: 17000 },
	{ quarter: "Q4", visits: 20000 },
];

const yearlyVisitData = [
	{ year: "2020", visits: 30000 },
	{ year: "2021", visits: 35000 },
	{ year: "2022", visits: 40000 },
	{ year: "2023", visits: 45000 },
];

const VisitOverviewChart = () => {
	const [selectedTimeRange, setSelectedTimeRange] = useState("This Month");

	let data = [];
	switch (selectedTimeRange) {
		case "This Week":
			data = weeklyVisitData;
			break;
		case "This Month":
			data = monthlyVisitData;
			break;
		case "This Quarter":
			data = quarterlyVisitData;
			break;
		case "This Year":
			data = yearlyVisitData;
			break;
		default:
			data = monthlyVisitData;
	}

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Visit Overview</h2>

				<select
					className='bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
					value={selectedTimeRange}
					onChange={(e) => setSelectedTimeRange(e.target.value)}
				>
					<option>This Week</option>
					<option>This Month</option>
					<option>This Quarter</option>
					<option>This Year</option>
				</select>
			</div>

			<div className='w-full h-80'>
				<ResponsiveContainer>
					<AreaChart data={data}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey={selectedTimeRange === "This Week" ? "day" : selectedTimeRange === "This Month" ? "month" : selectedTimeRange === "This Quarter" ? "quarter" : "year"} stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Area type='monotone' dataKey='visits' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default VisitOverviewChart;
