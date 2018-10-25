import React from 'react';
import './Layout.css';
import LinkButton from '../../components/LinkButton/LinkButton';
import Logo from '../../components/Logo/Logo';

const Layout = (props) => {
    return (
        <React.Fragment>
            <header>
                <div id="header-container">
                    <div id="header-left">
                        <Logo />
                    </div>
                    <div id="header-right">
                        <nav>
                            <ul>
                                <li><a href="/">Explorer</a></li>
                                <li><a href="/">Roadmaps</a></li>
                                <li><a href="/">SignUp</a></li>
                                <li><LinkButton href="/">Login</LinkButton></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                {props.children}
            </main>
            
            <footer>
                <div id="footer-container">
                    <Logo />
                    <div id="footer-links-container">
                        <div className="footer-link">
                            <p>Want to Contribute?</p>
                            <LinkButton
                                href="https://github.com/dipakkr/A-to-Z-Resources-for-Students"
                                bgColor="var(--bg-black)"
                                fontSize="12px"
                            >GitHub</LinkButton>
                        </div>
                        <div className="footer-link">
                            <p>Join our Gitter Lobby</p>
                            <LinkButton
                                href="https://gitter.im/a2z-resources"
                                bgColor="var(--red)"
                                fontSize="12px"
                            >Gitter</LinkButton>
                        </div>
                    </div>
                    <div id="claim">
                        <small>This project was initiated by Deepak Kumar in 2018</small><br/>
                        <small>Made with <span style={{ color: "red" }}>♥</span> by the Open Source</small>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Layout;