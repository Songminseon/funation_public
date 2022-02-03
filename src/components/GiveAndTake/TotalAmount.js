import React, {useState, useEffect} from "react";
import axios from "axios";

const TotalAmount = ({set_index}) => {

    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const fetchData = async() =>{
            const result = await axios(`/api/getAmount/${set_index}`)
            setTotal(result.data.total)
        }
        fetchData()

        return () => {
            setTotal(0)
        }
    }, [])
    return(
        <>
            {total}
        </  >
    );
};

export default TotalAmount;