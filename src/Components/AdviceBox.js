import React, { Component } from 'react'
import '../App.css'
import axios from 'axios';
export default class AdviceBox extends Component {
    
    //Creating state to save the advices
    state = { advice : ''}

    //Also when reload a page see advices
    componentDidMount = () => {
        this.fetchAdvice();
    }

    //fetchAdvice used to getting new advices
    fetchAdvice = async () => {
        this.props.setprogress(10)
        let url = "https://api.adviceslip.com/advice";

        //Fetch the data from axios
        const fetchData = await axios.get(url);
        this.props.setprogress(50)

        const { advice } = fetchData.data.slip

        this.setState({advice})
        this.props.setprogress(100)

    }

    //handling the advices when click on the button
    handleAddAdvices = ()=>{
        this.props.setprogress(10)
        this.props.setprogress(50)
        this.fetchAdvice();

        this.props.setprogress(100)
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1 className="h-primary">{this.state.advice} </h1>
                    <button className="btn" onClick={this.handleAddAdvices}>Give A Advice</button>
                </div>

            </>
        )
    }

}
