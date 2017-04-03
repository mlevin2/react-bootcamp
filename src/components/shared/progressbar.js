import React from "react";

const ProgressBar = (props) => {

    return (
        <div className="progress">
            <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${props.progress}%` }}>
                <span className="sr-only">{props.progress}% complete</span>
            </div>
        </div>
    );

};

export default ProgressBar;
