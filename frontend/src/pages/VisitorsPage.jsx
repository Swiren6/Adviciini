import { CheckCircle, Clock, User, Users } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyVisitors from "../components/Visitors/DailyVisitors";
import VisitorDistribution from "../components/Visitors/VisitorDistribution";
import VisitorsTable from "../components/Visitors/VisitorsTable";

const visitorStats = {
    totalVisitors: "12,3455",
    newVisitors: "56",
    returningVisitors: "1,178",
    activeVisitors: "980",
};

const VisitorsPage = () => {
    return (
        <div className='flex-1 relative z-10 overflow-auto'>
            <Header title={"Visitors"} />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                <motion.div
                    className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <StatCard name='Total Visitors' icon={Users} value={visitorStats.totalVisitors} color='#6366F1' />
                    <StatCard name='New Visitors' icon={User} value={visitorStats.newVisitors} color='#F59E0B' />
                    <StatCard name='Returning Visitors' icon={CheckCircle} value={visitorStats.returningVisitors} color='#10B981' />
                    <StatCard name='Active Visitors' icon={Clock} value={visitorStats.activeVisitors} color='#EF4444' />
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <DailyVisitors />
                    <VisitorDistribution />
                </div>

                <VisitorsTable />
            </main>
        </div>
    );
};

export default VisitorsPage;
