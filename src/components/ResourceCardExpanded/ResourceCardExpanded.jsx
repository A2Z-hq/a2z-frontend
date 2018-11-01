import React from 'react';
import './ResourceCardExpanded.css';
import Backdrop from '../Backdrop/Backdrop';
import { Link } from 'react-router-dom';

const ResourceCardExpanded = (props) => {
    return (
        <>
            <Link to="/coding-resources">
                <Backdrop clicked={() => props.explore(false)} />
            </Link>
            <div className="expanded-resource-card">
                <h2>
                    <span>
                        <span>
                            <img src={props.icon} alt="" />
                        </span>
                        {props.title}
                    </span>
                    <span>
                        <span
                            className="fa fa-star"
                            onClick={() => props.bookmark(props.title)}
                            style={{ 
                                cursor: 'pointer',
                                textShadow: '1px 2px 10px rgba(0,0,0,0.3)',
                                color: props.isBookmarked ? props.color : 'white'
                            }}>
                        </span>
                        <span>
                            <Link to="/coding-resources"> 
                                <button  className="close" onClick={() => props.explore(false)}>
                                    <span role="img" aria-label="close-button">❌</span>
                                </button>
                            </Link>
                        </span>
                    </span>
                </h2>
            </div>
        </>
    );
}

export default ResourceCardExpanded;