import React from "react";

const Category = (props) => {

	const { name } = props.category;

	return (

		<div className={"list-group-item clearfix" + (props.selected ? " list-group-item-success" : "")}>

			<span className="hover-cursor" onClick={() => props.selectHandler(props.category)}>
				{name}
			</span>

			<div className="pull-right">
				<span className="glyphicon glyphicon-edit right-buffer hover-cursor"/>
				<span className="glyphicon glyphicon-trash right-buffer hover-cursor" onClick={() => props.deleteHandler(props.category)}/>
				<span className="glyphicon glyphicon-plus hover-cursor"/>
			</div>

		</div>

	);

};

export default Category;
