import React from 'react';
import './ResourceCardExpanded.css';
import Backdrop from '../Backdrop/Backdrop';
import { Link } from 'react-router-dom';

class ResourceCardExpanded extends React.Component {

    state = {
        links: [
            {
                description: "Learn Python | CodeAcademy",
                link: "https://www.codecademy.com/learn/learn-python",
                tags: ["Free", "Beginner"]
            },
            {
                description: "Progate Python Classes",
                link: "https://progate.com/languages/python",
                tags: ["Beginner"]
            },
            {
                link: "http://bit.ly/2NkrsKh",
                description: "Absolute Beginner's tutorials | YouTube",
                tags: ["Beginner", "YouTube"]
            },
            {
                link: "https://in.udacity.com/course/introduction-to-python--ud1110-india",
                description: "Intro to Python | Udacity",
                tags: ["Free", "Beginner"]
            },
            {
                link: "https://www.coursera.org/specializations/python",
                description: "Python for Everybody",
                tags: ["Paid", "Beginner"]
            },
            {
                link: "https://jeffknupp.com/",
                description: "Write Better Function with Python",
                tags: []
            },
            {
                link: "https://automatetheboringstuff.com/",
                description: "Automate Boring stuff with Python",
                tags: ["Intermediate", "Free"]
            },
            {
                link: "https://python.swaroopch.com/",
                description: "A byte of Python",
                tags: []
            },
            {
                link: "https://realpython.com/",
                description: "Real Python",
                tags: ["Free"]
            },
            {
                link: "https://projecteuler.net/",
                description: "Project Euler",
                tags: ["Practice"]
            },
        ],

        majorTags: ["Free", "Beginner", "Paid", "YouTube", "Practice", "Intermediate", "Advanced"],
        extraTags: ["Web Development", "Game Development", "Artificial Intelligence", "Scripting"]
    }

    render() {
        return (
            <>
                <Link to="/coding-resources">
                    <Backdrop clicked={() => null} />
                </Link>
                <div className="expanded-resource-card">
                    <h2>
                        <span>
                            <span>
                                <img src={this.props.icon} alt="" />
                            </span>
                            {this.props.title}
                        </span>
                        <span>
                            <span
                                className="fa fa-star"
                                onClick={() => this.props.bookmark(this.props.title)}
                                style={{ 
                                    cursor: 'pointer',
                                    textShadow: '1px 2px 10px rgba(0,0,0,0.3)',
                                    color: this.props.isBookmarked ? this.props.color : 'white'
                                }}>
                            </span>
                            <span>
                                <Link to="/coding-resources"> 
                                    <button  className="close">
                                        <span role="img" aria-label="close-button">❌</span>
                                    </button>
                                </Link>
                            </span>
                        </span>
                    </h2>
                    <div className="resource-tags">
                        {this.state.majorTags.map(tag => {
                            return <button className="resource-tag">
                                {tag}
                            </button>
                        })}
                    </div>
                    <div className="resource-links-container">
                        {this.state.links.map(l => {
                             return <a href={l.link}>
                                <button>
                                    {l.description}
                                    <div className="link-tags">
                                        Tags:&nbsp;
                                        <span>
                                            {l.tags.map(tag => {
                                                return <button className="resource-tag">
                                                    {tag}
                                                </button>
                                            })}
                                        </span>
                                    </div>
                                </button>
                            </a>
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default ResourceCardExpanded;