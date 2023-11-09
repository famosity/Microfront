import React, { useState, useEffect,useContext } from 'react';
import {LoadingContainer, Spinner, Message} from './style'
import { HostContext } from '../context/index';

const Loading = () => {
  const [showLoading, setShowLoading] = useState(false);
  const{selectedMicroFront} = useContext(HostContext)
  
  console.log('data',selectedMicroFront)

    useEffect(() => {
        if (selectedMicroFront) {
            setShowLoading(true)
            const timer = setTimeout(() => {
            }, 30000); 
            return () => {
              clearTimeout(timer);
            };
          } else {
            setShowLoading(false);
          }
    }, [selectedMicroFront]);

    //after After half a minute the micro frontend should be rendered
  console.log("spinner: ",showLoading)
    return (
        
        <LoadingContainer>
            {showLoading ? (
                <Spinner />
            ) : (
                <Message>Aca aparecera el Microfrontend</Message>
            )}
        </LoadingContainer>
                
    )
        
        
};

export default Loading;