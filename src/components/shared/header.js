import React from "react";

import SearchBar from "./SearchBar";

const Header = (props) => {

    return (

        <div className="page-header clearfix">

            <div className="pull-left">
                <h1 style={{ marginTop: 0 }}>To-Do List</h1>
            </div>

            <div className="pull-right">
                <SearchBar/>
            </div>

        </div>

    );

};

export default Header;
