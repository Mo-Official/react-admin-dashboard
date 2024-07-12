import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
	DonutLarge as DonutLargeIcon,
	Home as HomeIcon,
	Timeline as TimelineIcon,
	Notifications as NotificationsIcon,
	Assignment as AssignmentIcon,
	CalendarToday as CalendarTodayIcon,
	Group as GroupIcon,
	ImportContacts as ImportContactsIcon,
	Folder as FolderIcon,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface sideBarItem {
	icon: OverridableComponent<any>;
	title: string;
	link: string;
}

const sideBarItems: sideBarItem[] = [
	{
		icon: DonutLargeIcon,
		title: "Processes",
		link: "/processes",
	},
	{
		icon: HomeIcon,
		title: "Practices",
		link: "/",
	},
	{
		icon: TimelineIcon,
		title: "Progress Tracker",
		link: "/progress-tracker",
	},
	{
		icon: NotificationsIcon,
		title: "Notifications",
		link: "/notifications",
	},
	{
		icon: AssignmentIcon,
		title: "Tasks",
		link: "/tasks",
	},
	{
		icon: CalendarTodayIcon,
		title: "Calendar",
		link: "/",
	},
	{
		icon: GroupIcon,
		title: "Teams",
		link: "/",
	},
	{
		icon: ImportContactsIcon,
		title: "Forms",
		link: "/",
	},
	{
		icon: FolderIcon,
		title: "Files Archive",
		link: "/",
	},
];

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar-head'>
				<MenuIcon
					fontSize='large'
					style={{ color: "white" }}
				/>
			</div>
			<div className='sidebar-list-1'>
				{sideBarItems.map((e) => (
					<NavLink to={e.link}>
						<div className='sidebar-item'>
							{<e.icon className='sidebar-icons' />}
							{e.title}
						</div>
					</NavLink>
				))}
			</div>
			<hr className='seprator' />

			<div className='sidebar-list-1'>
				<div className='sidebar-item'>
					<DashboardIcon className='sidebar-icons' /> Transision
				</div>
				<div className='sidebar-item'>
					<DonutLargeIcon className='sidebar-icons' /> Mergers
				</div>
				<div className='sidebar-item'>
					<HomeIcon /> Closuers
				</div>
			</div>
			<hr className='seprator' />
			<div className='sidebar-list-1'>
				<div className='sidebar-item'>
					<PersonIcon className='sidebar-icons' /> Profile
				</div>
				<div className='sidebar-item'>
					<SettingsIcon className='sidebar-icons' /> Settings
				</div>
				<div
					className='sidebar-item'
					style={{ marginBottom: "40px" }}
				>
					<PowerSettingsNewIcon className='sidebar-icons' /> Logout
				</div>
			</div>
		</div>
	);
}
