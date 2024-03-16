import React, { useEffect, useState } from "react";
import axios from "axios";

export default({PostId}) =>{
  const [Comment, setComment] = useState([]);
 
  const fetchdata = async()=>{
    const res = await axios.get(`http://127.0.0.1:4001/post/${PostId}/comment`);
    setComment(res.data);
  }

  useEffect(()=>{
    fetchdata();
  }, [])

  const RenderComment = Comment.map(comment=>{ //isme Object.values ka use isliye ni ye already array me h or post list me vo object me isliye usko array me conevrt kiya
    return <ul>
        <li key={comment.id}>{comment.content}</li>
    </ul>
  })

  return <div>
    {RenderComment}
  </div>


}