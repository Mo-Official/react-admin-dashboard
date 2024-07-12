import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import ProgressTracker from "../Components/ProgressTracker/ProgressTracker";

export default function Dashboard() {
	return (
		<div className='App'>
			<Sidebar />
			<div className='container'>
				<Navbar />
				<div className='lg-container'>
					<div className='md-container'>
						<ProgressTracker />
						{/* Tasks */} {/* Files */}
					</div>
					<div className='sm-container'>
						{/* Calender */}
						{/* SmNotification */}
						{/* Teams */}
					</div>
				</div>
			</div>
		</div>
	);
}
