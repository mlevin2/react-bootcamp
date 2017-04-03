import React from "react";

const SearchBar = (props) => {

	return (

		<div className="form-inline">

			<div className="checkbox">
				<input type="checkbox" id="show-done"/>
				<label htmlFor="show-done" className="left-buffer right-buffer">Show done</label>
			</div>

			<form className="input-group">
				<input type="text" className="form-control" id="search-terms" placeholder="Search"/>
				<div className="input-group-addon">
					<span className="glyphicon glyphicon-remove hover-cursor"/>
				</div>
			</form>

		</div>

	);

};

export default SearchBar;
