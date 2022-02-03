import React, {useEffect, useState} from "react";
import axios from "axios";


const Csrftoken = () => {    
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await axios("/auth/csrfToken")
            setToken(result.data.csrfToken);        
        }    
        fetchData();
        return () => setToken("")
    },[])

    

    const[token, setToken] = useState("")
    return(
        <>
            <input type="hidden" name="_csrf" value={token} />
        </>
    );
};

export default Csrftoken;
