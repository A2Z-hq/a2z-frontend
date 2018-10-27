import React from 'react';
import './LinkButton.css';

const LinkButton = (props) => {

    const variableStyles = {
        color: props.color || 'white',
        fontSize: props.fontSize || 'var(--font-size)',
        backgroundColor: props.bgColor || 'var(--light-green)'
    }

    return (
        <a href={props.href} style={variableStyles} className="link-button" target='_blank' rel="noopener noreferrer">{props.children}</a>
    );
}

export default LinkButton;