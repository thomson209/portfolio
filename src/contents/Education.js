import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Software Development" where="Keyin College, St. John's, NL" from="August 2020" to="Present"/>
            <Widecard title="Machine Shop" where="SIAST - Kelsey Campus, Saskatoon, SK" from="1992" to="1993"/>
            <Widecard title="Grade 12 Diploma" where="Lutheran Collegiate Bible Institute, Outlook, SK" from="1989" to="1991"/>
            </div>
            )
        }
    }
    
export default Education;