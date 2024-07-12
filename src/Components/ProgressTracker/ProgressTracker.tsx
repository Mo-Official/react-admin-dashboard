import "./ProgressTracker.css";
import { Paper, Button, Menu, MenuItem } from "@mui/material";
import { } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from "react";
import trackableProcesses from "./MockProcessData";
import Tracker, { TrackableProcess } from "./Tracker";
import Pagination from "../../Pagination/Pagination";
import { Search as SearchIcon } from "@mui/icons-material";

function getProcessData(): TrackableProcess[] {
	return trackableProcesses;
}

export default function ProgressTracker() {
	const processData = getProcessData();
	const [paginationSection, setPaginationSection] = useState(0);
	const [paginationShowMaxItems, setPaginationShowMaxItems] = useState(5);
	const [isReversed, setIsReversed] = useState(false);
	const [selectedSortBy, setSelectedSortBy] = useState<"progress" | "name">(
		"name"
	);
	const [searchTracker, setSearchTracker] = useState<string>("")

	function onPaginationSectionSelect(selection: number) {
		setPaginationSection(selection);
		console.log(paginationSection);
	}

	const [sortMenuAnchorEl, setSortMenuAnchorEl] = useState(null);

	const handleSortMenuClick = (event: BaseSyntheticEvent) => {
		setSortMenuAnchorEl(event.currentTarget);
	};

	const handleSortMenuClose = () => {
		setSortMenuAnchorEl(null);
	};

	const sortBy = (by: "progress" | "name") => {
		switch (by) {
			case "progress":
				return (a: TrackableProcess, b: TrackableProcess) =>
					isReversed ? b.progress - a.progress : a.progress - b.progress;
			case "name":
				return (a: TrackableProcess, b: TrackableProcess) =>
					isReversed
						? a.title.charCodeAt(0) - b.title.charCodeAt(0)
						: b.title.charCodeAt(0) - a.title.charCodeAt(0);
		}
	};

	const handleSortByClick = (by: "progress" | "name") => {
		setSelectedSortBy(by);
		handleSortMenuClose();
	};

	const handleReverseSortedClick = () => {
		setIsReversed(!isReversed);
	};

	const handleSearchTrackerInput = (e: any) => {
		setSearchTracker(e.currentTarget.value)
	}

	return (
		<div className='progress-tracker'>
			<Paper elevation={3} className='progress-tracker-page'>
				<div className='header'>
				
					<div className='title'>Progress Tracker <SearchIcon style={{ position: "relative", left: "50px"}} />
						 <input className="tracker-searchbar" type="text" placeholder="Search Process..." onInput={handleSearchTrackerInput}  />
					</div>
					<div className='progress-right'>
						<div>
							<Button
								aria-controls='simple-menu'
								aria-haspopup='true'
								className='sort-button'
								onClick={handleReverseSortedClick}
							>
								{isReversed ? "Asc" : "Desc"} <ExpandMoreIcon />
							</Button>

							<Button
								aria-controls='simple-menu'
								aria-haspopup='true'
								className='sort-button'
								onClick={handleSortMenuClick}
							>
								Sort By ({selectedSortBy}) <ExpandMoreIcon />
							</Button>

							<Menu
								id='simple-menu'
								anchorEl={sortMenuAnchorEl}
								keepMounted
								open={Boolean(sortMenuAnchorEl)}
								onClose={handleSortMenuClose}
							>
								<MenuItem onClick={() => handleSortByClick("progress")}>
									Progress
								</MenuItem>
								<MenuItem onClick={() => handleSortByClick("name")}>
									Name of Activity
								</MenuItem>
							</Menu>
						</div>
					</div>
					<div className="progress-trackers-container">
						{processData.sort(sortBy(selectedSortBy))
						.filter( (e) => e.title.toLowerCase().includes(searchTracker.toLowerCase())  )
						.slice(
							paginationSection * paginationShowMaxItems,
							paginationSection * paginationShowMaxItems +
							paginationShowMaxItems)
						.map((e) => (<Tracker {...e} />))}
					</div>

				</div>
				<hr />
				<Pagination
					pages={Math.ceil(processData.length / paginationShowMaxItems)}
					selectedPage={paginationSection}
					onPageSelection={onPaginationSectionSelect}
				/>
			</Paper>
		</div>
	);
}
