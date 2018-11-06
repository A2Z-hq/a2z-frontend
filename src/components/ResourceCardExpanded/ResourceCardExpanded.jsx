import React from 'react';
import './ResourceCardExpanded.css';
import { Link } from 'react-router-dom';
import Tags from '../Tags/Tags';
import LinkButton from '../LinkButton/LinkButton';

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
        mappedTags: {
            "Free": "#49dbbd",
            "Beginner": "#dbc224",
            "Paid": "#6fbb2d",
            "YouTube": "#f67676",
            "Practice": "#257281",
            "Intermediate": "#dbc224",
            "Advanced": "#8465ac",
        },
        selectedTags: []
    }

    handleTags = (e) => {
        const currentTags = this.state.selectedTags;
        const tag = e.target.dataset.value;
        if(currentTags.includes(tag)) {
            const tagIndex = currentTags.indexOf(tag);
            const newTags = [
                ...currentTags.slice(0, tagIndex),
                ...currentTags.slice(tagIndex + 1)
            ];
            this.setState({
                selectedTags: newTags
            })
        } else {
            currentTags.push(tag);
            this.setState({
                selectedTags: currentTags
            })
        }
    }

    render() {
        return (
            <>
                <div className="expanded-resource-card">
                    <h2>
                        <span>
                            <span>
                                <Link to="/coding-resources"> 
                                    <button  className="close">
                                        <span role="img" aria-label="close-button">⬅</span>
                                    </button>
                                </Link>
                            </span>
                            {this.props.title}
                        </span>
                        <span
                            className="fa fa-star"
                            onClick={() => this.props.bookmark(this.props.title)}
                            style={{ 
                                cursor: 'pointer',
                                textShadow: '0px 0px 1px rgba(0,0,0,0.5)',
                                color: this.props.isBookmarked ? this.props.color : '#ddd'
                            }}>
                        </span>
                    </h2>
                    <div className="resource-tags">
                        {this.state.majorTags.map(tag => (
                            <Tags
                                key={tag}
                                text={tag}
                                isClicked={this.state.selectedTags.includes(tag)}
                                clickable={true}
                                clicked={this.handleTags}
                                background={this.state.mappedTags[tag]} />
                        ))}
                    </div>
                    <div className="resource-links-container">
                        {this.state.links.map((l, i) => (
                            <LinkButton
                                key={i}
                                link={l.link}
                                description={l.description}
                                tags={l.tags}
                                tagColors={this.state.mappedTags} />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default ResourceCardExpanded;