import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' style={{ textDecoration: 'none' }}>
            <h2>A<span style={{ color: 'var(--theme)' }}><sub>2</sub></span>Z</h2>
        </Link>

    );
}

export default Logo;