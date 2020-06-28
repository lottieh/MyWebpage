import React from 'react';
import gears from './gears.png'

class Project1 extends React.Component {

    render() {
        return (
            <div col-md-3>

                <div className="project-title"> Project 1 - To Do App </div>
                <img src={gears} alt="gears filler picture" width="400" className="boxed">

                </img>

            </div>
        )
    }
}


export default Project1