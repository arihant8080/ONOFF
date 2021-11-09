
import { Component } from "react";
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            time:true,
          
        }
      
    }
    change=()=>{
        this.setState({
           time:! this.state.time,
        
        })
    }


    render(){
        return(
         <div>
            <button onClick={this.change}> {this.state.time ?"OFF":<div><h1>current time</h1> {new Date().toLocaleString()}</div>}</button>
         </div>
           
        )
    }
}
export default App;