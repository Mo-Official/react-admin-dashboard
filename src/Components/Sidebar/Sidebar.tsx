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
	Filter1,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

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
		icon: Filter1,
		title: "Backlog",
		link: "/backlog",
	},
];

interface SidebarProps {
	sidebarHidden: boolean;
	sidebarHiddenUpdateFunction: React.Dispatch<any>;
}

export default function Sidebar({
	sidebarHidden,
	sidebarHiddenUpdateFunction,
}: SidebarProps) {
	const toggleSidebarHidden = () => sidebarHiddenUpdateFunction(!sidebarHidden);

	return (
		<div className={sidebarHidden ? "sidebar-hidden" : "sidebar"}>
			<div className='sidebar-head'>
				<MenuIcon
					fontSize='large'
					style={{ color: "white", cursor: "pointer" }}
					onClick={toggleSidebarHidden}
				/>
			</div>
			<div className='sidebar-list'>
				{sideBarItems.map((e) => (
					<NavLink to={e.link}>
						<div className='sidebar-item'>
							{<e.icon className='sidebar-icons' />}
							{e.title}
						</div>
					</NavLink>
				))}
			</div>
		</div>
	);
}
