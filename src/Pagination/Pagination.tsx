import { Button } from "@mui/material";
import {
	ArrowBack as ArrowBackIcon,
	ArrowForward as ArrowForwardIcon,
} from "@mui/icons-material";

import "./Pagination.css";
import { useEffect, useState } from "react";

interface PaginationProps {
	pages: number;
	selectedPage: number;
	onPageSelection: CallableFunction;
}

export default function Pagination({
	pages = 0,
	selectedPage = 0,
	onPageSelection,
}: PaginationProps) {
	const [numberedPages, setNumberedPages] = useState([<></>]);

	useEffect(() => {
		setNumberedPages(
			Array.from(Array(pages).keys()).map((i) => {
				return (
					<div
						className={`number ${selectedPage == i ? "selected" : ""}`}
						onClick={() => handleSelectedPageClick(i)}
						style={{cursor: "pointer"}}
					>
						{i + 1}
					</div>
				);
			})
		);
	}, [selectedPage]);

	function handleSelectedPageClick(selection: number) {
		onPageSelection(selection);
	}
	function handleSelectedPageForward() {
		onPageSelection(Math.min(selectedPage + 1, pages - 1));
	}
	function handleSelectedPageBackward() {
		onPageSelection(Math.max(selectedPage - 1, 0));
	}

	return (
		<div className='pagination'>
			<Button
				id='page-button-1'
				onClick={handleSelectedPageBackward}
			>
				<ArrowBackIcon style={{ marginRight: "10px" }} /> Prev
			</Button>
			<div className='number-cont'>{numberedPages}</div>
			<Button
				id='page-button-2'
				onClick={handleSelectedPageForward}
			>
				Next <ArrowForwardIcon style={{ marginLeft: "10px" }} />{" "}
			</Button>
		</div>
	);
}
