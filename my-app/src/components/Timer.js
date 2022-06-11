
import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.props.timeLeft,
      gameState: this.props.gameState,
    };

  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.props.gameState !== 'running') {
      return false;
    } 
    if (this.props.gameState === 'running' || 
        this.props.gameState === 'flashcard') {
      return true;
    } 
  }

  tick() {
    if (this.props.timeChange !== 0) {
      this.setState(state => ({
        seconds: state.seconds + this.props.timeChange,
      }));
      this.props.resetTimeChange();

      if (this.state.seconds <= 0) {
        return this.props.setGameStateToEnded();
      }
    }
  
    if (this.props.gameState === 'running') {
      this.setState(state => ({
        seconds: state.seconds - 1
      }));

      if (this.state.seconds <= 0) {
        return this.props.setGameStateToEnded();
      }
    };

    if (this.props.gameState === 'flashcard') {
      this.setState(() => ({
        seconds: 10
      }));
    };

    console.log("this.state.seconds", this.state.seconds);
  }


  componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
   }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <div>
        Timer: {this.state.seconds} <br/>
        
      </div>
    );
  }
}

export default Timer;