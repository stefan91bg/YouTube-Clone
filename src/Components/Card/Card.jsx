import React, {Component} from "react"
import "./card.css"

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( <div>
            <img src={this.props.img} alt="aaa"></img>
            <h2 onClick={()=>this.props.iframe(this.props.id)}>{this.props.title}</h2>
            <p>{this.props.desc}</p>
        </div> );
    }
}
 
export default Card;