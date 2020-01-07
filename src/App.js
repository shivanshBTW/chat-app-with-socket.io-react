import React from 'react';
import './App.css';
import TopNav from "./Components/TopNav/TopNav";
import ChatScreen from "./Components/ChatScreen/ChatScreen";

function App() {
  return (
    <div className="App">
        <TopNav/>
        <ChatScreen/>
    </div>
  );
}

export default App;
