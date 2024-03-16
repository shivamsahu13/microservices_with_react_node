import React, {useState} from "react";
import axios from "axios";

export default({PostId})=>{
    const [content, setContent] = useState('');
    const onSubmit = async ()=>{
        await axios.post(`http://127.0.0.1:4001/post/${PostId}/comment`,{
            content
        })
        setContent(''); //value of content blank
    }
    return <div>
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <input type="text" value={content} onChange={e=>{setContent(e.target.value)}} />
            <button className="btn btn-primary">Submit</button>
        </div>
    </form>
    </div>
}