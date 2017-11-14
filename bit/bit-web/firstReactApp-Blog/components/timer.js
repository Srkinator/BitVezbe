import React from "react";
import { setInterval } from "timers";


class Timer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            timer: "pending"
        };
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                timer: new Date().toString()
            });

        }, 1000);
    }

    render() {
        return <h1> CurrentTime: {this.state.timer} </h1>;
    }
}
export default Timer;