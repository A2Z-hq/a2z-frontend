import React from 'react';
import './ResourcesPage.css';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import android from '../../assets/images/icons/android.png';
import backend from '../../assets/images/icons/backend.png';
import frontend from '../../assets/images/icons/frontend.png';
import haskell from '../../assets/images/icons/haskell.png';
import ml from '../../assets/images/icons/ml.png';
import python from '../../assets/images/icons/python.png';
import scala from '../../assets/images/icons/scala.png';
import ResourceCardExpanded from '../../components/ResourceCardExpanded/ResourceCardExpanded';
import { Route, Switch } from 'react-router-dom';
import Tags from '../../components/Tags/Tags';

class ResourcesPage extends React.Component {

    state = {
        resourcesInit: [
            {
                title: "Python",
                url: "/coding-resources/python",
                linksCount: "50",
                fav: false,
                icon: python,
                tags: ["Programming Language"],
            },
            {
                title: "Machine Learning",
                url: "/coding-resources/ml",
                linksCount: "62",
                fav: false,
                icon: ml,
                tags: ["Technology"],
            },
            {
                title: "Android",
                url: "/coding-resources/android",
                linksCount: "57",
                fav: false,
                icon: android,
                tags: ["Technology"],
            },
            {
                title: "Frontend",
                url: "/coding-resources/frontend",
                linksCount: "125",
                fav: false,
                icon: frontend,
                tags: ["Technology"],
            },
            {
                title: "Backend",
                url: "/coding-resources/backend",
                linksCount: "75",
                fav: false,
                icon: backend,
                tags: ["Technology"],
            },
            {
                title: "Haskell",
                url: "/coding-resources/haskell",
                linksCount: "20",
                fav: false,
                icon: haskell,
                tags: ["Programming Language"],
            },
            {
                title: "Scala",
                url: "/coding-resources/scala",
                linksCount: "57",
                fav: false,
                icon: scala,
                tags: ["Programming Language"],
            },
        ],
        resources: [],
        majorTags: ["Programming Language", "Technology"],
        mappedTags: {
            "Programming Language": "#257281",
            "Technology": "#8465ac",
        },
        selectedTags: []
    }

    componentDidMount() {
        this.setState({
            resources: this.state.resourcesInit
        })
    }

    bookmarkHandler = (title) => {
        let toChange = null;
        this.state.resources.forEach((res, i) => {
            if(res.title === title) {
                toChange = i;
            }
        })
        let current = this.state.resources[toChange];
        current.fav = !current.fav;
        let newResources = [
            ...this.state.resources.slice(0, toChange),
            ...this.state.resources.slice(toChange)
        ]
        this.setState({
            resources: newResources
        })
    }

    filterby = (e) => {
        let filter = e.target.value;
        let newResources = this.state.resourcesInit.filter(res => res.type === filter);
        this.setState({
            resources: newResources
        })
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
            <Switch>
                {this.state.resources.map(res => (
                    <Route key={res.title} path={res.url} exact render={() => (
                        <ResourceCardExpanded
                            title={res.title}
                            icon={res.icon}
                            bookmark={this.bookmarkHandler}
                            isBookmarked={res.fav}
                            color={this.props.color}/>
                    )} />
                ))}
                <Route path="/coding-resources" render={() => (
                    <div className="resources-page-container">
                        <div className="resources-page-header">
                            <h1>{this.props.title}</h1>
                        </div>
                        <div className="resource-page-tags">
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
                        <div>
                            {this.state.resources.map(res => {
                                return (
                                    <ResourceCard
                                        key={res.title}
                                        icon={res.icon}
                                        url={res.url}
                                        title={res.title}
                                        linksCount={res.linksCount}
                                        bookmark={this.bookmarkHandler}
                                        isBookmarked={res.fav}
                                        color={this.props.color}
                                        tags={res.tags}
                                        tagColor={this.state.mappedTags}/>
                                )
                            })}
                        </div>
                    </div>
                )} />
            </Switch>
            
            );
    }
}

export default ResourcesPage;