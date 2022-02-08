import React, { Component } from "react"
import "./search-bar.css"

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    

    render() {
        return (
            <div className="search-bar">
                <img className="slika" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="slika"></img>
                <div className="right">
                    <input className="input" type="text" placeholder=" search" value={()=>this.props.deleteInput()}  onChange={(e)=>this.props.search(e.target.value)}/>
                    <button  className="search-button" onClick={()=>this.props.click() }>SEARCH</button>
                </div>
            </div>);
    }
}

export default SearchBar;