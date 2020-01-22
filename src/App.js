import React, {Component} from 'react';
import './App.css';
import TopNav from "./Components/TopNav/TopNav";
import ChatScreen from "./Components/ChatScreen/ChatScreen";

class App extends Component{
   constructor(props) {
      super(props);
      this.state = {
         timestamp: 'no timestamp yet'
      };
   }

   render(){
      return (
         <div className="App">
            <TopNav/>
            <ChatScreen/>
         </div>
      );
   }
}

export default App;
