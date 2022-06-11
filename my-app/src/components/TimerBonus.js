
import React, { Component } from 'react';

class TimerBonus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: this.props.gameState,
      secondsBonus: this.props.timeLeftBonus,
      level: this.props.level
    };

  }

  componentWillUpdate(prevProps) {
    if(prevProps.level !== this.props.level) {
      this.setState({
        level: this.props.level,
        secondsBonus: this.props.timeLeftBonus
      });
      
    }
  }

  shouldComponentUpdate(nextProps, nextState) {

    if (this.props.gameState !== 'running') {
      return false;
    } 
    if (this.props.gameState === 'running' ) {
      return true;
    } 
    if (nextProps.level !== this.props.level 
      //this.props.gameState === 'running' || 
       // this.props.gameState === 'flashcard'
       ) {
      return true;
    } 
  }
  
  tickBonus() {
  
    if (this.state.secondsBonus > 0) {
      this.setState(state => ({
        secondsBonus: state.secondsBonus - 0.25
      }));
    };

    if (this.props.gameState === 'flashcard') {
      this.setState(() => ({
        secondsBonus: 3
      }));

    if (this.state.secondsBonus <= 0) {
      return this.props.nullTimeLeftBonus();
    }

    };

   // console.log("this.props.level from TimerBonus:", this.props.level);

    console.log("this.state.secondsBonus", this.state.secondsBonus);
  }


  componentDidMount() {
    this.intervalBonus = setInterval(() => {
      if (this.state.secondsBonus > 0) this.tickBonus() }, 250);
   }

  componentWillUnmount() {
    clearInterval(this.intervalBonus);
  }


  render() {
    return (
      <div>
        TimerBonus: {this.state.secondsBonus} 
      </div>
    );
  }
}

export default TimerBonus;