import React, {Component} from "react";
import "./App.css";

import Foo from "./components/Foo";

class App extends Component {
    render() {
        return (
            <div className="container">
                <header className="row">
                    <div className="col-md-4">
                        <h1>To Do List</h1>
                        <Foo/>
                    </div>
                    <div className="col-md-8">
                        <form>
                            <input type="checkbox"/>
                            <label>Show done</label>
                            <div>
                                <input type="text"/>
                                <button>X</button>
                            </div>
                        </form>
                    </div>
                </header>
                <section className="row progress-bar">
                </section>
                <section className="row">
                    <div className="col-md-6">
                        <input type="text" placeholder="Enter Category Title"/>
                        <button>Add</button>
                    </div>
                    <div className="col-md-6">
                        <input type="text" placeholder="Text Input With Button"/>
                        <button>Add</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
