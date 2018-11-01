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
import { Route, withRouter, Redirect } from 'react-router-dom';

class ResourcesPage extends React.Component {

    state = {
        resources: [
            {
                title: "Python", url: "/coding-resources/python", linksCount: "50", fav: false, icon: python,
            },
            {
                title: "Machine Learning", url: "/coding-resources/ml", linksCount: "62", fav: false, icon: ml,
            },
            {
                title: "Android", url: "/coding-resources/android", linksCount: "57", fav: false, icon: android,
            },
            {
                title: "Frontend", url: "/coding-resources/frontend", linksCount: "125", fav: false, icon: frontend,
            },
            {
                title: "Backend", url: "/coding-resources/backend", linksCount: "75", fav: false, icon: backend,
            },
            {
                title: "Haskell", url: "/coding-resources/haskell", linksCount: "20", fav: false, icon: haskell,
            },
            {
                title: "Scala", url: "/coding-resources/scala", linksCount: "57", fav: false, icon: scala,
            },
        ],

        openResource: false,
        redirect: false,
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

    exploreHandler = (title) => {
        this.setState({
            openResource: title
        })
    }

    render() {

        let current = this.state.openResource ? this.state.resources[this.state.resources.findIndex(res => res.title === this.state.openResource)] : null;

        const explore = this.state.openResource ? <Route path={current.url} exact render={() => (
                            <ResourceCardExpanded
                                explore={this.exploreHandler}
                                title={this.state.openResource}
                                icon={current.icon}
                                bookmark={this.bookmarkHandler}
                                isBookmarked={current.fav}
                                color={this.props.color}/>
                        )} /> : null;

        const { redirect } = this.state;

        if(redirect) {
            return <Redirect to="/coding-resources" />;
        }

        return (
            <div className="resources-page-container">
                <h1>{this.props.title}</h1>
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
                                openResource={this.state.openResource}
                                explore={this.exploreHandler}
                                color={this.props.color}/>
                        )
                    })}
                </div>
                {explore}
            </div>
        );
    }
}

export default withRouter(ResourcesPage);