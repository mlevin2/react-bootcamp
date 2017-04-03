import React from "react";

import Category from "./Category";

const CategoryList = (props) => {

	return (

		<div>
			{props.categories.map(category => <Category category={category} key={category.name} deleteHandler={props.deleteHandler} selectHandler={props.selectHandler}
														selected={props.categoryIndex === props.categories.findIndex(categoryItem => categoryItem === category)}/>)}
		</div>

	);

};

export default CategoryList;
