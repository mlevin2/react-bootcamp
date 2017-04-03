import React from "react";

const AddItem = (props) => {

	return (

		<form onSubmit={props.submitHandler}>

			<div className="inline-input input-group">

				<input type="text" placeholder={props.placeholder} className="form-control" onChange={props.changeHandler} value={props.value}/>

				<div className="input-group-btn">
					<input type="submit" className="btn btn-default" value="Add"/>
				</div>

			</div>

		</form>

	);

};

export default AddItem;
