import React, {Component} from "react"
import Card from '../Card/Card.jsx'
import SearchBar from "../SearchBar/SearchBar.jsx"
import Iframe from "../Iframe/Iframe.jsx"
import "./home-page.css"



class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
        <>
        <SearchBar click={this.props.click} deleteInput={this.props.deleteInput} search={this.props.search}></SearchBar>
       {this.props.isVideoSelected && <Iframe isVideoSelected={this.props.isVideoSelected}></Iframe>    }
        <div className="cards">{this.props.data.length>0 && this.props.data.map((e)=><Card title={e.snippet.title} desc={e.snippet.description} id={e.id.videoId} iframe={this.props.iframe} img={e.snippet.thumbnails.medium.url}></Card>)}</div>
        </>
        );
    }
}
 
export default HomePage;