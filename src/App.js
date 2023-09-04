import React from "react";
import './App.css';
import SideBar from "./components/side-bar/sideBar.js";
import PostMain from "./components/post-main/postMain";
function App() {
  return(
   <div className='App'>
      <PostMain></PostMain>
      <SideBar></SideBar>
   </div>
  )
}

export default App;
