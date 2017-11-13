import React from "react";
import Header from "./header";
import Footer from "./footer";
import MainContent from "./mainContent";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <MainContent />
                <Footer />
            </div>
        );
    }
}

export default App;