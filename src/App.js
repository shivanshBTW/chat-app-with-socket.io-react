import React from 'react';
import './App.css';
import TopNav from "./Components/TopNav/TopNav";
import ChatScreen from "./Components/ChatScreen/ChatScreen";
import io from 'socket.io-client'

let socket;



function App() {
  return (
    <div className="App">
        <TopNav/>
        <ChatScreen/>
    </div>
  );
}

export default App;
