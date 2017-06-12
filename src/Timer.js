import React, { Component } from 'react';

class Timer extends Component {

  constructor(props){
    super(props);

    this.state = {
      clock: 0,
      startAndStop: true
    }

    this.ticker = this.ticker.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  componentDidMount(){
    this.timer = setInterval(this.ticker,1000)
    console.log('componentDidMount');
  }

  ticker(){
    this.setState({
      clock: new Date() - this.props.start
    });
  }


  stopTimer(){
    console.log('stop me');
    clearTimeout(this.timer);
    this.setState({
      startAndStop: false
    })
  }

  startTimer(){
    console.log('start me');
    this.timer = setInterval(this.ticker,1000)
    this.setState({
      startAndStop: true
    })
  }

  clearTimer(){
    console.log('restart timer');
    clearInterval(this.timer);
    this.setState({
      clock: 0,
      startAndStop: false
    })
  }

  render() {

    var clock = Math.round(this.state.clock / 1000);
    let startAndStopButton;

    if(this.state.startAndStop) {
      startAndStopButton = <button onClick={this.stopTimer}>
        Stop me
      </button>
    } else {
      startAndStopButton = <button onClick={this.startTimer}>
        Start Me
      </button>
    }

    return(
      <div>
        <p> You have been on this site since:</p> <br />
        <span>{clock}</span>
        <p>Seconds.</p>
        {startAndStopButton}
        <button onClick={this.clearTimer}>
          clear clear
        </button>
      </div>
    )
  }
}

export default Timer;
