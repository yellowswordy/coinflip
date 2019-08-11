import React, {Component} from 'react';
import './Coin.css'
import headPic from './head.jpg'
import tailPic from './tail.jpg'
class Coin extends Component {

    render() {
        return (
            <div className="Coin">
                <img src={this.props.face ? headPic : tailPic} alt=""/>
            </div>
        );
    }
}

export default Coin;