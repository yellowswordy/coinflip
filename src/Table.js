import React, {Component} from 'react';
import Coin from "./Coin";

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {totalFlips: 0, heads: 0, tails: 0, face: true};
        this.flip = this.flip.bind(this);
        this.clickHandle = this.clickHandle.bind(this)
    }

    flip(){
        const rand =  Math.random() > 0.5;
        this.setState(curentState =>({
            totalFlips: curentState.totalFlips + 1,
        }));
        if(rand){
        this.setState(curentState =>({
            heads: curentState.heads + 1,
            face: curentState.face = rand
        }))}else {
            this.setState(curentState =>({
                tails: curentState.tails + 1,
                face: curentState.face = rand
            }))
        }

    }
    clickHandle(){
        this.flip()
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin</h1>
                <Coin face={this.state.face}/>
                <button onClick={this.clickHandle}>Flip Me</button>
                <p>Out of {this.state.totalFlips} flips there were {this.state.heads} heads and {this.state.tails} tail</p>
            </div>

        );
    }
}

export default Table;