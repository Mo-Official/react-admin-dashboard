import { createTheme, LinearProgress, ThemeProvider } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";

export interface TrackableProcess {
	title: string;
	progress: number;
	tags: string[];
	createdBy: string;
	assignedTo: string;
}

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffcf33",
		},
		secondary: {
			main: "#71d875",
		},
	},
});

export default function Tracker({
	title,
	progress,
	tags,
	createdBy,
	assignedTo,
}: TrackableProcess) {
	const [barColor, setbarColor] = useState<"primary" | "secondary">("primary");
	useEffect(() => {
		if (progress < 45) setbarColor("primary");
		else setbarColor("secondary");
	});
	return (
		<ThemeProvider theme={theme}>
			<div className='tracker'>
				<div className='tracker-left'>
					<div className='tracker-title'>{title}</div>
					<div className='tracker-para'>{progress}% Completed</div>
				</div>
				<div className='tracker-mid'>
					<LinearProgress
						variant='determinate'
						color={barColor}
						style={{ height: "15px", backgroundColor: "#4444441A" }}
						value={progress}
					></LinearProgress>
					<div className='tracker-info'>
						<div className='tracker-info-1'>{tags.map((e) => `#${e} `)}</div>

						<div className='tracker-info-1'>
							<div className='tracker-info-2'>
								<PersonIcon style={{ marginRight: "8px" }} />
								Created By: {createdBy}
							</div>
							<div className='tracker-info-2'>
								<PersonIcon style={{ marginRight: "8px" }} />
								Assigned To: {assignedTo}
							</div>
						</div>
					</div>
				</div>
			</div>
		</ThemeProvider>
	);
}
