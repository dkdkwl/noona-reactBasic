import React, { Component } from 'react'

export default class appClass extends Component {

    constructor(props){
        super(props);
        this.state={
            counter2:0,
            num:1,
            value:0
        }
    }

    increase = ()=>{
        this.setState({
            counter2:this.state.counter2 + 1
        })
    };
  render() {
    return (
      <div>
        <div>state:{this.counter2}</div>
        <button onClick={increase}>클릭</button>
      </div>
    )
  }
}
