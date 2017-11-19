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
                timer: new Date().toLocaleTimeString()
            });

        }, 1000);
    }

    render() {
        return <h4> CurrentTime: {this.state.timer} </h4>;
    }
}
export default Timer;