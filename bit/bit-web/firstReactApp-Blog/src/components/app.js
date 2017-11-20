import React from "react";
import Header from "./common/header";
import Footer from "./common/footer";
import MainContent from "./posts/mainContent";
import { Switch, Route } from "react-router-dom";
import About from "./common/about";
import Authors from "./author/authors";
import SinglePostInfo from "./posts/singlePostInfo";
import SingleAuthorInfo from "./author/singleAuthorInfo";
import CreatePost from "./posts/composePost";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path = '/About' component={About} />
                    <Route exact path = '/Authors' component={Authors} />
                    <Route exact path = '/Compose' component={CreatePost} />
                    <Route exact path = '/' component={MainContent} />
                    <Route exact path = '/SinglePostInfo/:id' component={SinglePostInfo} />
                    <Route exact path = '/SingleAuthorInfo/:id' component={SingleAuthorInfo} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;