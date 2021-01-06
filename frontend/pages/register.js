import React, { useState } from 'react';

function Register(){

    const [meta , setMeta] = useState({
        name: "",
        description: "",
        status: ""
    });

    const onChangeInput = e => setMeta({...meta, [ e.target.name]: e.target.value});
    const sendMeta = async e => {
        e.preventDefault();
        
        
        console.log(meta);

     try{
        const res = await fetch('http://localhost:8081/metas',{
            method: 'POST',
            body: JSON.stringify(meta),
        })
        const message = await res.json();
        if(message.err){
            console.log(message.err)
        }else{
            console.log("register with sucessful")
        }
    }catch(err){
        console.log("error: goal not register without sucessful")
    }
    }

    return(
           <div onSubmit={sendMeta}>
             <h1>register my goals </h1>
             <hr/>
             <form>
                 <label> name </label>
                 <input tyep="text" name="name" id="name" placeholder="goal" onChange={onChangeInput}/>
                 <br/>
                 <br/>
                 <label> description </label>
                 <input tyep="text" name="decription" id="decription" placeholder="description" onChange={onChangeInput}/>
                 <br/>
                 <br/>
                 <label> status </label>
                 <input tyep="text" name="status" id="status" placeholder="status" onChange={onChangeInput}/>
                 <br/>
                 <br/>
                 <button type="submit"> register </button>
             </form>
           </div>
        );
}

export default Register;