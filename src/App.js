import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

import React, {Component} from "react";

import Header from "./components/shared/Header";
import ProgressBar from "./components/shared/ProgressBar";
import AddItem from "./components/shared/AddItem";
import CategoryList from "./components/category/CategoryList";
import TaskList from "./components/task/TaskList";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: [
				{ name: 'Category 1', tasks: [{ description: 'Do some of the things', done: false }, { description: 'Do all of the things', done: false }] },
				{ name: 'Category 2', tasks: [{ description: 'Do some of the things', done: false }, { description: 'Do all of the things', done: false }] },
				{ name: 'Category 3', tasks: [{ description: 'Do none of the things', done: false }, { description: 'Do all of the things', done: false }] }
			],
			progress: 0,
			categoryIndex: 0,
			addCategoryValue: ''
		};
		this.handleAddCategoryChange = this.handleAddCategoryChange.bind(this);
		this.handleAddCategorySubmit = this.handleAddCategorySubmit.bind(this);
		this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
		this.selectCategory = this.selectCategory.bind(this);
	}

	selectCategory(categoryToSelect) {
		this.setState({ categoryIndex: this.state.categories.findIndex(category => category === categoryToSelect) });
	}

	handleDeleteCategory(categoryToDelete) {
		const categories = this.state.categories.filter(category => category !== categoryToDelete);
		this.setState({ categories, categoryIndex: 0 });
	}

	handleAddCategoryChange(event) {
		this.setState({ addCategoryValue: event.target.value });
	}

	handleAddCategorySubmit(event) {
		event.preventDefault();
		this.setState({ categories: [...this.state.categories, { name: this.state.addCategoryValue, tasks: [{ description: 'Default task', done: false }] }], addCategoryValue: '' });
	}

	componentDidMount() {
		this.computeProgress();
	}

	computeProgress() {
		this.setState({ progress: 25 });
	}

	render() {

		return (

			<div className="container">

				<div className="row">
					<div className="col-md-12">
						<Header/>
					</div>
				</div>

				<div id="progress-bar" className="row">
					<div className="col-md-12">
						<ProgressBar progress={this.state.progress}/>
					</div>
				</div>

				<div id="main" className="row">

					<div className="col-sm-6">

						<div className="panel panel-default">

							<div className="panel-heading">
								<AddItem placeholder="Enter category title" submitHandler={this.handleAddCategorySubmit} changeHandler={this.handleAddCategoryChange} value={this.state.addCategoryValue}/>
							</div>

							<div className="panel-body">
								<CategoryList categories={this.state.categories} deleteHandler={this.handleDeleteCategory} selectHandler={this.selectCategory} categoryIndex={this.state.categoryIndex}/>
							</div>

						</div>

					</div>

					<div className="col-sm-6">
						<div className="clearfix">

							<div className="panel panel-default">

								<div className="panel-heading">
									<AddItem placeholder="Enter task description"/>
								</div>

								<div className="panel-body">
									{ this.state.categories.length !== 0 &&
									<TaskList tasks={this.state.categories[this.state.categoryIndex].tasks}/>
									}
								</div>

							</div>

						</div>
					</div>

				</div>

			</div>

		);

	}

}

export default App;
