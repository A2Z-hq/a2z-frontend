import React from 'react';
import './HackathonsPage.css';

export default class HackathonsPage extends React.Component {
    
    state = {
        hackathonsInit: [
            {
                name: "Call for Code",
                place: "Online",
                event: "Ended",
                application: null,
            },
            {
                name: "Conuhacks",
                place: "Canada",
                event: "Jan 1, 2019",
                application: null,
            },
            {
                name: "Djangothon",
                place: "Bengaluru, India",
                event: "Nov 17, 2018",
                application: null,
            },
            {
                name: "Hack in the North",
                place: "Allahabad, India",
                event: "TBD",
                application: "Mar, 2019",
            },
            {
                name: "Hack Western",
                place: "Western University",
                event: "Nov 23, 2018",
                application: null,
            },
            {
                name: "Hack Princeton",
                place: "USA",
                event: "Nov 9, 2018",
                application: null,
            },
            {
                name: "Call for Code",
                place: "Online",
                event: "Ended",
                application: null,
            },
            {
                name: "Call for Code",
                place: "Online",
                event: "Ended",
                application: null,
            }
        ],
        
        hackathons: []
    }
    
    render() {
        return (
            <div className="hackathons-page-container">
                <div className="hackathons">
                    <h2>Hackthons</h2>
                    <div>
                        {}
                    </div>
                </div>
                <div className="hackathons-page-options">

                </div>
            </div>
        );
    }
}