import React, { Component } from 'react'
import AdviceBox from './Components/AdviceBox'
import './App.css'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  //Create a progress bar using state
  state = { progress:0 }

  //Creating the function to change progress
  changeProgress = (progress)=>{
    this.setState({progress})
  }

  render() {
    return (
      <>
       <LoadingBar
        color='orange'
        height={3}
        progress={this.state.progress}
        onLoaderFinished={() => this.setState({progress:0})}
      />
        {/* randering the advice box  */}
        <AdviceBox setprogress={this.changeProgress}/>
      </>
    )
  }
}

