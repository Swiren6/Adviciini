import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { User, TrendingUp, ShoppingCart, CreditCard } from "lucide-react";
import VisitOverviewChart from "../components/visits/VisitOverviewChart";
import VisitsByCategoryChart from "../components/visits/VisitsByCategoryChart";
import DailyVisitTrend from "../components/visits/DailyVisitsTrend";

const visitStats = {
	totalVisits: "1,234,567",
	averageVisitDuration: "5m 30s",
	conversionRate: "3.45%",
	visitGrowth: "12.3%",
};

const VisitPage = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Visit Dashboard' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* VISIT STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Visits' icon={User} value={visitStats.totalVisits} color='#6366F1' />
					<StatCard
						name='Avg. Visit Duration'
						icon={ShoppingCart}
						value={visitStats.averageVisitDuration}
						color='#10B981'
					/>
					<StatCard
						name='Conversion Rate'
						icon={TrendingUp}
						value={visitStats.conversionRate}
						color='#F59E0B'
					/>
					<StatCard name='Visit Growth' icon={CreditCard} value={visitStats.visitGrowth} color='#EF4444' />
				</motion.div>

				<VisitOverviewChart />

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<VisitsByCategoryChart />
					{/* <DailyVisitTrend /> */}
				</div>
			</main>
		</div>
	);
};

export default VisitPage;
