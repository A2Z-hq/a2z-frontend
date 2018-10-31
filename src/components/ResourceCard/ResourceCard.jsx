import React from 'react';
import './ResourceCard.css';

const ResourceCard = (props) => {

    return (
        <div className="resource-card">
            <h2>
                <span>
                    <span>
                        <img src={props.icon} alt="" />
                    </span>
                    {props.title}
                </span>
                <span
                    className={props.isBookmarked ? "fa fa-star bookmarked" : "fa fa-star"}
                    onClick={() => props.bookmark(props.title)}
                    style={{ cursor: 'pointer', textShadow: '1px 2px 10px rgba(0,0,0,0.3)' }}>
                </span>
            </h2>
            <p>Total Links: {props.linksCount}</p>
            <button>Explore&nbsp; ➡</button>
        </div>
        
    );
}

export default ResourceCard;