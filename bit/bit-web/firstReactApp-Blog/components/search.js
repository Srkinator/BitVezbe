import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ""
        };

        this.searchHandler=this.searchHandler.bind(this);
        this.handleSearchRequest=this.handleSearchRequest.bind(this);
    }
    
    searchHandler(event){
        this.setState({searchString: event.target.value});
    }

    handleSearchRequest(){
        this.props.dispatch(this.state.searchString);
    }

    render() {
        return (
            <div>
                <input style={{border: "1px solid"}} onChange={this.searchHandler} type="text" value ={this.state.searchString} />
                <button onClick={this.handleSearchRequest}> Search </button>
            </div>
        );
    }
}

export default Search;