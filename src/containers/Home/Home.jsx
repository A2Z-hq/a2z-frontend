import React from 'react';
import './Home.css';
import CardLink from '../../components/CardLink/CardLink'

export default class Home extends React.Component {
    render() {
        return (
            <div id="home-page-container">
                <div className="grid">
                    <div className="grid-item">
                        <CardLink href="/">Python</CardLink>
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="red" href="/">Javascript</CardLink> 
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="green" href="/">Node.js</CardLink>
                    </div>
                    <div className="grid-item">
                        <CardLink bgColor="#ac00e6" href="/">Machine Learning</CardLink>
                    </div>
                </div>
            </div>
        );
    }
}