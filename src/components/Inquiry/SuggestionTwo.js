import React from "react";
import Header from "../Navigation/Header";
import SuggestionTitle from "./SuggestionComponent/SuggestionTitle";
import ByBusiness from "./SuggestionComponent/ByBusiness";
import SuggestionForm from "./SuggestionComponent/SuggestionForm";



const SuggestionTwo = () => {
    return(
        <>
            <Header />
            <SuggestionTitle />
            <ByBusiness />
            <form action="/function/suggestion" method="post">
                <input type="hidden" name="category" value="기부하니" />
                <SuggestionForm />
            </form>
        </>
    );
};

export default SuggestionTwo;