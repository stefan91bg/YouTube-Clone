import React, {Component} from "react"
import HomePage from "./Components/HomePage/HomePage.jsx"

const apiKey = "AIzaSyChbbqxXVVgOT-T6Umvu6FMdsbcseSU7yw"

class App extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
    this.search = this.search.bind(this)
    this.setIframe = this.setIframe.bind(this)
    this.state = { 
      data: [],
      isVideoSelected: false,
      searchValue: "",
      isButtonClicked: false
     }
  }

  deleteInput(){
    
  }

  click(){
    this.setState({
      isButtonClicked: true
    })
  }
  search(paramether){
    this.setState({
      searchValue: paramether
    })
  }

  setIframe(id){
    this.setState({
      isVideoSelected: id
    })
  }
  

  componentDidUpdate(prevProps, prevState){
    if (prevState.isButtonClicked !== this.state.isButtonClicked) {
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${apiKey}&q=${this.state.searchValue}`)
      .then(res=>res.json())
      .then(response=>this.setState({
        data: response.items,
        isButtonClicked: false,
        searchValue: ""
      }))
    }
    
  }

  render() { 
    return (
      <HomePage deleteInput={this.deleteInput} click={this.click} data={this.state.data} search={this.search} iframe={this.setIframe} isVideoSelected={this.state.isVideoSelected}></HomePage>
     );
  }
}
 
export default App;
