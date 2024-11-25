import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import HogForm from "./HogForm";
import SearchBar from "./SearchBar";
import HogContainer from "./HogContainer";

function App() {

	const [hogList, setHogList] = useState(hogs);
	const [greasedFilter, setGreasedFilter] = useState(false);
	const [sortBy, setSortBy] = useState("id");

	function addHog(newHog) {
		setHogList(prevHogs=> [...prevHogs, newHog]);
		console.log("Added", newHog);
	}

	function chgSort(event) {
		setSortBy(prevSortBy=> event.target.value);
	}

	function chgFilter() {
		setGreasedFilter(prevGreasedFilter=>!prevGreasedFilter)
	}

	return (
		<div className="App">
			<Nav />
			<SearchBar 
				chgSort={chgSort}
				chgFilter={chgFilter}
			/>
			<HogForm 
				addHog={addHog}
			/>
			<HogContainer 
				hogList={hogList}
				sortBy={sortBy}
				greasedFilter={greasedFilter}
			/>
		</div>
	);
}

export default App;
