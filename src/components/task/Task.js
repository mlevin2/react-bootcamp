import React from "react";

const Task = (props) => {

	const { description } = props.task;

	return (

		<div className="list-group-item form-inline clearfix">

			<div className="checkbox">
				<input type="checkbox"/>
				<label className="left-buffer right-buffer">{description}</label>
			</div>

			<div className="pull-right">
				<span className="glyphicon glyphicon-edit hover-cursor"/>
			</div>

		</div>

	);

};

export default Task;
