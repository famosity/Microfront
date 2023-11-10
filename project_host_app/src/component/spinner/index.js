import React, { useState, useEffect,useContext } from 'react';
import {LoadingContainer, Spinner, Message} from './style'
import { HostContext } from '../context/index';

const Loading = () => {
  const [showLoading, setShowLoading] = useState(false);
  const{selectedMicroFront} = useContext(HostContext)

  useEffect(() => {
      if (selectedMicroFront) {
          setShowLoading(true)
          const timer = setTimeout(() => {
          }, 15000); 
          return () => {
            clearTimeout(timer);
          };
        } else {
          setShowLoading(false);
        }
  }, [selectedMicroFront]);

  //La idea era renderizar el microfront despues de que termine el spinner

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