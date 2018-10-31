import React from 'react';
import './ResourceCardExpanded.css';
import Backdrop from '../Backdrop/Backdrop';

const ResourceCardExpanded = (props) => {
    return (
        <>
            <Backdrop clicked={() => props.explore(false)} />
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
                            <button  className="close" onClick={() => props.explore(false)}>
                                <span role="img" aria-label="close-button">❌</span>
                            </button>
                        </span>
                    </span>
                </h2>
            </div>
        </>
    );
}

export default ResourceCardExpanded;