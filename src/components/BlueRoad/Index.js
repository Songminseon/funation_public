import React, {useEffect} from "react";
import TestIndex from "./TestIndex";
import ReactGA from "react-ga";

const Index = () => {
    useEffect(()=>{
        ReactGA.initialize('UA-176122432-1');
        ReactGA.pageview(window.location.pathname)
    }, [])
    return(
        <TestIndex />
    );
};

export default Index;