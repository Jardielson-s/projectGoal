import React, { useState } from 'react';

function Register(){

    const [meta , setMeta] = useState({
        name: '',
        decription: '',
        status: ''
    });

    const [ response , setResponse] = useState({
        formSave: false,
        type: '',
        message:''
    });

    const onChangeInput = e => setMeta({...meta, [ e.target.name]: e.target.value});
    const sendMeta = async e => {
        e.preventDefault();


     try{
        const res = await fetch('http://localhost:8081/metas',{
            method: 'POST',
            body: JSON.stringify(meta),
            headers: { 'Content-type': 'application/json' }
        })
        const message = await res.json();

        
        if(message.response){
            setResponse({
                formSave: false,
                type: 'error',
                message:message.response
            })
        }else{
            setResponse({
                formSave: false,
                type: 'sucess',
                message:message.response
            })
            //console.log(response)
        }
    }catch(err){
        setResponse({
            formSave: false,
            type: 'error: goal not register without sucessful',
            message:message.err
        })
    }
    }

    return(
           <div onSubmit={sendMeta}>
             <h1>register my goals </h1>
             <hr/>
             {
                 response.type === 'error' ? <p>{ response.message}</p> : ""
             }
             {
                 response.type === 'sucess' ? <p>{ response.message}</p> : ""
             }
             <form>
                 <label> name </label>
                 <input tyep="text" name="name" id="name" placeholder="goal" onChange={onChangeInput} required/>
                 <br/>
                 <br/>
                 <label> description </label>
                 <input tyep="text" name="decription" id="decription" placeholder="description" onChange={onChangeInput} required/>
                 <br/>
                 <br/>
                 <label> status </label>
                 <input tyep="text" name="status" id="status" placeholder="status" onChange={onChangeInput} required/>
                 <br/>
                 <br/>
                 <button type="submit"> register </button>
             </form>
           </div>
        );
}

export default Register;