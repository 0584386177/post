import React from "react";
import FormRegister from "./formRegister";
import PostNew from "./postNew";
import sideBarStyle from './side-bar.module.css'
const sideBar = ()=>{
    return(
        <div className={sideBarStyle.sideBar}>
    <FormRegister></FormRegister>
    <PostNew></PostNew>
    </div>
    );
}

export default sideBar;