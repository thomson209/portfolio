import React, { Component } from 'react';


class Projects extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Projects</h1>
            
            <h2>Here are a few examples of past projects:</h2>
            <br/>
                <a href="https://github.com/thomson209/weather_app.git" style={{color: "blue", fontWeight: "bold"}}>Weather App</a><br/>
                <a href="https://github.com/thomson209/calculator.git" style={{color: "blue", fontWeight: "bold"}}>HTML Calculator</a><br/>
                <a href="https://github.com/thomson209/market.git" style={{color: "blue", fontWeight: "bold"}}>Marketplace App</a>
            </div>
            )
        }
    }
    
export default Projects;