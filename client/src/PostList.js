import React,{useState, useEffect} from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default() =>{
    const [posts, setPosts] = useState({});

    const getList = async()=>{
        const response = await axios.get('http://127.0.0.1:4000/post')
        setPosts(response.data)
    }

    useEffect(()=>{
        getList()
    }, []);

    console.log(posts);

    const renderPostList = Object.values(posts).map(post=>{
        return <div className="card" style={{width: '30%', marginBottom: '20px'}} 
        key={post.id}>
            <div className="card-body">
                <div className="title">
                    <h4>{post.title}</h4>
                    <CommentList PostId={post.id} />
                    <CommentCreate PostId={post.id} />
                </div>
            </div>
        </div>
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderPostList}
    </div>
}