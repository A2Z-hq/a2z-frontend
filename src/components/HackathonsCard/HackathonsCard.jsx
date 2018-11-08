import React from 'react';
import './HackathonsCard.css';
import Tags from '../Tags/Tags';

const HackathonsCard = (props) => {
    return (
        <div className="hackathons-card">
            <h2>
                {props.title}
                <button className="side-button subscribe" title="Click to stay updated">Subscribe</button>
            </h2>
            {props.details.map((hack, i) => {
                return (
                    <p className="details" key={i}>{hack}</p>
                );
            })}
            <div className="hackathons-card-tags">
                {props.tags.map((tag, i) => {
                    return (
                        <Tags 
                            clickable={false} 
                            background={props.mappedTags[tag]}
                            text={tag}
                            key={i}/>
                    );
                })}
            </div>
            <button className="side-button view">
                <span role="img" aria-label="Link to hackathon">🔗</span>
            </button>
        </div>
    );
}

export default HackathonsCard;