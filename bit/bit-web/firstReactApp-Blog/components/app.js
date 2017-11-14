import React from "react";
import Header from "./header";
import Footer from "./footer";
import MainContent from "./mainContent";
import { Switch, Route } from "react-router-dom";
import About from "./about";
import Authors from "./authors";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path = '/About' component={About} />
                    <Route exact path = '/Authors' component={Authors} />
                    <Route exact path = '/' component={MainContent} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;