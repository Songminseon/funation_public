import React, {useState, useEffect} from "react";
import SubmitList from "./SubmitList";
import axios from "axios";
import Header from "../Navigation/Header";


const AdminPage = () => {

    const [secure, setSecure] = useState("")

    useEffect(()=>{
        const fetchData = async() => {
            const result = await axios("/function/checkAdmin")
            setSecure(result.data.level)
            console.log(result)
        }
        fetchData()
    })

    console.log(secure)
    return(
        <>
        <Header />
        <h1>
            정렬은 오래된 시간순서이니 위에부터 하시면됨
        </h1>
        {secure==="admin"
            &&
            <>
                <SubmitList />
            </> 
            }
        </>
    );
};

export default AdminPage;