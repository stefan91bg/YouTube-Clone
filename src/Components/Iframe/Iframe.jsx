import React, {Component} from "react"
import "./iframe.css"

class Iframe extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div id={this.props.iframe}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.isVideoSelected}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> );
    }
}
 
export default Iframe;