import React, {useContext, useEffect, useState } from 'react';
import Header from "../component/header/index"
import Footer from "../component/footer/index"
import Botton from "../component/button/index"
import Loading from "../component/spinner/index"
import {HostContext} from "../component/context/index"
import English from "../data/en.json"
import Spanish from "../data/es.json"
import {
    Container,
    MainContent,
    Title,
    Divider
} from "./style"

// import ActorList from "ActorList/ActorList";
// const ActorList = lazy(() => import("ActorList/ActorList"));

const Home = () =>{
    const { language } = useContext(HostContext);
    const [languageData, setLanguageData] = useState(English);
  
    useEffect(() => {
      setLanguageData(language ==="English" ? English : Spanish);
    }, [language]);
  

    return(
        <>
            <Header />
            <Container>
                <MainContent>
                <Title>{languageData.title}</Title>
                <Divider />
                <Botton movieOne={languageData.movieOne} movieTwo={languageData.movieTwo}/>
                <Loading/>
                {/* <Suspense fallback={<div>Loading...</div>}>
                    <ActorList />
                </Suspense> */}
                </MainContent>
            </Container>
            <Footer />
        </> 
    )

}

export default Home;