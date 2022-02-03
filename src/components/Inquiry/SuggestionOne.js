import React from "react";
import Header from "../Navigation/Header";
import SuggestionTitle from "./SuggestionComponent/SuggestionTitle";
import ByCustomer from "./SuggestionComponent/ByCustomer";
import SuggestionForm from "./SuggestionComponent/SuggestionForm";
import Csrftoken from "../Csrftoken";


const SuggestionOne = () => {   
    return (
    
        <>
            <Header />
            <SuggestionTitle />
            <ByCustomer />
            <form action="/function/suggestion" method="post">
                <input type="hidden" name="category" value="기부니" />
                <Csrftoken />
            
                <SuggestionForm />
            </form>
        </>
    )
}

export default SuggestionOne;