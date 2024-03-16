import React, {useState} from "react";
import axios from "axios";

export default () =>{
    const [title, setTitle] = useState('');//title initial value is blank //settile is setter to set title value
    
    const onSubmit = async event=>{
        event.preventDefault();
        await axios.post('http://127.0.0.1:4000/post', {
            title
        })
        setTitle('')
    }
    
    return <div>
        <form onSubmit={onSubmit}>
            <div className="Container">
                <label>Title</label>
                <input type="text"
                value={title}
                onChange={e=>setTitle(e.target.value)}
                 className="form-control" />
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
}