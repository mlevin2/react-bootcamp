import React from "react";

import Task from "./Task";

const TaskList = (props) => {

	return (

		<div>
			{props.tasks.map(task => <Task task={task} key={task.description}/>)}
		</div>

	);

};

export default TaskList;
