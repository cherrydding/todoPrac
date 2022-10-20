import React from "react";
import todos from "../modules/todos";

import { useParams } from "react-router-dom";




const Detail = () => {
    const {id} = useParams();
 
 

    
return(
    <div>
        <div>{id}</div>
            <h1>{todos.title}</h1>
            <main>{todos.content}</main>
    </div>
)
}

export default Detail;