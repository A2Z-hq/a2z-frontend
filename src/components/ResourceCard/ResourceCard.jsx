import React from 'react';
import './ResourceCard.css';
import { Link } from 'react-router-dom';

const ResourceCard = (props) => {

    //let resourceCardClassName = (props.openResource === props.title) ? "resource-card expanded" : "resource-card";

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
                    className="fa fa-star"
                    onClick={() => props.bookmark(props.title)}
                    style={{ 
                        cursor: 'pointer',
                        textShadow: '1px 2px 10px rgba(0,0,0,0.3)',
                        color: props.isBookmarked ? props.color : 'white'
                    }}>
                </span>
            </h2>
            <p>Total Links: {props.linksCount}</p>
            <button
                onClick={() => props.explore(props.title)}
                style={{ borderColor: props.color, backgroundColor: props.color }}>
                <Link to={props.url}>Explore&nbsp; ➡</Link>
            </button>
        </div>
        
    );
}

export default ResourceCard;