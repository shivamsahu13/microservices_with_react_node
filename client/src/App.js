import React from "react";
import PostCreate from './PostCreate.js';
import PostList from "./PostList.js";

export default()=>{
    return <div className="Container">
    <h1>Posts</h1>
    <PostCreate />
    <hr/>
    <PostList />

    </div>
}