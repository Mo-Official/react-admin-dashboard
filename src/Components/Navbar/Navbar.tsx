import { Avatar } from "@mui/material";
import "./Navbar.css";
import { Search, Notifications } from "@mui/icons-material";

export default function Navbar() {
	return (
		<div className='navbar'>
			<div className='navbar-left'>
				<div className='input-cont'>
					<div className='input-box'>
						<Search className='search-icon' />
						<input
							type='text'
							className='input-field'
							placeholder='Search...'
						/>
					</div>
				</div>
			</div>
			<div className='navbar-right'>
				<Avatar style={{ width: "60px", height: "60px" }} />
				<div className='AdminDash'> Admin Dash </div>
				<Notifications className='AdminDash' />
			</div>
		</div>
	);
}
